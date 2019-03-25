import React from 'react'
import lodash from 'lodash'
import { Layout, Row, Col } from 'antd'
import { connect } from 'dva'
import { translate } from 'react-i18next'
import { key } from '../../../configs/locale'
import { RcBreadcrumb } from '../../../components'
import { helper } from '../../../utils'

// import { TableView } from './table'

export class ListView extends React.Component {
  // componentDidMount() {
  //   this.onFilterChange({})
  // }

  // Change Filter
  onFilterChange = (newFilter = {}) => {
    const { userList: { filter } } = this.props
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
      type: 'userList/changeLocalExpert',
      payload: {
        _id,
      },
    })
  }

  // fetch data user
  fetch = (filter) => {
    this.props.dispatch({
      type: 'userList/fetch',
      payload: {
        ...filter,
      },
    })
  }

  render() {
    // const { users } = this.props
    return (
      <Layout className="container">
        <RcBreadcrumb name="Người dùng" />
        <Layout className="page-content">
          <Row gutter={8}>
            <Col xs={24} sm={24} md={24} lg={4} xl={4} span={4}>
              <Row className="filter-box">
                {/* <RcSearch
                  title={t(key.search)}
                  className="search-user"
                  placeholder={t(key.placeholderSearchUser)}
                  value={filter.keyword}
                  onSearch={keyword => this.onFilterChange({ keyword })}
                /> */}
                abc
              </Row>
            </Col>
            <Col xs={24} sm={24} md={24} lg={20} xl={20} span={20}>
              {/* <TableView
                translate={t}
                pageSize={filter.limit}
                total={filter.total}
                current={filter.page}
                data={users}
                onChange={this.onTablePageChange}
                changeLocalExpert={this.changeLocalExpert}
                isLoading={loading.effects['users/fetch']}
              /> */}
              abc
            </Col>
          </Row>
        </Layout>
      </Layout>
    )
  }
}

export default connect(({ app, userList, loading }) => ({
  app,
  userList,
  loading,
}))(translate([key.translations, key.users])(ListView))
