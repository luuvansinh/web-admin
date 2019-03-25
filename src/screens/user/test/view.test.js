import 'jsdom-global/register'
import React from 'react'
import { StaticRouter } from 'react-router'
import { mount, shallow } from 'enzyme'
import sinon from 'sinon'
import { ListView } from '../list/view'
import { AppConst } from '../../../configs'

describe('TEST USER-ALL VIEW', () => {
  const appFilters = AppConst
  const app = {
    appFilters,
  }
  const filter = {
    city: 'all',
    sort: '-statistic.coin',
    keyword: '',
    limit: 50,
    page: 0,
    total: 0,
  }
  const userList = {
    filter,
    users: [{
      _id: 'string',
      name: 'string',
      phone: 'string',
      email: 'string',
      city: 'string',
      avatar: 'string',
      statistic: {
        coin: 0,
        bill: 0,
        billedZcoin: 0,
        expense: 0,
        reward: 0,
        badge: 0,
        lastBillAt: 'string',
      },
      isLocalExpert: false,
    }],
  }
  const loading = {
    effects: {
      'app/init': false,
      'userList/fetch': false,
    },
    global: false,
    models: {
      app: false,
      userList: false,
    },
  }

  const mockFn = jest.fn()
  const wrapper = shallow(<ListView
    t={mockFn}
    app={app}
    userList={userList}
    loading={loading}
    dispatch={mockFn}
  />)

  test('Render is correctly ', () => {
    expect(wrapper).toMatchSnapshot()
  })

  test('call componentDidMount', () => {
    sinon.spy(ListView.prototype, 'componentDidMount')
    mount((
      <StaticRouter location="/someLocation" context="context">
        <ListView
          t={mockFn}
          app={app}
          userList={userList}
          loading={loading}
          dispatch={mockFn}
        />
      </StaticRouter>))
    expect(ListView.prototype.componentDidMount.calledOnce).toEqual(true)
  })

  test('Change city select box', () => {
    const city = 'da-nang'
    wrapper.find('.city-select-box').simulate('change', city)
  })

  test('Search by name user', () => {
    const name = 'meo'
    wrapper.find('.search-user').simulate('search', name)
  })
})
