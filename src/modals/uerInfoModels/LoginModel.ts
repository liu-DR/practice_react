import { userInfoType } from '../interface/modelInterface'
import request from '@/utils/axios'
import { asyncActions } from '@/utils/publicMethods'

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
        loginActions: (params) => (dispatch) => asyncActions({
            api: LoginModel.apis.loginApi,
            params,
            dispatch,
            actionType: 'USERINFO'
        })
    },

    // reducer
    reducer: {
        userInfo: (state = LoginModel.state.userInfo, actions) => {
            const { type, payload } = actions
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