import React, { PureComponent } from 'react'
import { pick } from 'lodash'
import { Layout, Row, Button, Col } from 'antd';
import { connect } from 'dva'
import { routerRedux } from 'dva/router';
import { helper } from '../../../utils'
import { RcBreadcrumb, RcSelectBox } from '../../../components'
import { MessageConst, AppConst } from '../../../configs';
import TableView from './table/view'

export class View extends PureComponent {
  componentDidMount() {
    this.onFilterChange({})
  }

  // Change Filter
  onFilterChange = (newFilter = {}) => {
    const { promotions: { filter } } = this.props
    const filters = helper.mergeObjects(filter, newFilter)
    const query = pick(filters, ['page', 'keyword', 'sort', 'status'])
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
      type: 'productList/fetch',
      payload: filter,
    })
  }

  goToNewPage = () => {
    this.props.dispatch(routerRedux.push('/products/new'))
  }

  render() {
    const { promotions: { filter, promotions }, loading, dispatch } = this.props
    return (
      <Layout className="container">
        <Row type="flex" justify="space-between">
          <RcBreadcrumb name={`${MessageConst.product} (${filter.total})`} />
          <div className="button-action">
            <Button type="primary" onClick={this.goToNewPage}>Tạo</Button>
          </div>
        </Row>
        <Layout className="page-content">
          <Row gutter={8}>
            <Col xs={24} sm={24} md={24} lg={4} xl={4} span={4}>
              <Row className="filter-box">
                <RcSelectBox
                  title={MessageConst.status}
                  values={AppConst.product.status.list}
                  initValue={AppConst.product.status.default}
                  onChange={status => this.onFilterChange({ status })}
                />
              </Row>
            </Col>
            <Col xs={24} sm={24} md={24} lg={20} xl={20} span={20}>
              <TableView
                pageSize={filter.limit}
                total={filter.total}
                current={filter.page}
                data={promotions}
                onChange={this.onTablePageChange}
                changeLocalExpert={this.changeLocalExpert}
                isLoading={loading.effects['product/fetch']}
                dispatch={dispatch}
              />
            </Col>
          </Row>
        </Layout>
      </Layout>
    )
  }
}

export default connect(({ loading, promotions }) => ({
  loading,
  promotions,
}))(View)
