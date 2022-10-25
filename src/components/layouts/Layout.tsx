import React, {useEffect, useState} from 'react'
import { connect } from 'react-redux'
import { Outlet } from 'react-router-dom'
import { Layout } from 'antd'
import SiderMenu from './SiderMenu'


const LayoutIndex = (props) => {
    const [collapsed, setCollapsed] = useState<boolean>(false)

    const { Sider, Content, Header } = Layout

    return(
        <Layout>
            <Sider theme='light' width={220} collapsed={collapsed} onCollapse={() => setCollapsed(!collapsed)}>
                <SiderMenu />
            </Sider>
            <Layout>
                <Header>这是头部</Header>
                <Content>
                    <Outlet />
                </Content>
            </Layout>
        </Layout>
    )
}


const mapStateToProps = (state, props) => {

    return{

    }
}

export default connect(mapStateToProps,{

})(LayoutIndex)
