import React from 'react'
import lodash from 'lodash'
import { Layout, Row, Col } from 'antd'
import { connect } from 'dva'
import { translate } from 'react-i18next'
import { key } from '../../../configs/locale'
import { RcBreadcrumb, RcSearch } from '../../../components'
import { helper } from '../../../utils'
import { MessageConst } from '../../../configs';
import { TableView } from './table'


export class ListView extends React.Component {
  componentDidMount() {
    this.onFilterChange({})
  }

  // Change Filter
  onFilterChange = (newFilter = {}) => {
    const { users: { filter } } = this.props
    const filters = helper.mergeObjects(filter, newFilter)
    const query = lodash.pick(filters, ['page', 'keyword', 'city', 'sort', 'isLocalExpert'])
    this.fetch(query)
  }

  // change table page
  onTablePageChange = (pagination, filters, sorter) => {
    const { field, order } = sorter
    const sort = order === 'ascend' ? field : `-${field}`
    const { current } = pagination
    this.onFilterChange({ page: current - 1, sort })
  }

  // change local expert
  changeLocalExpert = (_id) => {
    this.props.dispatch({
      type: 'users/changeLocalExpert',
      payload: {
        _id,
      },
    })
  }

  // fetch data user
  fetch = (filter) => {
    this.props.dispatch({
      type: 'users/fetch',
      payload: {
        ...filter,
      },
    })
  }

  render() {
    const { users: { users, filter }, loading, dispatch } = this.props
    return (
      <Layout className="container">
        <RcBreadcrumb name="Người dùng" />
        <Layout className="page-content">
          <Row gutter={8}>
            <Col xs={24} sm={24} md={24} lg={4} xl={4} span={4}>
              <Row className="filter-box">
                <RcSearch
                  title={MessageConst.users}
                  className="search-user"
                  placeholder={MessageConst.search}
                  value={filter.keyword}
                  onSearch={keyword => this.onFilterChange({ keyword })}
                />
              </Row>
            </Col>
            <Col xs={24} sm={24} md={24} lg={20} xl={20} span={20}>
              <TableView
                pageSize={filter.limit}
                total={filter.total}
                current={filter.page}
                data={users}
                onChange={this.onTablePageChange}
                changeLocalExpert={this.changeLocalExpert}
                isLoading={loading.effects['users/fetch']}
                dispatch={dispatch}
              />
            </Col>
          </Row>
        </Layout>
      </Layout>
    )
  }
}

export default connect(({ app, users, loading }) => ({
  app,
  users,
  loading,
}))(translate([key.translations, key.users])(ListView))
