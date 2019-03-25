import queryString from 'query-string'
import { routerRedux } from 'dva/router'
import { AppConst, RoleConst, ComponentConst, MessageConst } from '../../configs'
import { getUserInfo } from './service'
import { helper, notification } from '../../utils'


export default {
  namespace: 'app',
  state: {
    user: {},
    appFilters: {},
    isLoggedIn: false,
    locationPathname: '',
    locationQuery: {},
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
    *init({}, { put, call, select }) {
      // Get token saved in storage
      const token = localStorage.getItem(AppConst.localStorage.authKey)
      const role = localStorage.getItem(AppConst.localStorage.roleKey)

      // if have no token, redirect to login page
      if (!token || !role || role === 'undefined') {
        localStorage.removeItem(AppConst.localStorage.authKey)
        localStorage.removeItem(AppConst.localStorage.roleKey)
        return yield put(routerRedux.push('/login'))
      }
      const { locationPathname } = yield select(_ => _.app)
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
        // yield put(routerRedux.push('/users'))
      }
      // const isNewUser = localStorage.getItem(AppConst.localStorage.isNewUser)
      // if (isNewUser === 'true') {
      //   yield put(routerRedux.push('/profile'))
      // }
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
