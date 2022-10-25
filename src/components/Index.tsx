
import { Layout, Menu } from 'antd';
import React, { useState } from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import routes from './routes'

const { Header, Sider, Content } = Layout;


const Layouts = (props) => {
    const [collapsed, setCollapsed] = useState(false)
    const navigate = useNavigate()
    const location = useLocation()

    const clickMenu = ({key}:{key: string}) => {
        console.log(key,'打印');
        navigate(key)
    }

    return (
      <Layout>
          <Header style={{ height: 48, padding: 0, color: '#fff'}}>
            这是头部
          </Header>
          <Layout>
            <Sider
                theme='light'
                collapsible
                collapsed={collapsed}
                onCollapse={(value) => setCollapsed(value)}
            >
                {/* <Asider /> */}
                <Menu
					theme="light"
					mode="inline"
					triggerSubMenuAction="click"
					// openKeys={openKeys}
					// selectedKeys={selectedKeys}
					// items={routes}
					onClick={clickMenu}
					// onOpenChange={onOpenChange}
				/>
            </Sider>
            <Content
                style={{
                    padding: 24,
                    minHeight: 280,
                }}
            >
                {/* <MainContent /> */}
                <Outlet />
            </Content>
        </Layout>
      </Layout>
    );
  };
  
export default Layouts;