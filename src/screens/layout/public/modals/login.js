import React, { PureComponent } from 'react'
import { Modal, Form, Input, Button } from 'antd';
import { MessageConst, ComponentConst } from '../../../../configs'

const formItemLayout = ComponentConst.form.itemLayout

export class LoginModal extends PureComponent {
  onSubmit = () => {
    const { form: { validateFields }, dispatch } = this.props
    validateFields((err, values) => {
      if (!err) {
        dispatch({
          type: 'app/userLogin',
          payload: values,
        })
      }
    })
  }

  render() {
    const { onClose, visible, form: { getFieldDecorator }, isLogin = true, changeForm } = this.props
    return (
      <Modal
        title={!isLogin ? MessageConst.register : MessageConst.login}
        onCancel={onClose}
        visible={visible}
        className="app-modal"
        onOk={this.onSubmit}
      >
        <Form>
          <Form.Item
            {...formItemLayout}
            label={MessageConst.email}
          >
            {
              getFieldDecorator('email', {
                rules: [{
                  required: true,
                  message: MessageConst.usernameRequired,
                }],
              })((
                <Input />
              ))
            }
          </Form.Item>
          <Form.Item
            {...formItemLayout}
            label={MessageConst.password}
          >
            {
              getFieldDecorator('password', {
                rules: [{
                  required: true,
                  message: MessageConst.passwordRequired,
                }],
              })((
                <Input type="password" />
              ))
            }
          </Form.Item>
          {
            !isLogin && (
              <React.Fragment>
                <Form.Item
                  {...formItemLayout}
                  label={MessageConst.email}
                >
                  {
                    getFieldDecorator('email', {
                      rules: [{
                        required: true,
                        message: MessageConst.emailRequired,
                      }],
                    })((
                      <Input />
                    ))
                  }
                </Form.Item>
                <Form.Item
                  {...formItemLayout}
                  label={MessageConst.phone}
                >
                  {
                    getFieldDecorator('phone', {
                      rules: [{
                        required: true,
                        message: MessageConst.phoneRequired,
                      }],
                    })((
                      <Input />
                    ))
                  }
                </Form.Item>
                <Form.Item
                  {...formItemLayout}
                  label={MessageConst.passwordConfirm}
                >
                  {
                    getFieldDecorator('passwordConfirm', {
                      rules: [{
                        required: true,
                        message: MessageConst.passwordRequired,
                      }],
                    })((
                      <Input type="password" />
                    ))
                  }
                </Form.Item>
              </React.Fragment>
            )
          }
          <Form.Item
            {...formItemLayout}
            label={isLogin ? MessageConst.dontHaveAccount : MessageConst.alreadyHaveAccount}
          >
            <Button onClick={() => changeForm(isLogin ? 'register' : 'login')}>
              {isLogin ? MessageConst.register : MessageConst.login}
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    )
  }
}

export default Form.create()(LoginModal)
