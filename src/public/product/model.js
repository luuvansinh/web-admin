export default {

  namespace: 'product',

  state: {},

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },

  effects: {
    // *fetch({ payload }, { call, put }) {
    //   yield put({ type: 'save' });
    // },
  },

}
