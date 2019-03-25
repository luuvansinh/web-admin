import React from 'react'
import { Popover, Button, Checkbox, Icon, Table, Popconfirm } from 'antd'
import { format } from '../../../../utils'
import { key } from '../../../../configs/locale'
import './style.less'

// content
const Content = ({ translate, data, changeLocalExpert }) => {
  // data table
  const statistics = [{
    title: 'Coin',
    desc: data.statistic.coin,
  }, {
    title: 'Bill',
    desc: data.statistic.bill,
  }, {
    title: 'Billed coin',
    desc: data.statistic.billedZcoin,
  }, {
    title: 'Expense',
    desc: data.statistic.expense,
  }, {
    title: 'Local expert',
    desc: 'isLocalExpert',
  }]

  // columns table
  const columns = [{
    title: '',
    dataIndex: 'title',
    render: (value) => {
      return <span>{value}</span>
    },
  }, {
    title: '',
    dataIndex: 'desc',
    render: (value) => {
      if (value === 'isLocalExpert') {
        // return (<Switch defaultChecked={data.isLocalExpert} size="small" onChange={() => onChangeLocalExpert()} />)
        return (
          <Popconfirm
            okText={translate(key.ok)}
            title={data.isLocalExpert ? translate(key.textUnsetLocalExpert) : translate(key.textSetLocalExpert)}
            cancelText={translate(key.cancel)}
            onConfirm={() => changeLocalExpert(data._id)}
          >
            <Checkbox
              checked={data.isLocalExpert}
            />
          </Popconfirm>
        )
      }
      return format.number(value)
    },
  }]

  return (
    <Table
      className="app-table app-table-small"
      dataSource={statistics}
      showHeader={false}
      columns={columns}
      pagination={false}
      rowKey="title"
    />
  )
}

export default ({ translate, data, changeLocalExpert }) => {
  return (
    <Popover
      placement="leftTop"
      className="rc-popover"
      content={<Content data={data} changeLocalExpert={changeLocalExpert} translate={translate} />}
    >
      <Button className="btn-drop-option" size="small">
        <Icon type="bars" />
        <Icon type="down" />
      </Button>
    </Popover>
  )
}
