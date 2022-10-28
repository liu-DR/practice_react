import React, {useEffect, useState} from 'react'
import { connect } from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {
    Button
} from 'antd'


const Login = () => {
    const navigate = useNavigate()

    const onClick = () => {
        navigate('/home')
    }

    return (
        <div>
            <h2>登录</h2>
            <Button onClick={onClick}>前往首页</Button>
        </div>
    )
}

const mapStateToProps = (state, props) => {

    return {

    }
}


export default connect(mapStateToProps,{

})(Login)