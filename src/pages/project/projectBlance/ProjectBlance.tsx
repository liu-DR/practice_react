import React, {useEffect, useState} from "react";
import { connect } from "react-redux";
import { Badge, Descriptions } from 'antd';
import {numberFormatter} from '@/utils/publicMethods'
import styles from './projectBlance.less'

const ProjectBlance = (props) => {
    
    const addPayList = [
        {title: '承销收入', pay: 1684384},
        {title: '保荐收入', pay: 493438},
        {title: '辅导收入', pay: 3453},
        {title: '改制收入', pay: 387396},
        {title: '财务顾问收入', pay: 345373},
        {title: '分销收入', pay: 6964532},
        {title: '受托管理收入', pay: 3936473},
        {title: '经纪佣金', pay: 378543},
    ]
    const expendPayList = [
        {title: '协议支出', pay: 7692483},
        {title: '第三方中介支出', pay: 379345283},
        {title: '销售佣金', pay: 398345324936873},
        {title: '其他支出', pay: 37972896373},
    ]


    return (
        <div className={styles.projectBlance}>
            <Descriptions title='总收入(不含税，元)' bordered column={2}>
                {addPayList.map(item => (
                    <Descriptions.Item label={item.title}>{numberFormatter(item.pay)}</Descriptions.Item>
                ))}
            </Descriptions>
            <Descriptions title='总支出(不含税，元)' bordered column={2}>
                {expendPayList.map(item => (
                    <Descriptions.Item label={item.title}>{numberFormatter(item.pay)}</Descriptions.Item>
                ))}
            </Descriptions>
        </div>
    )
}


const mapStateToProps = (state,props) => {

}

export default connect(mapStateToProps,{

})(ProjectBlance)