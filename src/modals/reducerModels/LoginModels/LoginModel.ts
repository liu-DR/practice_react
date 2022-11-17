import axios from '@/utils/axios'
import { v4 as uuidv4 } from 'uuid'

const LoginModel = {
    // 定义共享变量数据
    state: {

    },

    // 获取和存放修改state的方法
    selectors: (state) => {
        const selectors = {

        }
        return selectors
    },

    // 接口apis
    apis: {

    },

    // actions
    actions: {
        loginActions: (params:{name:string, password: string}) => (dispatch:any) => {
            if(params.name === 'admin' && params.password === '123456'){
                const formation = JSON.stringify({
                    token: uuidv4(),
                    expira: Date.now(),
                    userName: params.name
                })
                localStorage.setItem('formation',formation)
                return true
            }else{
                return false
            }
        }
    },

    // reducer
    reducers: {

    }

}

export default LoginModel