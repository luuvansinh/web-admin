import React from 'react'
import PropTypes from 'prop-types'
import { Row, Table } from 'antd'

class RcTable extends React.PureComponent {
  static propTypes = {
    pagination: PropTypes.oneOfType([
      PropTypes.shape({
        pageSize: PropTypes.number.isRequired,
        total: PropTypes.number.isRequired,
        current: PropTypes.number.isRequired,
      }),
      PropTypes.bool,
    ]),
    data: PropTypes.array.isRequired,
    columns: PropTypes.array.isRequired,
    rowKey: PropTypes.string,
    isLoading: PropTypes.bool,
    classNames: PropTypes.any,
    size: PropTypes.string,
    rowSelection: PropTypes.object,
  }

  render() {
    /* eslint-disable-next-line */
    const {
      pagination, data, isLoading, onChange, columns, classNames, rowKey, rowClassName, layoutClassNames,
      expandedRowRender, bordered = false, scroll = {}, size, rowSelection, onRow,
    } = this.props
    const tableProps = { scroll }
    return (
      <Row className={`background-white ${layoutClassNames}`}>
        <Table
          className={`app-table ${classNames}`}
          rowClassName={rowClassName}
          defaultCurrent={0}
          dataSource={data}
          columns={columns}
          rowKey={rowKey}
          bordered={bordered}
          pagination={pagination}
          onChange={onChange}
          loading={isLoading}
          expandedRowRender={expandedRowRender}
          size={size}
          rowSelection={rowSelection}
          onRow={onRow}
          {...tableProps}
        />
      </Row>
    )
  }
}

RcTable.defaultProps = {
  isLoading: false,
  classNames: '',
  rowKey: '_id',
  pagination: false,
  size: 'default',
  rowSelection: null,
}

export default RcTable
