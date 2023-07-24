import React, { useState, useEffect, useRef } from 'react'
import { connect } from 'react-redux'
import { Modals } from '@/modals'
import { Card, Button } from 'antd'
import { deepTree } from '@/utils/publicMethods'
import SortTreeList from './components/SortTreeListComponent'
import { DocumentEditor } from "@onlyoffice/document-editor-react";

const HtmlFunctionTags = (props) => {
    
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
    // http://www.file.cn/a.docx

    const handleClick = () => {
        let arr = [1,2,3,4,5,6,7,8,9,10];
        
        for (let i = 0; i < arr.length; i++) {

            const randomIndex = Math.round(Math.random() * (arr.length - 1 - i)) + i;

            [arr[i], arr[randomIndex]] = [arr[randomIndex], arr[i]];
        }

        const obj = {
            name: 'a',
            age: 'b',
            height: '150',
            func: handleTree
        }
        let copyObj = {}

        Object.keys(obj).forEach(item => {
            copyObj = {
                ...copyObj,
                [`data-${item}`]: obj[item]
            }
        })
        console.log(copyObj,'copyObj');
        // copyObj[func]
    }

    const onDocumentReady = function (event) {
        console.log("文档加载完成",event);
    };

    return (
        <div>
            <Button onClick={handleClick}>测试</Button>
            <Button onClick={handleTree}>数组转为树结构</Button>
            <div>
                <SortTreeList
                    sortList={[
                        {name: 'A', id: '123456'},
                        {name: 'B', id: '456789'},
                        {name: 'C', id: '789123'},
                    ]}
                />
                <SortTreeList
                    sortList={[]}
                />
                <SortTreeList
                    sortList={[
                        {name: '张三', id: 'dawdawd'},
                        {name: '李四', id: 'dawddwa'},
                        {name: '王五', id: 'jlkljlj'},
                    ]}
                />
            </div>
            <input type="text" init="22"/>
            <div style={{ padding: 20 }}>
                <DocumentEditor
                    id="docxEditor"
                    documentServerUrl="http://documentserver/"
                    config={{
                        "document": {
                            "fileType": "docx",
                            "key": "Khirz6zTPdfd7",
                            "title": "Example Document Title.docx",
                            "url": "http://www.file.cn/a.docx"
                        },
                        // document: '',
                        'options': {
                            // 'type': 'desktop',
                            'mode': 'edit',
                            'height': '100%',
                            'width': '100%',
                        },
                        "documentType": "word",
                        "editorConfig": {
                        "callbackUrl": "https://example.com/url-to-callback.ashx"
                        }
                    }}
                    events_onDocumentReady={onDocumentReady}
                />
            </div>

            <div>
                <Button onClick={async () => {
                    const { GetCloudMusic } = props
                    const result = await GetCloudMusic()
                    console.log(result,'result');
                }}>测试request</Button>
            </div>
        </div>
    )
}

const {
    GetCloudMusic
} = Modals.OpenSourceModels.actions

export default connect(null,{
    GetCloudMusic
})(HtmlFunctionTags)