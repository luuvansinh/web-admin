import React from 'react'
import { notification } from 'antd'

notification.config({
  duration: 5,
})

export default {
  success: (data) => {
    return notification.success({
      message: data.message,
      description: <img src={data.cover} alt="" style={{ width: '100px', height: '100px' }} />,
    })
  },
}
