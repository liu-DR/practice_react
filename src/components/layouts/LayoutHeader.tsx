import React, {useEffect, useState} from 'react'
import { connect } from 'react-redux'
import { Modals } from '@/modals/index'
import {useNavigate} from 'react-router-dom'
import { Buffer } from 'buffer';
import {
    Spin,
    Button
} from 'antd'
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
        if(headImg){
            const buffer = new Buffer(headImg)
            setAvater(buffer.toString('base64'))
        }
    }

    return (
        <div className={styles.layoutHeader}>
            <div className={styles.headPortrait}>
                <span>头部信息</span>
                {avater
                    ?
                        <img src={`data:image/svg+xml;base64,${avater}`} alt="" />
                    :   <span style={{ padding: '0 20px' }}><Spin /></span>
                }
            </div>
            <Button
                onClick={() => {
                    localStorage.clear()
                    navigate('/login')
                }}
                type='primary'
            >退出登录</Button>
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