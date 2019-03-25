import { login } from './service'
import { notification } from '../../utils'
import { AppConst, MessageConst, RoleConst } from '../../configs'

const { authKey, roleKey } = AppConst.localStorage

export default {
  namespace: 'login',
  state: {},
  effects: {
    *login({ payload }, { call, put }) {
      const response = yield call(login, payload)

      const { token, user } = response.data.data
      if (!token) {
        return notification.error(response.message || MessageConst.serverError)
      }

      const permittedRoles = Object.keys(RoleConst)

      if (!permittedRoles.includes(user.role)) {
        return notification.error(MessageConst.noPermission)
      }

      // save localStorage
      localStorage.setItem(authKey, token)
      localStorage.setItem(roleKey, user.role)

      // App init state
      yield put({ type: 'app/init' })
    },
  },
}
