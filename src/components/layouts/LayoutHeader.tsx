import React, {useEffect, useState} from 'react'
import { connect } from 'react-redux'
import { Modals } from '@/modals/index'
import {useNavigate} from 'react-router-dom'
import { Buffer } from 'buffer';
import styles from '../index.less'



const LayoutHeader = (props) => {
    const navigate = useNavigate()
    const { GetAvatar } = props
    const [avater,setAvater] = useState<string>('')

    useEffect(() => {
        getHeadPortrait()
    },[])

    // 头像转换处理
    const getHeadPortrait = async () => {
        const headImg = await GetAvatar(Math.round(Math.random() * 1000))
        console.log(headImg,'打印')
        if(headImg){
            const buffer = new Buffer(headImg)
            setAvater(buffer.toString('base64'))
        }
    }

    return (
        <div className={styles.layoutHeader}>
            <span>头部信息</span>
            <span>
                <img src={`data:image/svg+xml;base64,${avater}`} alt="" />
            </span>
        </div>
    )
}



const mapStateToProps = (state, props) => {

    return {

    }
}

const {
    GetAvatar
} = Modals.OpenSourceModels.actions


export default connect(mapStateToProps,{
    GetAvatar
})(LayoutHeader)