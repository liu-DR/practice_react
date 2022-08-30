import axios from '../../utils/axios'

// const initState = {
//     imgs: null
// }

const AvatarActionModal = {
    state: {
        AvatarImg: null
    },
    selectors: (state) => {
        console.log(state,'state');
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
            return axios({
                url: `https://api.multiavatar.com/4645646/${params}?apikey=OoEq2Qdshzxk17`,
                method: 'GET'
            })
        },
    },
    actions: {
        GetAvatar: (params) => (dispatch) => {
            return AvatarActionModal.apis.getAvatar(params).then(res => {
                dispatch({
                    type: 'GETAVATAR',
                    payload: res
                })
                return res
            })
        }
    },
    reducer: {
        AvatarImg: (state = AvatarActionModal.state.AvatarImg, actions) => {
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

export default AvatarActionModal
