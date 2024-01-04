import React, {useEffect, useState} from 'react'
import { connect } from 'react-redux'
import { OpenSourceModels } from '@/modals/reducer'
import {useNavigate} from 'react-router-dom'
import { Buffer } from 'buffer';
import {
    Spin,
    Button
} from 'antd'
import styles from '../index.less'



const LayoutHeader = (props) => {
    const navigate = useNavigate()
    const { GetAvatar, avatarImg } = props
    console.log(avatarImg,'avatarImg');
    const [userName, setUserName] = useState<string>('')

    useEffect(() => {
        // 获取当前登录用户名
        const formation = JSON.parse(localStorage.getItem('formation') || '{}')
        if(Object.keys(formation).length > 0){
            setUserName(formation?.userName)
        }
        
    },[])

    // 头像转换处理
    const getHeadPortrait = async () => {
        const data = await GetAvatar(Math.round(Math.random() * 1000))
        console.log(data,'data');
        
    }
    
    useEffect(() => {
        getHeadPortrait()
    },[])
    
    return (
        <div className={styles.layoutHeader}>
            <div className={styles.headPortrait}>
                <span>{userName}</span>
                {avatarImg
                    ?
                        <img src={`data:image/svg+xml;base64,${new Buffer(avatarImg).toString('base64')}`} alt="" />
                    :   <div style={{ padding: '0 20px', height: 'inherit', lineHeight: '52px' }}><Spin /></div>
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
    const {
        getAvatarImg
    } = OpenSourceModels.selectors(state)

    return {
        avatarImg: getAvatarImg()
    }
}

const {
    GetAvatar
} = OpenSourceModels.actions


export default connect(mapStateToProps,{
    GetAvatar
})(LayoutHeader)