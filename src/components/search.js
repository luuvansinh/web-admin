import React, { PureComponent } from 'react'
import { Input, Col } from 'antd'
import './style.less'

const { Search } = Input

class RcSearch extends PureComponent {
  render() {
    const { placeholder, onSearch, title, onChange, value = '' } = this.props
    return (
      <Col xs={24} sm={24} md={24} lg={24} xl={24} className="rc-component rc-search">
        <div className="section-title">
          <h4>{title}</h4>
        </div>
        <Search
          className="section-filter"
          placeholder={placeholder}
          onSearch={onSearch}
          onChange={onChange}
          defaultValue={value}
          enterButton
        />
      </Col>
    )
  }
}

export default RcSearch

