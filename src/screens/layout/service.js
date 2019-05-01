import { request } from '../../utils'
import { ApiConst } from '../../configs'

export function getUserInfo() {
  const api = ApiConst.me.userInfo()
  return request.call(api.url, {
    method: api.method,
  })
}

export function getCategories() {
  const api = ApiConst.categoy.getForPublic()
  return request.call(api.url, {
    method: api.method,
  })
}

export function getCart() {
  const api = ApiConst.cart.all()
  return request.call(api.url, {
    method: api.method,
  })
}

export function login(data) {
  const api = ApiConst.common.publicLogin()
  return request.call(api.url, {
    method: api.method,
    body: data,
  })
}

export function register(data) {
  const api = ApiConst.common.register()
  return request.call(api.url, {
    method: api.method,
    body: data,
  })
}
