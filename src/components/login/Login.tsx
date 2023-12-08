import React, {useEffect, useState} from 'react'
import { connect } from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {
    Button,
    Spin,
    Input,
    Row,
    Col,
    message,
} from 'antd'
import { loginModel } from '@/modals'
import styles from '../index.less'

const {Password} = Input

const Login = (props) => {
    const navigate = useNavigate()
    const [isLogin, setIsLogin] = useState<boolean>(true)
    const [userName, setUserName] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [nameDisplay, setNameDisplay] = useState<string>('none')
    const [passDisplay, setPassDisplay] = useState<string>('none')

    useEffect(() => {
        const formation = JSON.parse(localStorage.getItem('formation') || '{}')

        if(Object.keys(formation).length > 0){
            navigate('/home')
        }else{
            setIsLogin(false)
        }
    },[])

    const onChange = (e,type) => {
        const value = e.target.value.trim()

        if(type === 'userName'){
            if(value === ''){
                setNameDisplay('block')
            }else{
                setUserName(value)
                setNameDisplay('none')
            }
        }else{
            if(value === ''){
                setPassDisplay('block')
            }else{
                setPassword(value)
                setPassDisplay('none')
            }
        }
    }

    // 登录
    const submit = async () => {
        const { loginActions } = props

        if(!(userName && password)){
            if(!userName && !password){
                setNameDisplay('block')
                setPassDisplay('block')
            }else if(!userName){
                setNameDisplay('block')
            }else if(!password){
                setPassDisplay('block')
            }
            return
        }else{
            const res = await loginActions({name:userName, password: password})

            if(res){
                message.success('登录成功')
                navigate('/home')
            }else{
                message.error('用户名或密码错误')
            }
        }
    }

    // 退出登录
    const signout = () => {
        localStorage.removeItem('token')
    }

    return (
        <div className={styles.login}>
            {isLogin
                ? <div style={{display: 'flex',}}>
                        <Spin tip='Loading...' />
                    </div>
                : <div className={styles.loginContnet}>
                    <h1>login</h1>
                    <Row>
                        <Col span={24}>
                            <Input
                                placeholder='username: admin'
                                allowClear
                                onChange={e => onChange(e,'userName')}
                                status={nameDisplay === 'none' ? '' : 'error'}
                            />
                            <span
                                style={{
                                    color: 'red',
                                    textAlign: 'left',
                                    paddingLeft: '10px',
                                    display: nameDisplay
                                }}
                            >用户名不能为空</span>
                        </Col>
                        <Col span={24}>
                            <Password
                                placeholder='password: 123456'
                                allowClear
                                onChange={e => onChange(e,'password')}
                                status={passDisplay === 'none' ? '' : 'error'}
                            />
                            <span
                                style={{
                                    color: 'red',
                                    textAlign: 'left',
                                    paddingLeft: '10px',
                                    display: passDisplay
                                }}
                            >密码不能为空</span>
                        </Col>
                    </Row>
                    <Button onClick={() => submit()}>Login</Button>
                </div> 
            }
            
        </div>
    )
}



const mapStateToProps = (state, props) => {

    return {

    }
}

const {
    loginActions
} = loginModel.actions



export default connect(mapStateToProps,{
    loginActions
})(Login)