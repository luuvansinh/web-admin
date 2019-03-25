import React, { PureComponent } from 'react'
import { Tooltip, Icon } from 'antd'
import { key } from '../configs/locale'
import './style.less'

class RcIconVerified extends PureComponent {
  render() {
    const { verified = false, translate } = this.props
    const title = verified ? key.verified : key.notVerified
    const icon = verified ? 'style-check' : 'hidden'
    return (
      <Tooltip title={translate(title)}>
        <Icon className={icon} type="check-circle" />
      </Tooltip>
    )
  }
}

export default RcIconVerified

