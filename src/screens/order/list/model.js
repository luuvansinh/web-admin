import { allOrders, changeStatus } from './service';
import { notification } from '../../../utils';

export default {
  namespace: 'orders',
  state: {
    orders: [],
    filter: {
      page: 0,
      total: 0,
      limit: 0,
    },
  },
  effects: {
    *fetch({ payload }, { call, put }) {
      const response = yield call(allOrders, payload)
      const { orders, total, limit } = response.data.data
      yield put({
        type: 'updateState',
        payload: {
          orders,
          filter: {
            ...payload,
            total,
            limit,
          },
        },
      })
    },
    *changeStatus({ orderId, status }, { call, put, select }) {
      const response = yield call(changeStatus, orderId, status)
      const { success, message } = response.data
      if (!success) {
        return notification.error(message)
      }
      notification.success(message)
      const { filter } = yield select(_ => _.orders)
      yield put({
        type: 'fetch',
        payload: filter,
      })
    },
  },
  reducers: {
    updateState(state, { payload }) {
      return {
        ...state,
        ...payload,
      }
    },
  },
}
