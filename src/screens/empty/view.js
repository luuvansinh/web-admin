import React, { PureComponent } from 'react'
import { connect } from 'dva'

export class View extends PureComponent {
  render() {
    return (
      <div>
        empty
      </div>
    )
  }
}

export default connect(({ loading }) => ({
  loading,
}))(View)
