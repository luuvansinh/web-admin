import React, { PureComponent } from 'react'
import { Layout } from 'antd';

export class PFooter extends PureComponent {
  render() {
    return (
      <Layout.Footer style={{ textAlign: 'center' }}>
        Lưu Văn Sinh ĐHBK
      </Layout.Footer>
    )
  }
}

export default PFooter
