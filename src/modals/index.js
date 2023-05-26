import { applyMiddleware } from "redux";
import { legacy_createStore as createStore} from 'redux'
import thunk from "redux-thunk";
import { reduxReducers, storeModals } from './store'

export default createStore(reduxReducers, applyMiddleware(thunk))

export const Modals = storeModals