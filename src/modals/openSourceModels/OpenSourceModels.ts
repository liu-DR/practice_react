import request from '@/utils/axios'
import { asyncActions } from '@/utils/publicMethods'

const OpenSourceModels = {
    name: 'OpenSourceModels',
    state: {
        avatarImg: null
    },
    selectors: (state) => {
        const selectors = {
            getAvatarImg: () => state.avatarImg
        }
        return selectors
    },
    apis: {
        /**
         *  多头像调用接口   https://api.multiavatar.com/4645646 
         *  个人秘钥： apikey=OoEq2Qdshzxk17
         */
        getAvatar: (params) => request({
            url: `https://api.multiavatar.com/4645646/${params}?apikey=OoEq2Qdshzxk17`,
            method: 'GET'
        }),
        getCloudMusic: (params) => {
            return request({
                url: `/cloud/cloudsearch?keywords=海阔天空`,
                method: 'POST',
            })
        },
    },
    actions: {
        GetAvatar: (params) => (dispatch) => asyncActions({
            api:OpenSourceModels.apis.getAvatar,
            params,
            dispatch,
            actionType: 'GETAVATAR'
        }),
        GetCloudMusic: (params) => (dispatch) => {
            return OpenSourceModels.apis.getCloudMusic(params).then(res => {
                dispatch({
                    type: 'GETCLOUDMUSIC',
                    payload: res
                })
                return res
            })
        }
    },
    reducer: {
        avatarImg: (state = OpenSourceModels.state.avatarImg, actions) => {
            const { type, payload } = actions
            switch (type) {
                case 'GETAVATAR':
                    return payload.data;
                default:
                    return state;
            }
        }
    }
}

export default OpenSourceModels
