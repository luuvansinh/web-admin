import React, { PureComponent } from 'react'
import { Modal, Button, Form, Input } from 'antd';
import { ComponentConst } from '../../../configs';

const formItemLayout = ComponentConst.form.itemLayout

export class ModalView extends PureComponent {
  /**
   * Handle submit
   */
  onSubmit = () => {
    const { onSubmit, form: { validateFieldsAndScroll, resetFields } } = this.props
    validateFieldsAndScroll((err, values) => {
      if (!err) {
        onSubmit(values)
        resetFields()
      }
    })
  }

  close = () => {
    this.props.toggleModal('')
  }

  render() {
    const { visible, form: { getFieldDecorator }, category, type } = this.props
    return (
      <Modal
        className="app-modal"
        title="Tạo"
        visible={visible}
        onCancel={this.close}
        footer={[
          <Button key="back" icon="close-circle-o" className="float-left" onClick={this.close}>Hủy</Button>,
          <Button key="submit" icon="check-circle-o" type="primary" onClick={this.onSubmit}>{ type === 'add' ? 'Tạo' : 'Cập nhật' }</Button>,
        ]}
      >
        <Form className="app-modal-form">
          <Form.Item
            {...formItemLayout}
            label="Tên"
          >
            {
              getFieldDecorator('name', {
                rules: [{
                  required: true,
                }],
                initialValue: category ? category.name : '',
              })(<Input />)
            }
          </Form.Item>
          <Form.Item
            {...formItemLayout}
            label="Thứ tự"
          >
            {
              getFieldDecorator('order', {
                rules: [{
                  // required: true,
                }],
                initialValue: category ? category.order : '',
              })(<Input type="number" />)
            }
          </Form.Item>
        </Form>
      </Modal>
    )
  }
}

export default Form.create()(ModalView)
