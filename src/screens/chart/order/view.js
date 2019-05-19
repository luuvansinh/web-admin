import React, { PureComponent } from 'react'
import { connect } from 'dva'
import { Layout, Row, Col } from 'antd';
import { Chart, Legend, Axis, Tooltip, Geom } from 'bizcharts';
import DataSet from '@antv/data-set'
import lodash from 'lodash'
import { RcSelectBox, RcDatePicker } from '../../../components'
import { MessageConst, AppConst } from '../../../configs';
import { helper, format } from '../../../utils';
import TableView from './table/view'

const BILL_FIELD = 'Đơn hàng'
const COLOR = '#902b2b'

export class View extends PureComponent {
  componentDidMount() {
    this.onFilterChange({})
  }

  onFilterChange = (newFilter = {}) => {
    const { orderChart: { filter } } = this.props
    const filters = helper.mergeObjects(filter, newFilter)
    // console.log({ filters })
    const query = lodash.pick(filters, ['status', 'startAt', 'endAt'])
    this.loadData(query)
  }

  /**
   * Handle click on points of chart
   */
  onPointClick = (e) => {
    // eslint-disable-next-line no-underscore-dangle
    const { originalDate: date, city: type } = e.data._origin
    if (type === BILL_FIELD) {
      this.props.dispatch({
        type: 'orderChart/getHistories',
        payload: { date },
      })
    }
  }

  loadData = (query) => {
    const { dispatch } = this.props
    dispatch({
      type: 'orderChart/getStatistic',
      payload: query,
    })
  }

  render() {
    const { orderChart: { statistic, filter, orders, isTableDisplay }, loading } = this.props
    const ds = new DataSet()
    const dv = ds.createView().source(statistic)
    dv.transform({
      type: 'fold',
      fields: [BILL_FIELD],
      key: 'city',
      value: 'number',
    });
    const cols = {
      date: {
        range: [0, 1],
      },
    }
    const statuses = [{ _id: 'all', name: 'Tất cả' }].concat(AppConst.order.status.list)
    return (
      <Layout className="container">
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
                <RcDatePicker
                  title="Bắt đầu"
                  initValue={filter.startAt}
                  onChange={startAt => this.onFilterChange({ startAt })}
                  format="DD-MM-YYYY"
                  disabledDate={this.disabledDateStartAt}
                />
                <RcDatePicker
                  title="Kết thúc"
                  initValue={filter.endAt}
                  onChange={startAt => this.onFilterChange({ startAt })}
                  format="DD-MM-YYYY"
                  disabledDate={this.disabledDateStartAt}
                />
              </Row>
            </Col>
            <Col xs={24} sm={24} md={24} lg={20} xl={20} span={20}>
              <Chart
                height={400}
                data={dv}
                scale={cols}
                onPointClick={this.onPointClick}
                style={{ backgroundColor: '#fff', paddingTop: '24px' }}
                forceFit
              >
                <Legend custom={false} />
                <Axis name="date" />
                <Axis name="number" />
                <Tooltip crosshairs={{ type: 'y' }} />
                <Geom
                  type="line"
                  position="date*number"
                  size={2} color={['city', [COLOR]]}
                  shape="line"
                />
                <Geom
                  type="point"
                  position="date*number"
                  size={4}
                  shape="circle"
                  color={['city', [COLOR]]}
                  style={{ stroke: '#fff', lineWidth: 1, cursor: 'pointer' }}
                />
              </Chart>
              {
                isTableDisplay && (
                  <React.Fragment>
                    <h4 className="margin-top-16">Lịch sử đặt hàng: {format.dateWithNoHour(filter.date)}</h4>
                    <TableView
                      pageSize={filter.limit}
                      total={filter.total}
                      current={filter.page}
                      data={orders}
                      onChange={this.onTablePageChange}
                      changeLocalExpert={this.changeLocalExpert}
                      isLoading={loading.effects['orderChart/getHistories']}
                    />
                  </React.Fragment>
                )
              }
            </Col>
          </Row>
        </Layout>
      </Layout>
    )
  }
}

export default connect(({ loading, orderChart }) => ({
  loading,
  orderChart,
}))(View)
