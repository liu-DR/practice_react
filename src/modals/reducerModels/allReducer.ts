// redux-Store的一种写法
import OpenSourceModels from './OpenSource/OpenSourceModels'
import LoginModels from './LoginModels/LoginModel'

const reducerModals = {
    OpenSourceModels: OpenSourceModels.reducer,
    // LoginModels: LoginModels.reducer
}

const allModals = {
    OpenSourceModels,
    LoginModels
}

export {
    reducerModals,
    allModals
}