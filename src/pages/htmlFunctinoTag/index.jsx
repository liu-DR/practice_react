import React, { useState, useEffect, useRef } from 'react'
import { Card, Button } from 'antd'
import 'kindeditor/kindeditor-all';
import 'kindeditor/kindeditor-all-min'

const HtmlFunctionTags = () => {
    const editorRef = useRef(null);

    // 初始化编辑器
    useEffect(() => {
        const options = {
            items: ['undo', 'redo', '|', 'preview', 'template', 'cut', 'copy'],
            width: '500px',
            minHeight: '500px',
            resizeType: 'vertical',
            // zIndex: 1,
        }
        if (editorRef.current) {
            window.KindEditor.create(editorRef.current,options);
        }
    }, []);
    
    const handleClick = () => {
        let obj1 = { a: 1, b: { c: 1 }, list: ['name', 'height'], func: () => { console.log('有内鬼，终止交易')} }
        let obj1_copy = { ...obj1 }
        
        console.log(obj1,'obj1')    // { a: 1, b: { c: 1 } }
        console.log(obj1_copy,'obj1_copy')    // { a: 1, b: { c: 1 } }
    }

    return (
        <div>
            <Button onClick={handleClick}>测试</Button>
            <div>
                <p>kindeditor富文本编辑器</p>
                <div>
                    <textarea ref={editorRef}></textarea>
                </div>
            </div>
        </div>
    )
}

export default HtmlFunctionTags