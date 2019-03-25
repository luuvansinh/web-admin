import React from 'react'
import PropTypes from 'prop-types'
import { Icon, Layout } from 'antd'
import { ProfileMenuView } from './profile-menu'
// import { LanguageSelector } from './language-selector'
import './style.less'

const { Header } = Layout

class HeaderView extends React.PureComponent {
  // Toggle sidebar collapse
  toggleSidebar = () => {
    this.props.onToggleSidebar()
  }

  // On select profile menu
  selectProfileItem = (key) => {
    if (key === 'logout') {
      this.props.logout()
    }
  }

  render() {
    const { sidebarCollapsed, user } = this.props
    return (
      <Header className="app-header">
        <Icon
          className="icon-trigger"
          type={sidebarCollapsed ? 'menu-unfold' : 'menu-fold'}
          onClick={this.toggleSidebar}
        />
        {/* <LanguageSelector /> */}
        <ProfileMenuView
          onSelectMenuItem={this.selectProfileItem}
          user={user}
        />
      </Header>
    )
  }
}

HeaderView.propTypes = {
  onToggleSidebar: PropTypes.func.isRequired,
  sidebarCollapsed: PropTypes.bool.isRequired,
  user: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired,
}

export default HeaderView
