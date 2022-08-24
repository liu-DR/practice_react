import React, { useState } from "react";
import { Link, Router } from "react-router-dom";
import { Menu } from "antd";
import routes from '../../pages/routes'
import './style.less'
import { ArrowRightOutlined } from "@ant-design/icons";

const { SubMenu } = Menu

const Asider = () => {
    const [openKey, setOpenKey] = useState([])

    return (
        <div className='layout_Aside'>
            <Menu
                mode="inline"
                theme= 'light'
                openKeys={openKey}
                onOpenChange={arr=>setOpenKey([arr[arr.length -1]])}
            >
                {routes.map(item => (
                    item.children ? <SubMenu
                        key={item.key}
                        title={item.label}
                        icon={item.icon || null}
                    >
                        {
                            item.children.map(ele=>(
                                <Menu.Item key={ele.key} icon={ele.icon || null}>
                                    <Link to={ele.path}>{ele.label}</Link>
                                </Menu.Item>
                            ))
                        }
                    </SubMenu>
                    : <Menu.Item key={item.key} icon={item.icon || null}>
                        <Link to={item.path}>{item.label}</Link>
                    </Menu.Item>
                ))}
            </Menu>
        </div>
    )
}

export default Asider