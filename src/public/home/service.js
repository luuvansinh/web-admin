import { ApiConst } from '../../configs';
import { request } from '../../utils';

export const getProducts = (params) => {
  const api = ApiConst.public.products.all()
  return request.call(api.url, {
    method: api.method,
    body: params,
  })
}
