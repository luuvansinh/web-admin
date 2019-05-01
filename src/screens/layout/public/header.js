import React, { PureComponent } from 'react'
import { Link } from 'dva/router'
import { Layout, Menu, Row, Badge, Icon, Avatar, Dropdown } from 'antd';
import { ImageConst, MessageConst } from '../../../configs'
import { LoginModal } from './modals'
import './style.less'

export class PHeader extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      isVisibleLoginModal: false,
      isLogin: true,
    }
  }
  componentDidMount() {
    const { dispatch, hasPublicUser } = this.props
    dispatch({
      type: 'app/getCategories',
    })
    if (hasPublicUser) {
      dispatch({ type: 'app/getCart' })
    }
  }

  toggleLoginModal = () => {
    const { isVisibleLoginModal } = this.state
    this.setState({ isVisibleLoginModal: !isVisibleLoginModal })
  }

  toggleRegisterModal = () => {
    const { isVisibleLoginModal } = this.state
    this.setState({
      isVisibleLoginModal: !isVisibleLoginModal,
      isLogin: false,
    })
  }

  changeForm = (type) => {
    this.setState({ isLogin: type === 'login' })
  }


  render() {
    const { categories, hasPublicUser, pUser, dispatch } = this.props
    const { isVisibleLoginModal, isLogin } = this.state
    const popupContent = (
      <Menu>
        <Menu.Item onClick={this.toggleLoginModal}>
          {MessageConst.login}
        </Menu.Item>
        <Menu.Item onClick={this.toggleRegisterModal}>
          {MessageConst.register}
        </Menu.Item>
      </Menu>
    )
    return (
      <Layout.Header className="header app-header">
        <Row className="logo-header" type="flex" justify="space-between">
          <img src={ImageConst.logo} alt="" height={80} />
          <div className="right-menu">
            <div className="badge-container margin-right-12 cursor-pointer">
              {
                !hasPublicUser ? (
                  <Dropdown overlay={popupContent}>
                    <Icon style={{ fontSize: 30 }} type="user" />
                  </Dropdown>
                ) : (
                  <Link to="/profile">
                    <Avatar src={pUser.avatar} />
                  </Link>
                )
              }
            </div>
            <div className="badge-container cursor-pointer">
              <Badge count={5}>
                <Icon style={{ fontSize: 30 }} type="shopping-cart" />
              </Badge>
            </div>
          </div>
        </Row>
        <Menu
          theme="dark"
          mode="horizontal"
          className="menu-header"
          defaultSelectedKeys={['2']}
          style={{ lineHeight: '64px' }}
        >
          {
            categories.map(item => (
              <Menu.Item key={item._id}>{item.name}</Menu.Item>
            ))
          }
        </Menu>
        <LoginModal
          onClose={this.toggleLoginModal}
          visible={isVisibleLoginModal}
          isLogin={isLogin}
          changeForm={this.changeForm}
          dispatch={dispatch}
        />
      </Layout.Header>
    )
  }
}

export default PHeader
