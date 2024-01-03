// import request from '@/utils/axios'
import { v4 as uuidv4 } from 'uuid'
import { userInfoType } from '../interface/modelInterface'
import request from '@/utils/axios'

const LoginModel = {
    name: 'UserInfoModels',
    // 定义共享变量数据
    state: {
        userInfo: {}
    },

    // 获取和存放修改state的方法
    selectors: (state) => {
        const selectors = {
            getUserInfo: () => state.userInfo
        }
        return selectors
    },

    // 接口apis
    apis: {
        loginApi: (params) => request({
            url: '/chat/auth/login',
            method: 'POST',
            params
        }),
    },

    // actions
    actions: {
        loginActions: (params) => async (dispatch) => {

            const res = await LoginModel.apis.loginApi(params)
            console.log(res,';;wwwwww');
            

            dispatch({
                type: 'USERINFO',
                payload: res
            })

            return 
            LoginModel.apis.loginApi(params).then(res => {
                dispatch({
                    type: 'USERINFO',
                    payload: res
                })
                return res
            })
        }
    },

    // reducer
    reducer: {
        userInfo: (state = LoginModel.state.userInfo, actions) => {
            const { type, payload } = actions

            console.log(payload,'payload');
            
            switch (type) {
                case 'USERINFO':
                    return payload
                default:
                    break;
            }
            return state
        }
    }

}

export default LoginModel