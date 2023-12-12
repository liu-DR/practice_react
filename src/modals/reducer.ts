import { combineReducers, legacy_createStore as createStore } from 'redux'
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";

import OpenSourceModels from './OpenSource/OpenSourceModels'

const reducerStore = combineReducers({
    ...OpenSourceModels.reducer
})

const store = createStore(reducerStore, applyMiddleware(thunk))

export default store