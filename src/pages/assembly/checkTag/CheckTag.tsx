import React, {useState, useEffect} from 'react'
import { connect } from 'react-redux'
import {
    Tag
} from 'antd'

const {CheckableTag} = Tag

const CheckTag = () => {
    const [selectedTag, setSelectedTag] = useState<Array<string>>([])

    useEffect(() => {

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
        </div>
    )
}


const mapStateToProps = (state, props) => {
    return{

    }
}

export default connect(mapStateToProps,{

})(CheckTag)