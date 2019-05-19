import moment from 'moment'
import pick from 'lodash/pick'
import { getStatistic } from './service';
import { format } from '../../../utils';
import { allOrders } from '../../order/list/service'

const BILL_FIELD = 'Đơn hàng'

const formatStatisticDate = (data) => {
  const result = data.map(item => ({
    // ...item,
    date: format.dateWithDayMonthOnly(item.date),
    originalDate: item.date,
    [BILL_FIELD]: item.total,
  }))
  return result
}

export default {
  namespace: 'orderChart',
  state: {
    statistic: [],
    filter: {
      startAt: moment().subtract(2, 'w').endOf('d'),
      endAt: moment().endOf('d'),
      status: 'all',
    },
    isTableDisplay: false,
    orders: [],
  },
  effects: {
    *getStatistic({ payload }, { call, put, select }) {
      const { startAt, endAt } = payload
      const params = {
        ...payload,
        startAt: startAt.toISOString(),
        endAt: endAt.toISOString(),
      }
      const response = yield call(getStatistic, params)
      const statistic = formatStatisticDate(response.data.data.chart)
      const { filter } = yield select(_ => _.orderChart)
      yield put({
        type: 'updateState',
        payload: {
          statistic,
          filter: {
            ...filter,
            ...payload,
          },
        },
      })
    },
    *getHistories({ payload }, { call, put, select }) {
      const { filter } = yield select(_ => _.orderChart)
      const response = yield call(allOrders, { ...pick(filter, ['status']), ...payload })
      const { orders, total, limit } = response.data.data
      yield put({
        type: 'updateState',
        payload: {
          orders,
          filter: {
            ...filter,
            ...payload,
            total,
            limit,
          },
          isTableDisplay: true,
        },
      })
    },
  },
  reducers: {
    updateState(state, { payload }) {
      return {
        ...state,
        ...payload,
      }
    },
  },
}
