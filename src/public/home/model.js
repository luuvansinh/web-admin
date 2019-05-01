import { getProducts } from './service';

export default {

  namespace: 'home',

  state: {
    products: [],
    filters: {
      page: 0,
    },
  },

  reducers: {
    updateState(state, action) {
      return { ...state, ...action.payload }
    },
  },

  effects: {
    *products({ payload }, { put, call }) {
      const response = yield call(getProducts, payload)
      const { products, total, limit } = response.data.data
      yield put({
        type: 'updateState',
        payload: {
          products,
          filters: {
            ...payload,
            limit,
            total,
          },
        },
      })
    },
  },
}
