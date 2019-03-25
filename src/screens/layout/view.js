import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'dva/router'
import { connect } from 'dva'
import { Layout, Icon } from 'antd'
import styles from './style.less'

import { SidebarView } from './sidebar'
import { HeaderView } from './header'

class LayoutView extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      sidebarCollapsed: true,
    }
  }

  // componentDidUpdate(prevProps) {
  //   const { t, app: { dataSocket } } = this.props
  //   console.log('this props', dataSocket);
  //   console.log('preProps', prevProps);
  //   if (JSON.stringify(prevProps.app.dataSocket) !== JSON.stringify(dataSocket)) {
  //     notification.success({
  //       message: t(key.uploadSuccess),
  //       description: <img src={this.props.dataSocket.cover} alt="" />,
  //     })
  //   }
  // }
  // Toggle sidebar
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
    const { children, location, app, unauthenticatedComponents } = this.props
    // const isLoggedIn = app.user && app.user._id
    const { isLoggedIn, appFilters } = app
    return (
      <Layout className={styles.appLayout}>
        {
          isLoggedIn &&
            <SidebarView
              isCollapsed={this.state.sidebarCollapsed}
              location={location}
            />
        }
        <Layout style={{ minHeight: '100vh' }}>
          {
            isLoggedIn &&
              <HeaderView
                sidebarCollapsed={this.state.sidebarCollapsed}
                onToggleSidebar={this.toggleSidebar}
                user={app.user}
                logout={this.logout}
              />
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
