/* eslint prefer-destructuring: [0] */

import React from 'react'
import PropTypes from 'prop-types'
import { intersection } from 'lodash'
import { Menu, Icon } from 'antd'
import { Link } from 'react-router-dom'
import { translate } from 'react-i18next'
import { key } from '../../../configs/locale'
import { AppConst, RoleConst, MenuConst } from '../../../configs'
import { menu } from '../../../utils'
import './style.less'

const MenuItem = Menu.Item
const { SubMenu } = Menu
const HAS_CHILD_VIEW = ['products', 'users']

class MenuView extends React.Component {
  render() {
    const { mode, location } = this.props
    const role = localStorage.getItem(AppConst.localStorage.roleKey) || 'admin'

    const PAGES = RoleConst[role].pages.map(item => item.id)
    const MAIN_KEY = PAGES[0]

    // Get pathname to highlight in sidebar
    let pathname = location ? location.pathname.substring(1) : MAIN_KEY
    if (!pathname) {
      pathname = MAIN_KEY
    }
    const pieces = pathname.split('/')
    if (intersection(pieces, HAS_CHILD_VIEW).length && HAS_CHILD_VIEW.includes(pieces[0])) {
      pathname = pathname.split('/')[0]
    }

    const menus = menu.arrayToTree(MenuConst[role || 'admin'].pages, 'id', 'children')

    return (
      <Menu className="app-menu" theme="dark" mode={mode} selectedKeys={[pathname]}>
        {
          menus.map((item) => {
            if (!item.children || !item.children.length) {
              if (!PAGES.includes(item.id)) {
                return null
              }
              return (
                <MenuItem
                  key={item.id}
                  className={`parent-menu-item ${item.isBorderTopItem ? 'app-menu-divider' : ''}`}
                >
                  <Link to={`/${item.id}`}>
                    <Icon type={item.icon} theme="outlined" />
                    <span>{item.name}</span>
                  </Link>
                </MenuItem>
              )
            } else {
              return (
                <SubMenu
                  key={item.id}
                  title={<span><Icon type={item.icon} theme="outlined" /><span>{item.name}</span></span>}
                >
                  {
                    item.children.map((child) => {
                      return (
                        <MenuItem key={child.id}>
                          <Link to={`/${child.id}`}>
                            <span>{child.name}</span>
                          </Link>
                        </MenuItem>
                      )
                    })
                  }
                </SubMenu>
              )
            }
          })
        }
      </Menu>
    )
  }
}

MenuView.propTypes = {
  location: PropTypes.object.isRequired,
  mode: PropTypes.string.isRequired,
}

export default translate(key.memu)(MenuView)

