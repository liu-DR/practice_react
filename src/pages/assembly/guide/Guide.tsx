import React, {useState, useEffect} from 'react'
import { connect } from 'react-redux'
import { useNavigate, useLocation } from 'react-router-dom'
import {
    Button,
    Table
} from 'antd'
import { columnsTableType } from '../data'

const data: columnsTableType[] = [
    {
      key: "1",
      name: "John Brown",
      age: 32,
      tel: "0571-22098909",
      phone: 18889898989,
      address: "New York No. 1 Lake Park"
    },
    {
      key: "2",
      name: "Jim Green",
      tel: "0571-22098333",
      phone: 18889898888,
      age: 42,
      address: "London No. 1 Lake Park"
    },
    {
      key: "3",
      name: "Joe Black",
      age: 32,
      tel: "0575-22098909",
      phone: 18900010002,
      address: "Sidney No. 1 Lake Park"
    },
    {
      key: "4",
      name: "Jim Red",
      age: 18,
      tel: "0575-22098909",
      phone: 18900010002,
      address: "London No. 2 Lake Park"
    },
    {
      key: "5",
      name: "Jake White",
      age: 18,
      tel: "0575-22098909",
      phone: 18900010002,
      address: "Dublin No. 2 Lake Park"
    }
];


const Guide = (props) => {
    const navigate = useNavigate()
    const [selectIndex, setSelectIndex] = useState<string>('1')

    const columns = (index) => [
        {
            title: "Name",
            dataIndex: "name",
            render: (text) => <a>{text}</a>
        },
        {
            title: "Age",
            dataIndex: "age"
        },
        {
            title:'phone',
            dataIndex: 'tel',
            // 设置单元格属性(合并几行)
            onCell: (record) => {
                console.log(index,record);
                if (index === record.key) {
                    return {
                        rowSpan: 5
                    };
                }
                return { rowSpan: 0 };
            },
            render:() => {
                const recordList = data?.filter(f => f.key === selectIndex)[0]
                return (
                    <div>
                        <p>name：{recordList.name}</p>
                        <p>age：{recordList.age}</p>
                        <p>phone：{recordList.phone}</p>
                        <p>address：{recordList.address}</p>
                    </div>
                )
            }
        }
    ]

    console.log(selectIndex,'selectIndex')

    return (
        <div>
            <h2>Guide组件</h2>
            <Button onClick={() => navigate('/home')}>跳转首页</Button>
            <Table
                dataSource={data}
                columns={columns(selectIndex)}
                onRow={record => {
                    return {
                      onClick: event => {
                        console.log(record.key)
                        setSelectIndex(record.key)
                    }, // 点击行
                    };
                }}
            />
        </div>
    )
}

const mapStateToProps = (state, props) => {

    return {

    }
}

export default connect(mapStateToProps,{

})(Guide)