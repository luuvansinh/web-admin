import { ApiConst } from '../../configs'
import { request } from '../../utils'

const getAll = () => {
  const api = ApiConst.categoy.all()
  return request.call(api.url, {
    method: api.method,
  })
}

const create = (data) => {
  const api = ApiConst.categoy.create()
  return request.call(api.url, {
    method: api.method,
    body: data,
  })
}

const update = (_id, data) => {
  const api = ApiConst.categoy.update(_id)
  return request.call(api.url, {
    method: api.method,
    body: data,
  })
}

const changeStatus = (_id) => {
  const api = ApiConst.categoy.changeStatus(_id)
  return request.call(api.url, {
    method: api.method,
  })
}

export {
  getAll,
  create,
  update,
  changeStatus,
}
