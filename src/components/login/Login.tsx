import React, {useEffect, useState} from 'react'
import { connect } from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {
    Button,
    Spin
} from 'antd'
import { Buffer } from 'buffer';
import {Modals} from '@/modals/index'
import styles from '../index.less'


const Login = (props) => {
    const navigate = useNavigate()
    const { GetAvatar } = props
    const [avater,setAvater] = useState<string>('')
    const [login, setLogin] = useState<any>(localStorage.getItem('token'))

    useEffect(() => {
        async function getLogin(){
            // await localStorage.setItem('token','请问是否有将token添加至本地存储')
            // const session = JSON.parse(localStorage.getItem('session'))
            // const loca = localStorage.getItem('token')  
            console.log(login,'打印login')
            // setLogin(loca)
        }
        getLogin()
    },[login])

    useEffect(() => {
        getHeadPortrait()
    },[])

    useEffect(() => {
        window.addEventListener('keydown',onKeydown)
        // return () => window.addEventListener('keydown',onKeydown)
    },[])

    const getHeadPortrait = async () => {
        const headImg = await GetAvatar(Math.round(Math.random() * 1000))
        console.log(headImg,'打印')
        if(headImg){
            const buffer = new Buffer(headImg)
            setAvater(buffer.toString('base64'))
        }
    }

    const onKeydown = (e) => {
        if(e.KeyCode === 13){
            console.log('是否触发回车事件')
        }
    }

    const onClick = async () => {
        // navigate('/home')
        await localStorage.setItem('token',`测试${Math.random()*1000}`)
        const loca = localStorage.getItem('token')  
        setLogin(loca)
    }

    console.log(login,'打印login1111111111111111')

    return (
        <div className={styles.login}>
            <h2>登录</h2>
            <Button onClick={onClick} onKeyDown={(e) => onKeydown(e)}>前往首页</Button>
            <div className={styles.avater}>
                <img src={`data:image/svg+xml;base64,${avater}`} alt="" />
            </div>
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
})(Login)