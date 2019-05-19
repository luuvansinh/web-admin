import { fetch, changeStatus } from './service'
import { notification } from '../../../utils';

export default {
  namespace: 'users',
  state: {
    users: [],
    filter: {
      keyword: '',
      sort: '-statistic.expense',
      page: 0,
      limit: 0,
      total: 0,
    },
  },
  effects: {
    *fetch({ payload }, { call, put }) {
      const response = yield call(fetch, payload)
      const { users, total, limitPerPage } = response.data.data
      yield put({
        type: 'updateState',
        payload: {
          users,
          filter: {
            ...payload,
            total,
            limit: limitPerPage,
          },
        },
      })
    },
    *changeStatus({ userId }, { call, put, select }) {
      const response = yield call(changeStatus, userId)
      const { success, message } = response.data
      if (!success) {
        return notification.error(message)
      }
      notification.success(message)
      const { filter } = yield select(_ => _.users)
      yield put({
        type: 'fetch',
        payload: filter,
      })
    },
  },

  reducers: {
    updateState(state, action) {
      return {
        ...state,
        ...action.payload,
      }
    },
  },
}
