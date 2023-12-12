import React, { useState, useEffect } from 'react'
import { Card, Button, Space } from 'antd'
import {
    VerticalAlignTopOutlined,
    VerticalAlignBottomOutlined
} from '@ant-design/icons'
import styles from '../index.less'

interface sortListType {
    name?: string;
    id?: string;
    sort?: null | number;
}

const SortTreeList = (props) => {
    const [sortListData, setSortListData] = useState<sortListType[]>([])

    useEffect(() => {
        const { sortList } = props
        if(Array.isArray(sortList)){
            setSortListData(sortList)
        }
    },[])

    // 上移
    const onMoveUp = (item,index) => {
        let newListData: sortListType[] = [...sortListData];

        // 添加倒计时，先更新数据再刷新视图列表
        setTimeout(() => {
            // 点击的与元素和前一个元素互换位置
            [newListData[index - 1], newListData[index]] = [newListData[index], newListData[index - 1]]
            setSortListData(newListData)
        }, 300);
    }
    // 下移
    const onMoveDown = (item,index) => {
        let newListData: sortListType[] = [...sortListData]

        setTimeout(() => {
            [newListData[index], newListData[index + 1]]  = [newListData[index + 1], newListData[index]]
            setSortListData(newListData)
        },300)
    }
    // 置顶
    const onMoveTopping = (item,index) => {
        let newListData: sortListType[] = [...sortListData]

        setTimeout(() => {
            // unshift：往数组前面插入元素
            newListData.unshift(newListData.splice(index,1)[0])
            setSortListData(newListData)
        },300)
    }

    return (
        <div className={styles.sortList}>
            <Card title='可排序选择树结构'>
                {sortListData.length ? <ul>
                    {
                        sortListData.map((item,index) => (
                            <li key={item.id} className={styles.sortList_li}>
                                <span style={{ cursor: 'pointer', padding: '0 10px' }} >{item.name}</span>
                                <Space>
                                    <Button
                                        style={{ cursor: 'pointer', padding: '0 10px' }}
                                        disabled={index===0}
                                        onClick={() => onMoveUp(item,index)}
                                    >
                                        <VerticalAlignTopOutlined />
                                    </Button>
                                    <Button
                                        style={{ cursor: 'pointer', padding: '0 10px' }}
                                        disabled={index===sortListData.length -1}
                                        onClick={() => onMoveDown(item,index)}
                                    >
                                        <VerticalAlignBottomOutlined />
                                    </Button>
                                    <Button
                                        style={{ cursor: 'pointer', padding: '0 10px' }}
                                        disabled={index===0}
                                        onClick={() => onMoveTopping(item,index)}
                                    >置顶</Button>
                                </Space>
                            </li>
                        ))
                    }
                </ul> : null}
            </Card>
        </div>
    )
}

export default SortTreeList