
import { Layout, Menu } from 'antd';
import React, { useState } from 'react';
import Asider from './Aside'
import MainContent from './MainContent'
import './style.less'

const { Header, Sider, Content } = Layout;


const Layouts = (props) => {
    const [collapsed, setCollapsed] = useState(false)

    return (
      <Layout>
          <Header style={{ height: 48, padding: 0, lineHeight: 48 }}>

          </Header>
          <Layout>
            <Sider
                theme='light'
                collapsible
                collapsed={collapsed}
                onCollapse={(value) => setCollapsed(value)}
            >
                <Asider />
            </Sider>
            <Content
                style={{
                    padding: 24,
                    minHeight: 280,
                }}
            >
                <MainContent />
            </Content>
        </Layout>
      </Layout>
    );
  };
  
  export default Layouts;