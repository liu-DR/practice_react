import React, { useState } from 'react'
import { Card, Checkbox, Select } from 'antd'

interface checkListType {
    name?: string;
    id?: string;
    sort?: null | number;
}

const SortTreeList = () => {
    const [checkeds, setCheckeds] = useState<checkListType[]>([])

    const listData = [
        {name: 'A', id: '123456', sort: null},
        {name: 'B', id: '456789', sort: null},
        {name: 'C', id: '789123', sort: null},
    ]
    const selectSort = [1,2,3,4,5,6,7,21,112].map(sort => {
        return {
            value: sort,
            label: sort
        }
    })

    const checkChange = (checkedValues) => {
        console.log(checkedValues,'checkedValues');
        let checkList:checkListType[] = []
        const checks = checkeds.length ? checkeds.map(item => {
            
        }) : []
        if(checkeds.length > 0){
            
        }else{
            checkList = listData.filter(f => checkedValues.indexOf(f.id) !== -1)
        }
        setCheckeds(checkList)
    }

    const handleClick = (item) => {
        console.log(item,'item');
    }

    const handleChange = (value, item) => {
        console.log(value,'value', item,'item');
        const sortChangeList = checkeds.map(f => {
            return {
                ...f,
                sort: f.id === item.id ? value : f.sort
            }
        })
        setCheckeds(sortChangeList)
    }

    console.log(checkeds,'checkeds');

    return (
        <div>
            <Card title='可排序选择树结构'>
                <div style={{ width: 130, height: 300, border: '1px solid #ccc' }}>
                    <Checkbox.Group onChange={checkChange}>
                        {listData.map(item => (
                            <div key={item.id} style={{ textAlign: 'center', padding: 5 }}>
                                <Checkbox value={item.id} />
                                <span style={{ padding: '0 10px', cursor: 'pointer' }} onClick={() => handleClick(item)}>{item.name}</span>
                                <Select
                                    style={{ width: 70 }}
                                    onChange={(value) => handleChange(value,item)}
                                    options={selectSort}
                                />
                            </div>
                        ))}
                    </Checkbox.Group>
                </div>
            </Card>
        </div>
    )
}

export default SortTreeList