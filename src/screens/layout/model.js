import queryString from 'query-string'
import { routerRedux } from 'dva/router'
import { AppConst, RoleConst, ComponentConst, MessageConst } from '../../configs'
import { getUserInfo, getCategories, getCart, login } from './service'
import { helper, notification } from '../../utils'

const { authKey, roleKey } = AppConst.localStorage

export default {
  namespace: 'app',
  state: {
    user: {},
    appFilters: {},
    isLoggedIn: false,
    locationPathname: '',
    locationQuery: {},
    categories: [],
    cart: [],
    hasPublicUser: false,
    pUser: {},
  },

  subscriptions: {
    setupHistory({ dispatch, history }) {
      history.listen((location) => {
        const token = localStorage.getItem(AppConst.localStorage.authKey)
        dispatch({
          type: 'updateState',
          payload: {
            isLoggedIn: !!token,
            locationPathname: location.pathname,
            locationQuery: queryString.parse(location.search),
          },
        })
      })
    },
    setup({ dispatch }) {
      dispatch({ type: 'init' })
    },
  },

  effects: {
    *init({ }, { put, call, select }) {
      // Get token saved in storage
      const token = localStorage.getItem(AppConst.localStorage.authKey)
      const role = localStorage.getItem(AppConst.localStorage.roleKey)
      const { locationPathname } = yield select(_ => _.app)

      // if have no token, redirect to login page
      if (!token || !role || role === 'undefined') {
        localStorage.removeItem(AppConst.localStorage.authKey)
        localStorage.removeItem(AppConst.localStorage.roleKey)
        return yield put(routerRedux.push(locationPathname))
      }
      // Get user info
      const response = yield call(getUserInfo)
      const { data } = response.data

      // // Alert if failed
      if (!response || !response.data.success) {
        return notification.error(response ? response.message : MessageConst.ServerError)
      }
      const { user } = data
      const userRole = user.role

      // Update state to models
      yield put({
        type: 'updateState',
        payload: {
          user,
          appFilters: ComponentConst,
        },
      })
      // Push to page based to role
      if (!helper.checkPathPermission(RoleConst[userRole].pages, locationPathname)) {
        yield put(routerRedux.push(RoleConst[userRole].pages[0].id))
      }
    },

    * logout(data, { put }) {
      // Do some stuff (remove token, ...)
      localStorage.removeItem(AppConst.localStorage.authKey)
      localStorage.removeItem(AppConst.localStorage.roleKey)

      yield put({
        type: 'updateState',
        payload: {
          user: null,
        },
      })

      // Redirect to login page
      window.location.href = '/login'
    },
    *getCategories({ }, { call, put }) {
      const response = yield call(getCategories)
      const { categories } = response.data.data
      yield put({
        type: 'updateState',
        payload: { categories },
      })
    },
    *getCart({ }, { call, put }) {
      const response = yield call(getCart)
      const { list } = response.data.data
      yield put({
        type: 'updateState',
        cart: list,
      })
    },
    *userLogin({ payload }, { call, put }) {
      const response = yield call(login, payload)
      const { success, message, data: { token, user } } = response.data
      if (!success) {
        return notification.error(message)
      }
      localStorage.setItem(authKey, token)
      localStorage.setItem(roleKey, user.role)

      yield put({
        type: 'updateState',
        payload: {
          hasPublicUser: true,
          pUser: user,
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
