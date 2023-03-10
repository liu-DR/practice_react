import React, {useState, useEffect} from 'react'
import { connect } from 'react-redux'
import {
    Tag,
    Button,
    Popover
} from 'antd'

const {CheckableTag} = Tag

const CheckTag = () => {
    const [selectedTag, setSelectedTag] = useState<Array<string>>([])

    useEffect(() => {
        const num = {}
        const data = [
            {age: 11, total: 12, name: '1111'},
            {age: 12, total: 11, name: '1111'},
            {age: 21, total: 11, name: '1111'},
            {age: 14, total: 11, name: '1111'},
        ]

        data.map(item => {
            console.log(item,'111')
            for(let key in item){
                if(typeof(item[key]) === 'number'){
                    num[key] = item[key] + (num[key] || 0)
                }else{
                    num[key] = item[key]
                }
            }
        })
        console.log(num,'num')

    },[])

    const checked = [
        {
            name: '业务类型',
            checkTag: [
                {key: 'zq', title: '债券'},
                {key: 'gq', title: '股权'}
            ]
        },
        {
            name: '颜色类型',
            checkTag: [
                {key: 'red', title: '红色'},
                {key: 'green', title: '绿色'}
            ]
        },
        {
            name: '感兴趣话题',
            checkTag: [
                {key: 'movies', title: '电影'},
                {key: 'books', title: '书籍'},
                {key: 'music', title: '音乐'},
                {key: 'sport', title: '运动'}
            ]
        },
    ]

    // 标签选中/取消操作
    const handeleChange = (item: { key: string; title?: string },check: boolean) => {

        console.log('打印',check,item)
        const selectChecks:string[] = check ? [...selectedTag, item.key] : selectedTag.filter(f => f !== item.key)
        console.log(selectChecks,'selectChecks');
        setSelectedTag(selectChecks)
    }

    return (
        <div>
            {checked.map((tab,index) => (
                <div key={index}>
                    <span style={{ marginRight: 8 }}>{tab.name}:</span>
                    {tab.checkTag.map((item,index) => (
                        <CheckableTag
                            key={item.key}
                            checked={selectedTag.indexOf(item.key) > -1 }   // 判断当前标签是否被选中
                            onChange={(checked) => handeleChange(item,checked)}
                        >{item.title}</CheckableTag>

                    ))}
                </div>
            ))}
            <Popover trigger='click' placement='bottom' content='dadwawd '>点击此处添加标签</Popover>
            <Button >点击此处添加标签</Button>
        </div>
    )
}


const mapStateToProps = (state, props) => {
    return{

    }
}

export default connect(mapStateToProps,{

})(CheckTag)