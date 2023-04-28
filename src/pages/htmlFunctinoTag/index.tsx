import React, { useState, useEffect } from 'react'
import { Select, Form } from 'antd'
import GluttonousSnake from './GluttonousSnake'

const data = [
    {title: '名称1', age: '12'},
    {title: '名称2', age: '13'},
    {title: '名称3', age: '14'},
    {title: '名称4', age: '15'},
]

const HtmlFunctionTags = () => {
    // const [ data, setData ] = useState([1,2,3,4])
    
    return (
        <div>
            <h2>Html功能标签使用</h2>
            <br />
            <h2>循环下拉框组件</h2>
            <div>
                <GluttonousSnake />
            </div>
        </div>
    )
}

export default HtmlFunctionTags