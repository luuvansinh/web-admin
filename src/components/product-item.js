import React, { PureComponent } from 'react'
import { Col, Card, Button, Rate } from 'antd';
import { Link } from 'dva/router';
import './style.less'

export class Product extends PureComponent {
  render() {
    const { product } = this.props
    return (
      <Col xs={12} sm={8} md={6} lg={6}>
        <Card
          style={{ width: '100%', marginBottom: '20px' }}
          cover={<img alt="" src={product.covers[0]} className="card-cover" />}
          actions={[<Button type="primary" onClick={() => {}}>Thêm vào giỏ</Button>]}
        >
          <Card.Meta
            title={<Link to={`/products/${product._id}`}>{product.name}</Link>}
            description={(
              <React.Fragment>
                <div>
                  <Rate style={{ fontSize: 14 }} defaultValue={product.rating} disabled />
                </div>
                <span>{`${product.currentPrice} K`}</span>
              </React.Fragment>
            )}
          />
        </Card>
      </Col>
    )
  }
}

export default Product
