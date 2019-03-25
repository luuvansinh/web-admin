import fetch from 'dva/fetch'
import HttpStatus from 'http-status-codes'
import { AppConst, ApiConst } from '../configs'
import { key } from '../configs/locale'

async function parseJSON(response) {
  // Handle 401- Unauthorized
  const { authKey, roleKey } = AppConst.localStorage
  if (response.status && response.status === HttpStatus.UNAUTHORIZED) {
    localStorage.removeItem(authKey)
    localStorage.removeItem(roleKey)
    // Redirect to login page
    window.location.href = '/login'
  }
  // handle 404 - not found
  if (response.status && response.status === HttpStatus.NOT_FOUND) {
    // Redirect to error page
    window.location.href = '/404'
  }
  const jsonData = await response.json()
  return {
    ...jsonData,
    success: response.status < 400,
  }
}

function serializeObject(obj) {
  const str = []
  for (const p in obj) {
    if (typeof obj[p] === 'object' && obj[p].length) {
      for (const i in obj[p]) {
        if (Object.prototype.hasOwnProperty.call(obj[p], i)) {
          str.push(`${encodeURIComponent(p)}[]=${encodeURIComponent(obj[p][i])}`)
        }
      }
    } else if (typeof obj[p] === 'object') {
      for (const k in obj[p]) {
        if (Object.prototype.hasOwnProperty.call(obj[p], k)) {
          str.push(`${encodeURIComponent(p)}[${k}]=${encodeURIComponent(obj[p][k])}`)
        }
      }
    } else {
      str.push(`${encodeURIComponent(p)}=${encodeURIComponent(obj[p])}`)
    }
  }
  return str.join('&')
}

function processOptions(options) {
  if (!options.headers) {
    options.headers = {}
    if (!options.file) {
      const language = localStorage.getItem(key.i18nLanguage) || AppConst.locale.default
      options.headers = {
        'Content-Type': 'application/json',
        'Accept-Language': language,
      }
    }
  }

  // Proccess send data
  if (options.method === ApiConst.methods.get) {
    options.query = serializeObject(options.body)
    options.body = undefined
    delete options.body
  } else {
    options.body = JSON.stringify(options.body)
  }

  if (options.file) {
    options.body = new FormData()
    options.body.append('file', options.file)
  }

  const token = localStorage.getItem(AppConst.localStorage.authKey)

  if (token) {
    options.headers.Authorization = `Bearer ${token}`
  }
  return options
}

/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */
const call = (url, options = {}) => {
  url = ApiConst.endpoint + url
  if (!options.method) {
    options.method = ApiConst.methods.get
  }
  options = processOptions(options)
  if (options.query) {
    url += `?${options.query}`
  }

  return fetch(url, options)
    .then(parseJSON)
    .then(data => ({ data }))
    .catch(err => ({ err }))
}

export default {
  call,
}
