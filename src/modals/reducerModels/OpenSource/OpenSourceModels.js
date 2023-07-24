// import axios from '../../../utils/axios'
import request from '@/utils/axios'

const OpenSourceModels = {
    state: {
        AvatarImg: null
    },
    selectors: (state) => {
        const selectors = {
            getAvatarImg: () => state.AvatarImg
        }
        return selectors
    },
    apis: {
        /**
         *  多头像调用接口   https://api.multiavatar.com/4645646 
         *  个人秘钥： apikey=OoEq2Qdshzxk17
         */
        getAvatar: (params) => {
            console.log(params,'params');
            return request({
                url: `https://api.multiavatar.com/4645646/${params}?apikey=OoEq2Qdshzxk17`,
                method: 'GET'
            })
        },
        getCloudMusic: (params) => {
            return request({
                url: `/cloud/cloudsearch?keywords=海阔天空`,
                method: 'GET'
            })
        },
    },
    actions: {
        GetAvatar: (params) => async (dispatch) => {
            const result = await OpenSourceModels.apis.getAvatar(params)
            console.log(result,'result');
            /**
             * dispatch({
                    type: 'GETAVATAR',
                    payload: res
                })
                return res
             */
        },
        GetCloudMusic: (params) => (dispatch) => {
            return OpenSourceModels.apis.getCloudMusic().then(res => {
                dispatch({
                    type: 'GETCLOUDMUSIC',
                    payload: res
                })
                return res
            })
        }
    },
    reducer: {
        AvatarImg: (state = OpenSourceModels.state.AvatarImg, actions) => {
            const { type, payload } = actions
            switch (type) {
                case 'GETAVATAR':
                    return payload
                    break;
                default:
                    break;
            }
            return state
        }
    }
}

export default OpenSourceModels
