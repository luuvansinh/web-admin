import React from 'react'
import { Link } from 'dva/router';
import { MessageConst } from '../../../../configs';
import { format } from '../../../../utils';


export default () => {
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
  }]
}
