import { combineReducers } from 'redux'
import { reducerModals, allModals} from './reducerModels/allReducer'

const reduxReducers = combineReducers({
    ...reducerModals
})

const storeModals = {
    ...allModals
}

export {
    reduxReducers,
    storeModals
}