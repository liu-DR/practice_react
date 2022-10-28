import React, {useEffect, useState} from 'react'
import { connect } from 'react-redux'
import { Outlet } from 'react-router-dom'
import { Layout } from 'antd'
import SiderMenu from './SiderMenu'
import styles from '../index.less'


const LayoutIndex = (props) => {
    const [collapsed, setCollapsed] = useState<boolean>(false)
    const { Sider, Content, Header } = Layout

    // useEffect(() => {
    //     // console.log('1111111111111111')
    // },[])

    const onCollapse = () => {
        setCollapsed(!collapsed)
    }

    return(
        <Layout className={styles.layout}>
            <Header className={styles.layoutHeader}>这是头部</Header>
            <Layout>
                <Sider collapsible theme='light' width={220} collapsed={collapsed} onCollapse={onCollapse} className={styles.layoutSider}>
                    <SiderMenu />
                </Sider>
                <Content className={styles.layoutContent}>
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
