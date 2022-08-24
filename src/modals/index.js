// import { combineReducers, applyMiddleware } from "redux";
// import { legacy_createStore as createStore} from 'redux'
// import thunk from "redux-thunk";

// import storeModal from "./storeModal";
// console.log(storeModal,'storeModal');

// const rootReducer = combineReducers({
//     ...storeModal['storeReducers'],
// })

// export default createStore(rootReducer, applyMiddleware(thunk))


import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'

const store = configureStore({
  reducer: {
    // reducer
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(thunk)
})

export default store

// // Infer the `RootState` and `AppDispatch` types from the store itself
// export type RootState = ReturnType<typeof store.getState>
// // Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
// export type AppDispatch = typeof store.dispatch
