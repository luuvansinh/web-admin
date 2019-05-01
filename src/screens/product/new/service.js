import { ApiConst } from '../../../configs'
import { request } from '../../../utils'

const create = (data) => {
  const api = ApiConst.product.create()
  return request.call(api.url, {
    method: api.method,
    body: data,
  })
}

const update = (_id, data) => {
  const api = ApiConst.product.update(_id)
  return request.call(api.url, {
    method: api.method,
    body: data,
  })
}

const getDetail = (_id) => {
  const api = ApiConst.product.detail(_id)
  return request.call(api.url, {
    method: api.method,
  })
}

const changeStataus = (_id) => {
  const api = ApiConst.product.changeStatus(_id)
  return request.call(api.url, {
    method: api.method,
  })
}

const uploadCover = (_id, file) => {
  const api = ApiConst.product.covers(_id)
  return request.call(api.url, {
    method: api.method,
    file,
  })
}

export {
  create,
  update,
  getDetail,
  changeStataus,
  uploadCover,
}
