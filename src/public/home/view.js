import React, { PureComponent } from 'react'
import { Layout, Row } from 'antd'
import { connect } from 'dva';
import { ProductItem } from '../../components';

export class HomeView extends PureComponent {
  componentDidMount() {
    this.props.dispatch({
      type: 'home/products',
    })
  }
  render() {
    const { home: { products } } = this.props
    return (
      <Layout className="public-content">
        <Row gutter={16}>
          {
            products.map(item => (
              <ProductItem product={item} key={item._id} />
            ))
          }
        </Row>
      </Layout>
    )
  }
}

export default connect(({ home, loading }) => ({ home, loading }))(HomeView)
