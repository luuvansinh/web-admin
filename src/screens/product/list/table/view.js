import React from 'react'
import { RcTable } from '../../../../components'
import columns from './columns'

class TableView extends React.PureComponent {
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

export default TableView
