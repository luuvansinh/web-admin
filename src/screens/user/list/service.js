import { request } from '../../../utils'
import { ApiConst } from '../../../configs'

export function fetch(data) {
  const api = ApiConst.user.all()
  return request.call(api.url, { method: api.method, body: data })
}

const changeStatus = (userId) => {
  const api = ApiConst.user.changeStatus(userId)
  return request.call(api.url, {
    method: api.method,
  })
}

export {
  changeStatus,
}

