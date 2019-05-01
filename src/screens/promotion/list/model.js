export default {
  namespace: 'promotions',
  state: {
    promotions: [],
    filter: {
      page: 0,
      total: 0,
      limit: 0,
    },
  },
  effects: {},
  reducers: {
    updateState(state, { payload }) {
      return {
        ...state,
        ...payload,
      }
    },
  },
}
