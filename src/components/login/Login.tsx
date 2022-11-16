import React, {useEffect, useState} from 'react'
import { connect } from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {
    Button,
    Spin,
    Input,
    Row,
    Col
} from 'antd'
import { Modals } from '@/modals/index'
import styles from '../index.less'

const {Password} = Input

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
            <div className={styles.loginContnet}>
                <h1>login</h1>
                <Row>
                    <Col span={24}>
                        <Input placeholder='username' bordered={false}/>
                    </Col>
                    <Col span={24}>
                        <Password placeholder='password' bordered={false}/>
                    </Col>
                </Row>
                <Button>Login</Button>
            </div>
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