import React, { PureComponent } from 'react'
import { connect } from 'dva'
import { Layout, Row, Button } from 'antd'
import TableView from './table'
import { RcBreadcrumb } from '../../components'
import ModalView from './modal'

export class View extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      category: null,
      modalVisible: false,
      type: '',
    }
  }

  componentDidMount() {
    this.props.dispatch({
      type: 'category/fetch',
    })
  }

  toggleModal = (type, category) => {
    const { modalVisible } = this.state
    const newState = {
      modalVisible: !modalVisible,
      type,
      category: category || null,
    }
    this.setState(newState)
  }

  submit = (data) => {
    const { type, category } = this.state
    this.props.dispatch({
      type: `category/${type}`,
      payload: data,
      categoryId: category ? category._id : '',
    })
    this.toggleModal('')
  }

  render() {
    const { loading, category: { categories }, dispatch } = this.props
    const { modalVisible, category, type } = this.state
    return (
      <Layout className="container">
        <Row type="flex" justify="space-between">
          <RcBreadcrumb name={`Danh mục (${categories.length})`} />
          <div className="button-action">
            <Button onClick={() => this.toggleModal('add')} type="primary">Tạo</Button>
          </div>
        </Row>
        <Layout className="page-content">
          <TableView
            isLoading={loading['category/fetch']}
            data={categories}
            toggleModal={this.toggleModal}
            dispatch={dispatch}
          />
          <ModalView
            visible={modalVisible}
            toggleModal={this.toggleModal}
            dispatch={dispatch}
            category={category}
            type={type}
            onSubmit={this.submit}
          />
        </Layout>
      </Layout>
    )
  }
}

export default connect(({ loading, category }) => ({
  loading,
  category,
}))(View)
