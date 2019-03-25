import { ApiConst } from '../../../configs'
import { request } from '../../../utils'

const getAll = (data) => {
  const api = ApiConst.product.all()
  return request.call(api.url, {
    body: data,
  })
}

const detail = (_id) => {
  const api = ApiConst.product.detail(_id)
  return request.call(api.url)
}

const update = (_id, data) => {
  const api = ApiConst.product.update(_id)
  return request.call(api.url, {
    method: api.method,
    body: data,
  })
}

export default {
  getAll,
  detail,
  update,
}
