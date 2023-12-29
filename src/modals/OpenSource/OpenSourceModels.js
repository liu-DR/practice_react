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
            return request({
                url: `https://api.multiavatar.com/4645646/${params}?apikey=OoEq2Qdshzxk17`,
                method: 'GET'
            })
        },
        getCloudMusic: (params) => {
            return request({
                // url: `/cloud/cloudsearch?keywords=海阔天空`,
                url: '/chat/auth/login',
                method: 'POST',
                params
            })
        },
    },
    actions: {
        GetAvatar: (params) => (dispatch) => {
            OpenSourceModels.apis.getAvatar(params).then(res => {
                dispatch({
                    type: 'GETAVATAR',
                    payload: res
                })
            })
        },
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
        AvatarImg: (state = OpenSourceModels.state.AvatarImg, actions) => {
            const { type, payload } = actions
            switch (type) {
                case 'GETAVATAR':
                    return payload
                default:
                    break;
            }
            return state
        }
    }
}

export default OpenSourceModels
