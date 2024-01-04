import { combineReducers, legacy_createStore as createStore } from 'redux'
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { isEmpty } from 'lodash'

import _OpenSourceModels from './openSourceModels/OpenSourceModels'
import _UserInfoModels from './uerInfoModels/LoginModel'

const allReducer = {};
const allModels = {};
const wrapModel = (model, alias) => {
    const selectors: any = {};
    const actions: any = {};
    const apis: any = [];

    const modelWrapper = {
        selectors,
        apis,   
        actions
    };

    modelWrapper.selectors = model.selectors;
    modelWrapper.apis = model.apis;

    Object.keys(model.actions).forEach(key => {
        actions[key] = function () {
            return model.actions[key](...arguments)
        }
    });
    
    if(typeof model.reducer === 'function') {
        allReducer[model.name] = model.reducers;
    } else if(!isEmpty(model.reducer)) {
        allReducer[model.name] = combineReducers(model.reducer)
    };

    allModels[alias] = model;

    return modelWrapper;
}

export const OpenSourceModels = wrapModel(_OpenSourceModels, 'OpenSourceModels');
export const UserInfoModels = wrapModel(_UserInfoModels, 'UserInfoModels');

const reducerStore = combineReducers(allReducer);

export const store = createStore(reducerStore, applyMiddleware(thunk));
