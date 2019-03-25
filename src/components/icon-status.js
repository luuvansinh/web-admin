import React, { PureComponent } from 'react'
import { Tooltip } from 'antd'
import { key } from '../configs/locale'
import './style.less'

class RcIconStatus extends PureComponent {
  render() {
    const { active = false, translate } = this.props
    const title = active ? key.active : key.inactive
    return (
      <Tooltip title={translate(title)}>
        <div className={`rc-icon-status rc-icon-status-${active}`} />
      </Tooltip>
    )
  }
}

export default RcIconStatus
