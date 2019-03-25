import React from 'react'
import { DatePicker, Col } from 'antd'

export default ({ initValue, title, placeholder, onChange, disabledDate, format, allowClear = false }) => {
  return (
    <Col xs={24} sm={24} md={24} lg={8} xl={8} className="rc-component rc-search">
      <div className="section-title">
        <h4>{title}</h4>
      </div>
      <DatePicker
        placeholder={placeholder}
        defaultValue={initValue}
        onChange={onChange}
        disabledDate={disabledDate}
        format={format}
        allowClear={allowClear}
      />
    </Col>
  )
}
