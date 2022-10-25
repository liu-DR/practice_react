import React,{useEffect, useState} from 'react'
import { connect } from 'react-redux'
import { Menu } from 'antd'
import type { MenuProps } from 'antd/es/menu';

// 定义menu类型
type MenuItem = Required<MenuProps>['items'][number];
const getItem = (
    label: React.ReactNode,
    key?: React.Key | null,
    icon?: React.ReactNode,
    children?: MenuItem[],
): MenuItem => {
    return {
        key,
        icon,
        children,
        label,
    } as MenuItem;
}


const SiderMenu = (props) => {
    const [menuList, setMenuList] = useState([])

    const deepRouter = (menuArr) => {
        const newArr = []
    }

    const onClick = () => {
        console.log('111111111111111');
    }
    const onOpenChange = () => {
        console.log('222222222222222');
    }

    return (
        <div>
            <Menu
                theme='light'
                selectedKeys={[]}
                mode='inline'
                onClick={onClick}
                onOpenChange={onOpenChange}
                triggerSubMenuAction='click'
                items={menuList}
            />
        </div>
    )
}

const mapStateToProps = (state,props) => {
    return{

    }
}

export default connect(mapStateToProps,{

})(SiderMenu)