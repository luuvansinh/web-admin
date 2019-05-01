import React, { PureComponent } from 'react'
import { Form, Input, Layout, Row, Col, Button, Select, Checkbox, Upload, Icon } from 'antd'
import { connect } from 'dva';
import { ComponentConst, MessageConst } from '../../../configs';
import { RcBreadcrumb } from '../../../components';
import './style.less'

const formItem = ComponentConst.formMax.itemLayout

export class NewProduct extends PureComponent {
  componentDidMount() {
    const { match, dispatch } = this.props
    if (match.params.id) {
      dispatch({
        type: 'newProduct/fetchProduct',
        productId: match.params.id,
      })
    }
    dispatch({
      type: 'newProduct/fetch',
    })
  }

  componentWillUnmount() {
    this.props.dispatch({
      type: 'newProduct/clearState',
    })
  }

  /**
   * Submit form
   */
  submit = () => {
    const { form: { validateFieldsAndScroll }, dispatch } = this.props
    validateFieldsAndScroll((error, data) => {
      if (!error) {
        dispatch({
          type: 'newProduct/create',
          payload: {
            ...data,
          },
        })
      }
    })
  }

  /**
   * Handle upload file
   */
  uploadCover = (file) => {
    const { dispatch } = this.props
    dispatch({
      type: 'newProduct/uploadCover',
      file,
    })
    return false
  }


  render() {
    const { form: { getFieldDecorator }, newProduct: { categories, product, isUpdating } } = this.props
    const parents = [{
      _id: 1,
      url: '/products',
      name: MessageConst.product,
    }]
    if (isUpdating) {
      parents.push({
        _id: 2,
        url: '/products',
        name: product.name,
      })
    }
    let fileList = []
    if (isUpdating) {
      fileList = product.covers.map((item, index) => ({
        uid: index,
        name: item,
        status: 'done',
        url: item,
      }))
    }
    return (
      <Layout className="container">
        <RcBreadcrumb name={isUpdating ? MessageConst.update : MessageConst.create} parents={parents} />
        <Layout className="page-content page-product">
          <Row type="flex" justify="center" className="form-container">
            <Col xs={24} sm={24} md={20}>
              <Form>
                <Form.Item
                  {...formItem}
                  label={MessageConst.name}
                >
                  {
                    getFieldDecorator('name', {
                      rules: [{
                        required: true,
                      }],
                      initialValue: product.name,
                    })((
                      <Input />
                    ))
                  }
                </Form.Item>
                <Form.Item
                  {...formItem}
                  label={MessageConst.desc}
                >
                  {
                    getFieldDecorator('desc', {
                      rules: [{
                        required: true,
                      }],
                      initialValue: product.desc,
                    })((
                      <Input.TextArea />
                    ))
                  }
                </Form.Item>
                <Form.Item
                  {...formItem}
                  label={MessageConst.category}
                >
                  {
                    getFieldDecorator('categories', {
                      initialValue: product.categories,
                    })((
                      <Select mode="multiple">
                        {
                          categories.map(item => (
                            <Select.Option key={item._id} value={item._id}>{item.name}</Select.Option>
                          ))
                        }
                      </Select>
                    ))
                  }
                </Form.Item>
                <Form.Item
                  {...formItem}
                  label={MessageConst.price}
                >
                  {
                    getFieldDecorator('price', {
                      rules: [{
                        required: true,
                      }],
                      initialValue: product.price,
                    })((
                      <Input type="number" />
                    ))
                  }
                </Form.Item>
                <Form.Item
                  {...formItem}
                  label={MessageConst.quantity}
                >
                  {
                    getFieldDecorator('quantity', {
                      rules: [{
                        required: true,
                      }],
                      initialValue: product.quantity,
                    })((
                      <Input type="number" />
                    ))
                  }
                </Form.Item>
                <Form.Item
                  {...formItem}
                  label={MessageConst.discountPercent}
                >
                  {
                    getFieldDecorator('discountPercent', {
                    })((
                      <Input type="number" />
                    ))
                  }
                </Form.Item>
                <Form.Item
                  {...formItem}
                  label={MessageConst.active}
                >
                  {
                    getFieldDecorator('active', {
                      valuePropName: 'checked',
                      initialValue: product.active,
                    })((
                      <Checkbox />
                    ))
                  }
                </Form.Item>
                {
                  isUpdating && (
                    <Form.Item
                      {...formItem}
                      label="&nbsp;"
                      colon={false}
                    >
                      <Upload
                        listType="picture-card"
                        fileList={fileList}
                        beforeUpload={this.uploadCover}
                        showUploadList={{ showRemoveIcon: false }}
                      >
                        <div>
                          <Icon type="plus" />
                          <div className="ant-upload-text">{MessageConst.upload}</div>
                        </div>
                      </Upload>
                    </Form.Item>
                  )
                }
                <Form.Item>
                  <div className="step-action-button">
                    <Button type="primary" onClick={this.submit}>{isUpdating ? MessageConst.update : MessageConst.create}</Button>
                  </div>
                </Form.Item>
              </Form>
            </Col>
          </Row>
        </Layout>
      </Layout>
    )
  }
}

export default connect(({ loading, newProduct }) => ({
  loading, newProduct,
}))(Form.create()(NewProduct))
