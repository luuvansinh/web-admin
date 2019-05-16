import React from 'react'
import { Link } from 'dva/router';
import { Select } from 'antd';
import { AppConst, MessageConst } from '../../../../configs';
import { format } from '../../../../utils';

const orderStatus = AppConst.order.status.list

export default (context) => {
  const { dispatch } = context.props


  const changeStatus = (orderId, status) => dispatch({
    type: 'orders/changeStatus',
    orderId,
    status,
  })
  return [{
    title: '#',
    className: 'hidden-break-small',
    dataIndex: '',
    render: (value, row, index) => {
      return index + 1
    },
  }, {
    title: 'User',
    dataIndex: 'user',
    render: user => (
      <Link to={`/users/${user._id}`}>
        {user.name}
      </Link>
    ),
  }, {
    title: 'SĐT',
    dataIndex: 'phone',
    render: phone => format.phone(phone),
  }, {
    title: 'Số tiền',
    align: 'center',
    dataIndex: 'total',
    render: value => format.number(value),
  }, {
    title: MessageConst.date,
    dataIndex: 'createdAt',
    render: value => format.date(value),
  }, {
    title: MessageConst.payment,
    dataIndex: 'paymentMethod',
  }, {
    title: 'Trạng thái',
    dataIndex: 'status',
    render: (value, row) => (
      <Select
        disabled={value === 'done'}
        defaultValue={orderStatus.find(item => item._id === value).name}
        onChange={status => changeStatus(row._id, status)}
        style={{ width: '60%' }}
      >
        {
          orderStatus.map(item => (
            <Select.Option key={item._id}>{item.name}</Select.Option>
          ))
        }
      </Select>
    ),
  }]
}
