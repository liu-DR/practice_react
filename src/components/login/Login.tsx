import React, {useEffect, useState} from 'react'
import { connect } from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {
    Button,
    Spin
} from 'antd'
import { Modals } from '@/modals/index'
import styles from '../index.less'


const Login = (props) => {


    const submit = async () => {
        const { loginActions } = props
        const res = await loginActions({name:'admin', password: '123456'})
        console.log(res,'打印')
    }

    const signout = () => {
        localStorage.removeItem('token')
    }

    return (
        <div className={styles.login}>
            <h2>登录</h2>
            <Button onClick={() => submit()}>点击登录</Button>
            <Button onClick={() => signout()}>退出登录</Button>
        </div>
    )
}



const mapStateToProps = (state, props) => {

    return {

    }
}

const {
    loginActions
} = Modals.LoginModels.actions



export default connect(mapStateToProps,{
    loginActions
})(Login)