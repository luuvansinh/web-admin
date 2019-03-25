import React from 'react'
import { Col, AutoComplete } from 'antd'

export default ({ title, placeholder, initValue, options, onSearch, onSelect }) => {
  let delayTimer
  const search = (keyword) => {
    clearTimeout(delayTimer)
    delayTimer = setTimeout(() => {
      onSearch(keyword)
    }, 500)
  }
  return (
    <Col xs={24} sm={24} md={24} lg={24} xl={24} className="rc-component rc-search-auto-complete">
      <div className="section-title">
        <h4>{title}</h4>
      </div>
      <AutoComplete
        className="input-search"
        dropdownMatchSelectWidth={false}
        dropdownStyle={{ width: 300 }}
        dataSource={options}
        onSelect={onSelect}
        onSearch={search}
        placeholder={placeholder}
        defaultValue={initValue}
        optionLabelProp="name"
        allowClear
      />
    </Col>
  )
}
