import React, { PureComponent } from 'react'
import { Col, AutoComplete, List, Avatar } from 'antd'
import './style.less'
import { key } from '../configs/locale'

const { Option } = AutoComplete

class RcSearchAutoComplete extends PureComponent {
  render() {
    const { title, onSearch, onSelect, placeholder, searchData = [], initValue, translate } = this.props
    const options = searchData.map((item) => {
      return (
        <Option key={item._id} value={JSON.stringify(item)} name={item.name}>
          <List.Item.Meta
            className="list-meta"
            avatar={<Avatar shape="square" src={item.cover} />}
            title={`${item.name} (${item.rating.times} ${translate(key.timesRating)})`}
            description={item.address}
          />
        </Option>
      )
    })
    let delayTimer
    const search = (keyword) => {
      clearTimeout(delayTimer)
      delayTimer = setTimeout(() => {
        onSearch(keyword)
      }, 500)
    }
    // Select search value
    const selectSearchValue = (value) => {
      onSelect(value)
    }
    return (
      <Col xs={24} sm={24} md={24} lg={12} xl={12} className="rc-component rc-search-auto-complete">
        <h4 className="title">{title}</h4>
        <AutoComplete
          className="input-search"
          dropdownMatchSelectWidth={false}
          dropdownStyle={{ width: 300 }}
          dataSource={options}
          onSelect={selectSearchValue}
          onSearch={search}
          placeholder={placeholder}
          defaultValue={initValue}
          optionLabelProp="name"
          allowClear
        />
      </Col>
    )
  }
}

export default RcSearchAutoComplete
