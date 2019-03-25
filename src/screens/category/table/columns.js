import React from 'react'
import { Tooltip, Button, Checkbox } from 'antd';

export default (context) => {
  const { dispatch, toggleModal } = context.props

  const changeStatus = (categoryId) => {
    dispatch({
      type: 'category/changeStatus',
      categoryId,
    })
  }

  const toggle = (category) => {
    toggleModal('update', category)
  }
  return [{
    title: '#',
    className: 'hidden-break-small',
    dataIndex: '',
    render: (value, row, index) => {
      return index + 1
    },
  }, {
    title: 'Tên',
    dataIndex: 'name',
  }, {
    title: 'Active',
    align: 'center',
    dataIndex: 'active',
    render: (value, row) => (
      <Checkbox defaultChecked={value} onChange={() => changeStatus(row._id)} />
    ),
  }, {
    align: 'center',
    render: (value, row) => {
      return (
        <Tooltip title="Cập nhật">
          <Button size="small" onClick={() => toggle(row)} icon="edit" />
        </Tooltip>
      )
    },
  }]
}
