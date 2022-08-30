const STORE_REDUCER = 'STORE_REDUCER'

const storeModal = function() {
    return {
        state: {
            a: ''
        },
        selectors: () => {
            const { a } = storeModal.storeReducers
            console.log(a,'a');
            const selectors = {
                getData: () => a
            }
            return selectors
        },
        api: {
            getTest: (params) => {
                console.log('我是api接口，我被触发啦');
                return axios({
                    url: '/api/v2/user/addUser',
                    method: 'post',
                    params
                })
            }
        },
        storeActions: {
            aaa: (params) => (dispatch)  => {
                // storeModal.api.getTest(params)
                storeModal.api.getTest(params).then(res => {
                    dispatch({
                        type: STORE_REDUCER,
                        payload: res
                    })
                })
            } 
        },
        storeReducers: {
            a: (state = storeModal.state.a, action) => {
                const { type, payload } = action
                switch (type) {
                    case STORE_REDUCER:
                        console.log('这是reducer,这里是否会被触发呢？');
                        return state + 1
                        break;
                    default:
                        break;
                }
                return state
            }
        },
    }
}()

export default storeModal