import { getAll, create, update, changeStatus } from './service'
import { notification } from '../../utils'

export default {
  namespace: 'category',
  state: {
    categories: [],
  },
  effects: {
    *fetch({}, { call, put }) {
      const response = yield call(getAll)
      const { categories } = response.data.data
      yield put({
        type: 'updateState',
        payload: {
          categories,
        },
      })
    },
    *create({ payload }, { call, put }) {
      const response = yield call(create, payload)
      const { success, message } = response.data

      if (!success) {
        return notification.error(message)
      }
      yield put({
        type: 'fetch',
      })
    },
    *update({ payload, categoryId }, { call, put }) {
      const response = yield call(update, categoryId, payload)
      const { success, message } = response.data

      if (!success) {
        return notification.error(message)
      }

      yield put({
        type: 'fetch',
      })
    },
    *changeStatus({ categoryId }, { call }) {
      const response = yield call(changeStatus, categoryId)
      const { success, message } = response.data

      if (!success) {
        return notification.error(message)
      }
      notification.success(message)
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
