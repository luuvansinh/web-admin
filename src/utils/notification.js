import { message } from 'antd'
import { AppConst } from '../configs'

message.config({
  duration: 5,
})

const { success, error, info, warning } = AppConst.notification
export default {
  success: (text) => {
    return message[success](text)
  },
  error: (text) => {
    return message[error](text, 7)
  },
  info: (text) => {
    return message[info](text)
  },
  warning: (text) => {
    return message[warning](text)
  },
}
