import React,{useEffect, useState} from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { connect } from 'react-redux'
import { Menu } from 'antd'
import type { MenuProps } from 'antd/es/menu';
import { RouteObject } from '../data'
import routes from '../routes'
import {
    HomeOutlined,
    ProfileOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';


const SiderMenu = (props) => {
    const {pathname} = useLocation()
    const [menuList, setMenuList] = useState<MenuItem[]>([])
    const [keys, setKeys] = useState<string[]>([pathname])
    const [openKey, setOpenKey] = useState<string[]>([])

    const navigate = useNavigate()

    useEffect(() => {
        deep(routes)
    },[])

    useEffect(() => {
        getMenuList()
    },[])

    // 	刷新页面当前菜单项高亮
    useEffect(() => {
        // console.log(pathname,'打印pathname')
        onClick({keyPath: [pathname]})
        setOpenKey([pathname.split('/')[1]])
        setKeys([pathname])
    },[pathname])

    const getMenuList = () => {
        setMenuList(deep(routes))
    }

    // 只有一个展开菜单项
    const onOpenChange = (openKeys: string[]) => {
        // console.log(openKeys,'openKeys111111')
        if(openKeys?.length > 1){
            setOpenKey(openKeys.slice(0))
        }else{
            setOpenKey(openKeys)
        }
    }
    // 点击菜单项展示对应页面
    const onClick = ({keyPath}) => {
        // console.log(keyPath,'keyPath22222');
        if(keyPath?.length){
            navigate(keyPath[0])
            setKeys([keyPath[0]])
        }
    }

    // 定义menu类型
    type MenuItem = Required<MenuProps>['items'][number];
    const getItem = (
        label: React.ReactNode | string,
        key?: React.Key | null,
        icon?: React.ReactNode,
        children?: MenuItem[],
    ): MenuItem => {
        return {
            key,
            icon,
            children,
            label,
            // title
        } as MenuItem;
    }

    // 转成antd Menu所需的格式
    const deep = (menuData: any[], newArr: MenuItem[] = []) => {
        menuData.forEach(menu => {
            if(!(Object.keys(menu?.meta).length)){
                if(menu?.children){
                    menu?.children.forEach(child => {
                        return newArr.push(getItem(child?.title, child.path, child?.icon))
                    })
                }else{
                    return newArr.push(getItem(menu?.title, menu?.path, menu?.icon))
                }
            }else{
                newArr.push(getItem(menu?.meta?.title, menu?.meta?.key, menu?.meta?.icon, deep(menu.children)))
            }
        })
        return newArr
    }

    return (
        <div>
            <Menu
                theme='light'
                selectedKeys={keys}
                openKeys={openKey}
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