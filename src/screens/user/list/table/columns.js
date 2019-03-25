import React from 'react'
import { Avatar, Tag } from 'antd'
import { key } from '../../../../configs/locale'
import { format } from '../../../../utils'

import RcPopoverStatistic from './popover-statistic'

// const { confirm } = Modal

export default (context) => {
  const { translate, changeLocalExpert } = context.props
  return [{
    title: '#',
    className: 'hidden-break-small',
    dataIndex: '',
    render: (value, row, index) => {
      return index + 1
    },
  }, {
    title: '',
    dataIndex: 'avatar',
    render: (value) => {
      return (<Avatar src={value} shape="square" />)
    },
  }, {
    title: translate(key.titlePhone),
    dataIndex: 'phone',
    render: (value) => {
      return format.phone(value)
    },
  }, {
    title: 'Email',
    dataIndex: 'email',
    render: (value) => {
      return !value ? '-' : value
    },
  }, {
    title: translate(key.titleCity),
    dataIndex: 'city',
    render: (value) => {
      return <Tag color="geekblue">{format.city(value)}</Tag>
    },
  }, {
    render: (value, row) => {
      return (<RcPopoverStatistic translate={translate} data={row} changeLocalExpert={changeLocalExpert} />)
    },
  }]
}
