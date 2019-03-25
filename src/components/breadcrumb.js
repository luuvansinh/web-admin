import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'
import { Breadcrumb, Icon } from 'antd'
import './style.less'

class RcBreadcrumb extends PureComponent {
  render() {
    const { name, parents = [] } = this.props
    return (
      <Breadcrumb className="rc-breadcrumb">
        {
          parents.map((item, index) => {
            return (
              <Breadcrumb.Item key={item._id}>
                {
                  index === 0 && <Icon type="shop" />
                }
                <Link to={item.url}>{item.name}</Link>
              </Breadcrumb.Item>
            )
          })
        }
        <Breadcrumb.Item>
          {
            !parents.length && <Icon type="shop" />
          }
          {name}
        </Breadcrumb.Item>
      </Breadcrumb>
    )
  }
}

export default RcBreadcrumb
