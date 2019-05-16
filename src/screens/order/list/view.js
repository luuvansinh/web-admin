import React, { PureComponent } from 'react'
import lodash from 'lodash'
import { connect } from 'dva'
import { Layout, Row, Col } from 'antd';
import { helper } from '../../../utils';
import { RcBreadcrumb, RcSelectBox } from '../../../components'
import TableView from './table/view'
import { MessageConst, AppConst } from '../../../configs';

export class View extends PureComponent {
  componentDidMount() {
    this.onFilterChange({})
  }

  // Change Filter
  onFilterChange = (newFilter = {}) => {
    const { orders: { filter } } = this.props
    const filters = helper.mergeObjects(filter, newFilter)
    const query = lodash.pick(filters, ['page', 'keyword', 'sort', 'status'])
    this.fetch(query)
  }

  // change table page
  onTablePageChange = (pagination) => {
    // const { field, order } = sorter
    // const sort = order === 'ascend' ? field : `-${field}`
    const { current } = pagination
    this.onFilterChange({ page: current - 1 })
  }

  // fetch data user
  fetch = (filter) => {
    this.props.dispatch({
      type: 'orders/fetch',
      payload: filter,
    })
  }

  render() {
    const { orders: { filter, orders }, loading, dispatch } = this.props
    const statuses = [{ _id: 'all', name: 'Tất cả' }].concat(AppConst.order.status.list)
    return (
      <Layout className="container">
        <Row type="flex" justify="space-between">
          <RcBreadcrumb name={`${MessageConst.orders} (${filter.total})`} />
        </Row>
        <Layout className="page-content">
          <Row gutter={8}>
            <Col xs={24} sm={24} md={24} lg={4} xl={4} span={4}>
              <Row className="filter-box">
                <RcSelectBox
                  title={MessageConst.status}
                  values={statuses}
                  initValue="all"
                  onChange={status => this.onFilterChange({ status })}
                />
              </Row>
            </Col>
            <Col xs={24} sm={24} md={24} lg={20} xl={20} span={20}>
              <TableView
                pageSize={filter.limit}
                total={filter.total}
                current={filter.page}
                data={orders}
                onChange={this.onTablePageChange}
                changeLocalExpert={this.changeLocalExpert}
                isLoading={loading.effects['orders/fetch']}
                dispatch={dispatch}
              />
            </Col>
          </Row>
        </Layout>
      </Layout>
    )
  }
}

export default connect(({ loading, orders }) => ({
  loading,
  orders,
}))(View)
