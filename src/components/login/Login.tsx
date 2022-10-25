import React, { Component, useEffect } from 'react'
import { connect } from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {
    Button
} from 'antd'
import * as Icons from "@ant-design/icons";

// class Login extends Component {
//     state = {

//     }
//     async componentDidMount(){

//     }

//     render(){
//         const {} = this.props
//         const {} = this.state

//         return (
//             <div>登录</div>
//         )
//     }
// }

const Login = () => {
    const navigate = useNavigate()

    const onClick = () => {
        console.log('1111111111111');
        navigate('/home', {
            replace: false,
            state: {a:1, b:2}
        })
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