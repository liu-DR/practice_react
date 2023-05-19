import React, { useState, useEffect } from 'react'
import { Card, Button } from 'antd'

const HtmlFunctionTags = () => {
    
    const handleClick = () => {
        let obj1 = { a: 1, b: { c: 1 }, list: ['name', 'height'], func: () => { console.log('有内鬼，终止交易')} }
        let obj1_copy = { ...obj1 }
        
        console.log(obj1,'obj1')    // { a: 1, b: { c: 1 } }
        console.log(obj1_copy,'obj1_copy')    // { a: 1, b: { c: 1 } }
    }

    return (
        <div>
            <Button onClick={handleClick}>测试</Button>
        </div>
    )
}

export default HtmlFunctionTags