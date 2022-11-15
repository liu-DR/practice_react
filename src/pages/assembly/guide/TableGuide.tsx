import React, {useState, useEffect} from 'react'
import { connect } from 'react-redux'
import { useNavigate, useLocation } from 'react-router-dom'
import {
    Button,
    Table
} from 'antd'
import { columnsTableType } from '../data'
import styles from '../assembly.less'

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


const TableGuide = () => {
  const [selectIndex, setSelectIndex] = useState<number>(0);

  const columns = (rowIndexw) => [
    {
      title: 'Name',
      dataIndex: 'name',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Age',
      dataIndex: 'age',
    },
    {
      title: 'Home phone',
      dataIndex: 'tel',
      onCell: (_, index) => {
        if (index === 0) {
          return {
            rowSpan: 5,
          };
        }
        return {rowSpan: 0};
      },
      render:()=>{
        const current = data[rowIndexw];
        return <div>
          <div>name：{current.name}</div>
          <div>age：{current.age}</div>
          <div>phone：{current.phone}</div>
          <div>address：{current.address}</div>
        </div>;
      }
    },
  ];

  return (
    <div className={styles.guideContent}>
        <h2 className={styles.title}>Table表格最后一列合并展示详细信息</h2>
        <Table 
            columns={columns(selectIndex)} 
            dataSource={data}
            pagination={false}
            onRow={(record,index:any) => {
                return {
                    //点击行
                    onClick: event => {
                        setSelectIndex(index)
                    }, 
                };
            }}
            rowClassName={(record,index)=>{
                if(index === selectIndex) return 'selectedRow';
                return '';
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

})(TableGuide)