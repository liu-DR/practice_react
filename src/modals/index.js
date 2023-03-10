import { combineReducers, applyMiddleware } from "redux";
import { legacy_createStore as createStore} from 'redux'
import thunk from "redux-thunk";

import OpenSourceModels from './reducerModels/OpenSource/OpenSourceModels'
import LoginModels from './reducerModels/LoginModels/LoginModel'

const rootReducer = combineReducers({
  ...OpenSourceModels.reducer,
  ...LoginModels.reducers
})

export default createStore(rootReducer, applyMiddleware(thunk))

export const Modals = {
  OpenSourceModels,
  LoginModels
}

// import { configureStore } from '@reduxjs/toolkit'
// import thunk from 'redux-thunk'
// import AvatarActionModal from './actionApi/avatarActions'

// const store = configureStore({
//   reducer: {
//     ...AvatarActionModal.reducer,
//   },
//   middleware: getDefaultMiddleware => getDefaultMiddleware().concat(thunk)
// })

// export default store

// // Infer the `RootState` and `AppDispatch` types from the store itself
// export type RootState = ReturnType<typeof store.getState>
// // Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
// export type AppDispatch = typeof store.dispatch
