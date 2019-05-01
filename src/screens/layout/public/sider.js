import React, { PureComponent } from 'react'
import { Menu, Layout, Icon } from 'antd';

export class Sider extends PureComponent {
  render() {
    return (
      <Layout.Sider width={200} style={{ background: '#fff' }}>
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          // defaultOpenKeys={['sub1']}
          style={{ height: '100%' }}
        >
          <Menu.SubMenu key="sub1" title={<span><Icon type="user" />subnav 1</span>}>
            <Menu.Item key="1">option1</Menu.Item>
          </Menu.SubMenu>
        </Menu>
      </Layout.Sider>
    )
  }
}

export default Sider
