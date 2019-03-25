import service from './service'

export default {
  namespace: 'productList',
  state: {
    products: [],
    filter: {
      keyword: '',
      page: 0,
      limit: 0,
      total: 0,
    },
  },
  effects: {
    *fetch({ payload }, { call, put }) {
      const response = yield call(service.getAll, payload)
      const { products, limitPerPage, total } = response.data.data
      yield put({
        type: 'updateState',
        payload: {
          products,
          filter: {
            limit: limitPerPage,
            total,
            ...payload,
          },
        },
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
