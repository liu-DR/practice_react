import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import {
    Button
} from 'antd'
import { useLocation, useNavigate } from 'react-router-dom'
import { Buffer } from 'buffer'
import AvatarActionModal from '../../modals/actionApi/avatarActions'


const MattersList = (props) => {
    const {
        GetAvatar,
        AvatarImg
    } = props
    const [img, setImg] = useState('')

    useEffect(() => {
        if(AvatarImg){
            setImg(new Buffer(AvatarImg).toString('base64'))
        }
    },[])

    const getImg = async () => {
        let imgs = null
        const res = await GetAvatar(Math.round(Math.random() * 1000))
        if(res){
            imgs = new Buffer(res).toString('base64')
        }
        setImg(imgs)
    }
    


    return (
        <div>
            <Button onClick={() => navigate('/home')}>前往首页</Button>
            <Button onClick={getImg}>点击获取头像</Button>
            <div >
                <img src={`data:image/svg+xml;base64,${img}`} alt="" style={{ width: 50, height: 50 }}/>
            </div>
        </div>
    )
}

const mapStateToProps = (state, props) => {
    console.log(state,'state', props, 'props');
    const {
        getAvatarImg
    } = AvatarActionModal.selectors(state)
    return {
        AvatarImg: getAvatarImg()
    }
}

const {
    GetAvatar
} = AvatarActionModal.actions

export default connect(mapStateToProps,{
    GetAvatar
})(MattersList)