import React from 'react'
import { InputNumber, Col } from 'antd'
import './style.less'

export default ({ title, initValue, onChange, min, max }) => {
  return (
    <Col xs={24} sm={24} md={24} lg={24} xl={24} className="rc-component rc-input-number">
      <div className="section-title">
        <h4>{title}</h4>
      </div>
      <InputNumber
        defaultValue={initValue}
        onChange={onChange}
        min={min}
        max={max}
      />
    </Col>
  )
}
