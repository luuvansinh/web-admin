import React, { PureComponent } from 'react'
import { Select, Col } from 'antd'
import { format } from '../utils'
import './style.less'

const { Option } = Select

class RcSelectBox extends PureComponent {
  render() {
    const { title, values, initValue, onChange, isSearch = false } = this.props
    const search = isSearch && {
      showSearch: true,
      optionFilterProp: 'children',
      filterOption(input, option) {
        return format.nonAccentVietnamese(option.props.children)
          .indexOf(format.nonAccentVietnamese(input)) >= 0
      },
    }
    return (
      <Col xs={24} sm={24} md={24} lg={24} xl={24} className="rc-component">
        <div className="section-title">
          <h4>{title}</h4>
        </div>
        <Select defaultValue={initValue} className="section-filter" onChange={onChange} {...search}>
          {
            values.map((item) => {
              return (
                <Option key={item._id} value={item._id}>{item.name}</Option>
              )
            })
          }
        </Select>
      </Col>
    )
  }
}

export default RcSelectBox

