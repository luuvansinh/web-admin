import React from 'react'
import { Avatar, Checkbox } from 'antd'
import { format } from '../../../../utils'


export default (context) => {
  const { dispatch } = context.props
  const changeStatus = userId => dispatch({
    type: 'users/changeStatus',
    userId,
  })
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
    title: 'Name',
    dataIndex: 'name',
  }, {
    title: 'Phone',
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
    title: 'Đã chi tiêu',
    dataIndex: 'statistic.expense',
    render: value => format.number(value),
  }, {
    title: 'Số đơn hàng',
    dataIndex: 'statistic.bill',
    render: value => format.number(value),
  }, {
    title: 'Active',
    dataIndex: 'active',
    align: 'center',
    render: (value, row) => (
      <Checkbox defaultChecked={value} checked={value} onChange={() => changeStatus(row._id)} />
    ),
  }]
}
