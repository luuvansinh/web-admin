import { request } from '../../utils'
import { ApiConst } from '../../configs'

export function getUserInfo() {
  const api = ApiConst.me.userInfo()
  return request.call(api.url, {
    method: api.method,
  })
}
