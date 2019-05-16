import { ApiConst } from '../../../configs';
import { request } from '../../../utils';

const allOrders = (params) => {
  const api = ApiConst.order.all()
  return request.call(api.url, {
    method: api.method,
    body: params,
  })
}

const changeStatus = (orderId, status) => {
  const api = ApiConst.order.changeStatus(orderId)
  return request.call(api.url, {
    method: api.method,
    body: { status },
  })
}

export {
  allOrders,
  changeStatus,
}
