import { fetch } from './service'
import { notification } from '../../../utils'

export default {
  namespace: 'userList',
  state: {
    users: [],
    filter: {
      city: 'all',
      keyword: '',
      sort: '-statistic.coin',
      isLocalExpert: 'all',
      page: 0,
      limit: 0,
      total: 0,
    },
  },

  subscriptions: {},

  effects: {
    * fetch({ payload }, { call, put }) {
      const data = yield call(fetch, payload)
      const response = data.data
      if (!response.data) {
        return notification.error(response.message)
      }
      yield put({
        type: 'updateState',
        payload: {
          users: response.data.users,
          filter: {
            ...payload,
            total: response.data.total,
            limit: response.data.limitPerPage,
          },
        },
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
