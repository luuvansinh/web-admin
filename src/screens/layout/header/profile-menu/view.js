import React from 'react'
import PropTypes from 'prop-types'
import { Badge, Dropdown, Icon, Menu } from 'antd'
import { Link } from 'react-router-dom'
import './style.less'

const profileMenu = [{
  name: 'Profile',
  id: 'profile',
  icon: 'user',
}, {
  id: 'divider-1',
  isDivider: true,
}]

class ProfileMenuView extends React.PureComponent {
  // On select profile menu
  selectMenu = ({ key }) => {
    this.props.onSelectMenuItem(key)
  }

  render() {
    const { user } = this.props

    if (!user) {
      return (
        <div />
      )
    }

    const menu = (
      <Menu onClick={this.selectMenu} className="profile-menu" selectedKeys={[]}>
        {
          profileMenu.map((child) => {
            if (!child.isDivider) {
              return (
                <Menu.Item key={child.id} className="profile-menu-item">
                  <Link to={`/${child.id}`}>
                    <Icon type={child.icon} />
                    <span>{child.name}</span>
                    {
                      child.badge ?
                        <Badge count={child.badge} overflowCount={99} />
                      : null
                    }
                  </Link>
                </Menu.Item>
              )
            } else {
              return (
                <Menu.Divider key={child.id} />
              )
            }
          })
        }
        <Menu.Item key="logout" className="profile-menu-item">
          <div>
            <Icon type="logout" />
            <span>Logout</span>
          </div>
        </Menu.Item>
      </Menu>
    )

    return (
      <Dropdown overlay={menu} trigger={['click']} placement="bottomRight">
        <div className="header-profile">
          <Icon type="caret-down" />
          <img src={user.avatar} alt="" />
          <div className="current-info">
            <p>{user.name}</p>
            <span>{user.role}</span>
          </div>
        </div>
      </Dropdown>
    )
  }
}

ProfileMenuView.propTypes = {
  onSelectMenuItem: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
}

export default ProfileMenuView
