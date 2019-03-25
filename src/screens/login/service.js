import { request } from '../../utils'
import { ApiConst } from '../../configs'

const login = async (data) => {
  const api = ApiConst.common.login()
  return request.call(api.url, {
    method: api.method,
    body: data,
  })
}

export {
  login,
}
