import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'dva/router'
import { connect } from 'dva'
import { Layout, Icon } from 'antd'
import styles from './style.less'

import { SidebarView } from './sidebar'
import { HeaderView } from './header'
import { PHeader, PSider } from './public'

class LayoutView extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      sidebarCollapsed: true,
    }
  }

  toggleSidebar = () => {
    this.setState({
      sidebarCollapsed: !this.state.sidebarCollapsed,
    })
  }

  // On logout
  logout = () => {
    // Logout
    this.props.dispatch({
      type: 'app/logout',
    })
  }

  render() {
    const { children, location, app, unauthenticatedComponents, dispatch } = this.props
    // const isLoggedIn = app.user && app.user._id
    const { isLoggedIn, appFilters, categories, hasPublicUser, pUser } = app
    return (
      <Layout className={styles.appLayout} style={{ minHeight: '100vh' }}>
        {
          isLoggedIn ?
            <SidebarView
              isCollapsed={this.state.sidebarCollapsed}
              location={location}
            /> : (
              <PHeader
                dispatch={dispatch}
                categories={categories}
                hasPublicUser={hasPublicUser}
                pUser={pUser}
              />
            )
        }
        <Layout>
          {
            isLoggedIn ?
              <HeaderView
                sidebarCollapsed={this.state.sidebarCollapsed}
                onToggleSidebar={this.toggleSidebar}
                user={app.user}
                logout={this.logout}
              /> : (
                <PSider />
              )
          }
          {
            !isLoggedIn ?
              <Layout>{unauthenticatedComponents}</Layout>
              :
              appFilters && Object.keys(appFilters).length ?
                <Layout>{children}</Layout>
                : <div className="app-loading-indicator"><Icon type="loading" /></div>
          }
        </Layout>
      </Layout>
    )
  }
}

LayoutView.propTypes = {
  dispatch: PropTypes.func.isRequired,
}

export default withRouter(connect(({ app, loading }) => ({ app, loading }))(LayoutView))
