import { ApiConst } from '../../../configs';
import { request } from '../../../utils';

const getStatistic = (params) => {
  const api = ApiConst.order.chart()
  return request.call(api.url, {
    method: api.method,
    body: params,
  })
}

export {
  getStatistic,
}
