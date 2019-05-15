import React from 'react'
import { Avatar, Button, Checkbox, Tag } from 'antd'
import { routerRedux } from 'dva/router';

export default (context) => {
  const { dispatch } = context.props

  const goToEdit = _id => dispatch(routerRedux.push(`/products/${_id}/update`))

  const changeStatus = _id => dispatch({
    type: 'newProduct/changeStatus',
    productId: _id,
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
    dataIndex: 'covers',
    render: (value) => {
      return (<Avatar src={value[0]} shape="square" />)
    },
  }, {
    title: 'Tên',
    dataIndex: 'name',
  }, {
    title: 'Giá',
    align: 'center',
    dataIndex: 'price',
  }, {
    title: 'Số lượng',
    align: 'center',
    dataIndex: 'quantity',
  }, {
    title: 'Danh mục',
    dataIndex: 'categories',
    render: categories => (
      categories.map(item => (
        <Tag key={item._id}>{item.name}</Tag>
      ))
    ),
  }, {
    title: 'Active',
    align: 'center',
    dataIndex: 'active',
    render: (value, row) => (
      <Checkbox defaultChecked={value} onChange={() => changeStatus(row._id)} />
    ),
  }, {
    dataIndex: '_id',
    render: value => (
      <Button icon="edit" onClick={() => goToEdit(value)} />
    ),
  }]
}
