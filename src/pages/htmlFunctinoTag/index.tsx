import React, { useState, useEffect } from 'react'
import { Select, Form, Badge, Divider, Space } from 'antd'
import GluttonousSnake from './GluttonousSnake'

const data = [
    {title: '名称1', age: '12'},
    {title: '名称2', age: '13'},
    {title: '名称3', age: '14'},
    {title: '名称4', age: '15'},
]
const colors = [
    'pink',
    'red',
    'yellow',
];

const HtmlFunctionTags = () => {
    // const [ data, setData ] = useState([1,2,3,4])
    const handleClick = () => {
        console.log('1111111')
    }
    
    return (
        <div>
            <h2>Html功能标签使用</h2>
            <br />
            <h2>循环下拉框组件</h2>
            <div>
                {/* <GluttonousSnake /> */}
            </div>
            <div>
                <Space direction="vertical">
                    <Badge color="#f50" text="#f50" />
                    <span onClick={handleClick}><Badge color="rgb(45, 183, 245)" text="rgb(45, 183, 245)" /></span>
                    <Badge color="hsl(102, 53%, 61%)" text="hsl(102, 53%, 61%)" />
                    <Badge color="hwb(205 6% 9%)" text="hwb(205 6% 9%)" />
                </Space>
            </div>
        </div>
    )
}

export default HtmlFunctionTags