import React from 'react'
import { RcTable } from '../../../../components'
import columns from './columns'
import './style.less'

class TableView extends React.Component {
  render() {
    const { data, isLoading, onChange, pageSize, total, current } = this.props
    return (
      <RcTable
        layoutClassNames="app-table-no-padding"
        classNames="app-table-small"
        data={data}
        pagination={{ pageSize, total, current: current + 1 }}
        onChange={onChange}
        isLoading={isLoading}
        columns={columns(this)}
      />
    )
  }
}
TableView.defaultProps = {
  isLoading: false,
}
export default TableView
