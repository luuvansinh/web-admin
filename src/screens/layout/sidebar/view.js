import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva'
import { Layout } from 'antd'
import { AppConst, ImageConst } from '../../../configs'
import './style.less'

// View
import { MenuView } from '../menu'

const { Sider } = Layout

class SidebarView extends React.PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      isMobileScreen: false,
    }
  }

  // Did mount
  componentDidMount() {
    // isLastMobileScreen = this.isMobileScreen()
    this.handleResize()
    window.addEventListener('resize', this.handleResize)
  }

  // Will receive props
  componentWillReceiveProps(nextProps) {
    if (nextProps.isCollapsed !== this.props.isCollapsed) {
      setTimeout(() => {
        this.displaySidebarItem()
      }, 1)
    }
  }

  // Will unmount
  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize)
  }

  getScreenSize = () => {
    const { screens } = AppConst
    const screenPx = window.innerWidth
    if (screenPx <= screens['xs-max']) {
      return 'xs'
    }
    if ((screenPx >= screens['sm-min'])
      && (screenPx <= screens['sm-max'])) {
      return 'sm'
    }
    if ((screenPx >= screens['md-min'])
      && (screenPx <= screens['md-max'])) {
      return 'md'
    }
    if ((screenPx >= screens['lg-min'])
      && (screenPx <= screens['lg-max'])) {
      return 'lg'
    }
    if (screenPx >= screens['xl-min']) {
      return 'xl'
    }
  }

  isMobileScreen = () => {
    return ['xs', 'sm'].includes(this.getScreenSize())
  }

  // Handle when user resize browser
  handleResize = () => {
    this.setState({ isMobileScreen: this.isMobileScreen() }, () => {
      this.displaySidebarItem()
    })
  }

  // Display sidebar item
  displaySidebarItem = () => {
    const items = document.getElementsByClassName('ant-menu-item')
    for (const item of items) {
      const spanTag = item.getElementsByTagName('span')
      if (spanTag && spanTag.length) {
        spanTag[0].style.display = this.state.isMobileScreen ? 'none' : 'inline-block'
      }
    }

    const submenus = document.getElementsByClassName('ant-menu-submenu')
    for (const item of submenus) {
      if (item.getElementsByClassName('ant-menu-submenu-title').length) {
        const parentTitle = item.getElementsByClassName('ant-menu-submenu-title')[0].getElementsByTagName('span')[0].getElementsByTagName('span')[0]
        parentTitle.style.display = this.state.isMobileScreen ? 'none' : 'inline-block'
      }
    }
  }

  render() {
    const { location } = this.props

    return (
      <Sider
        className="app-sidebar"
        trigger={null}
        collapsedWidth={this.state.isMobileScreen ? 0 : 64}
        width={this.state.isMobileScreen ? 64 : 200}
        collapsible
        collapsed={this.props.isCollapsed}
      >
        <img className="app-logo" src={ImageConst.logoZody} alt="" />
        <MenuView
          location={location}
          mode={!this.state.isMobileScreen ? 'inline' : 'vertical'}
        />
      </Sider>
    )
  }
}

SidebarView.propTypes = {
  location: PropTypes.object.isRequired,
}

SidebarView.__ANT_LAYOUT_SIDER = true
/* eslint no-underscore-dangle: ["error", { "allow": ["__ANT_LAYOUT_SIDER"] }] */
export default connect()(SidebarView)
