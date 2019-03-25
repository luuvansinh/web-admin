import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Dropdown, Button, Icon, Menu } from 'antd'

class RcDropOption extends PureComponent {
  render() {
    const { onMenuClick, menuOptions = [] } = this.props
    const menu = menuOptions.map((item) => {
      return (
        <Menu.Item key={item.key} disabled={item.disabled}>
          <Icon type={item.icon} /> {item.name}
        </Menu.Item>
      )
    })
    return (
      <div className="rc-drop-option">
        <Dropdown
          overlay={<Menu onClick={onMenuClick}>{menu}</Menu>}
        >
          <Button className="btn-drop-option" size="small">
            <Icon type="bars" />
            <Icon type="down" />
          </Button>
        </Dropdown>
      </div>
    )
  }
}

RcDropOption.propTypes = {
  onMenuClick: PropTypes.func.isRequired,
  menuOptions: PropTypes.array.isRequired,
}
export default RcDropOption
