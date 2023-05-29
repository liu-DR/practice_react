import React, { useState, useEffect, useRef } from 'react'
import { Card, Button } from 'antd'
import { deepTree } from '@/utils/publicMethods'
import SortTreeList from './components/SortTreeListComponent'

const HtmlFunctionTags = () => {
    
    const handleClick = () => {
        let arr = [1,2,3,4,5,6,7,8,9,10];
        
        for (let i = 0; i < arr.length; i++) {

            const randomIndex = Math.round(Math.random() * (arr.length - 1 - i)) + i;

            [arr[i], arr[randomIndex]] = [arr[randomIndex], arr[i]];
        }

        console.log(arr)
    }

    const handleTree = () => {
        const arr = [
            {
                id: 2,
                name: '部门B',
                parentId: 0
            },
            {
                id: 3,
                name: '部门C',
                parentId: 1
            },
            {
                id: 1,
                name: '部门A',
                parentId: 2
            },
            {
                id: 4,
                name: '部门D',
                parentId: 1
            },
            {
                id: 5,
                name: '部门E',
                parentId: 2
            },
            {
                id: 6,
                name: '部门F',
                parentId: 3
            },
            {
                id: 7,
                name: '部门G',
                parentId: 2
            },
            {
                id: 8,
                name: '部门H',
                parentId: 4
            }
        ]

        const treeData = deepTree(arr,0)
        console.log(treeData,'treeData');

    }

    return (
        <div>
            <Button onClick={handleClick}>测试</Button>
            <Button onClick={handleTree}>数组转为树结构</Button>
            <div>
                <SortTreeList />
            </div>
        </div>
    )
}

export default HtmlFunctionTags