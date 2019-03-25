import React from 'react'
import { connect } from 'dva'
import { Col, Row, Button } from 'antd'
import { AppConst, ImageConst } from '../../configs'
import './style.less'

const { accountKit } = AppConst

class LoginView extends React.Component {
  constructor(props) {
    super(props)
    if (window.AccountKit && window.AccountKit.init) {
      window.AccountKit.init({
        appId: accountKit.appId,
        state: accountKit.csrf,
        version: accountKit.version,
        fbAppEventsEnabled: accountKit.fbAppEventsEnabled,
        debug: accountKit.debug,
      })
    }
  }

  // phone form submission handler
  smsLogin = () => {
    window.AccountKit.login(
      accountKit.loginType, { countryCode: '+84' },
      this.loginCallBack,
    )
  }

  // login callback
  loginCallBack = (response) => {
    if (response.status === 'PARTIALLY_AUTHENTICATED') {
      const { dispatch } = this.props
      const { code } = response
      // Send code to server to exchange for access token
      dispatch({
        type: 'login/login',
        payload: { code },
      })
    }
  }

  // render view login Account kit
  render() {
    const { loading } = this.props
    return (
      <div className="page">
        <Row type="flex" justify="center">
          <Col md={8} xs={18} sm={18} className="container">
            <div className="logo">
              <img src={ImageConst.loginHeader} alt="" />
            </div>
            <div className="button-login">
              <Button
                type="primary"
                className="button-style"
                loading={loading.effects['login/login']}
                onClick={this.smsLogin}
              >
                Đăng nhập bằng SĐT
              </Button>
            </div>
          </Col>
        </Row>
      </div>
    )
  }
}

export default connect(({ loading }) => ({ loading }))(LoginView)
