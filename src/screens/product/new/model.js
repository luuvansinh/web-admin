import { routerRedux } from 'dva/router';
import { getAll } from '../../category/service'
import { create, getDetail, update, changeStataus } from './service';
import { notification } from '../../../utils';

const initState = {
  product: {},
  categories: [],
  isUpdating: false,
}

export default {
  namespace: 'newProduct',
  state: initState,
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
    *fetchProduct({ productId }, { call, put }) {
      const response = yield call(getDetail, productId)
      const { product } = response.data.data
      yield put({
        type: 'updateState',
        payload: { product, isUpdating: true },
      })
    },
    *create({ payload }, { call, put, select }) {
      const { product, isUpdating } = yield select(_ => _.newProduct)
      const response = isUpdating ? yield call(update, product._id, payload) : yield call(create, payload)
      const { success, message } = response.data

      if (!success) {
        return notification.error(message)
      }
      yield put(routerRedux.push('/products'))
    },
    *changeStatus({ productId }, { call }) {
      const response = yield call(changeStataus, productId)
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
    clearState() {
      return initState
    },
  },
}
