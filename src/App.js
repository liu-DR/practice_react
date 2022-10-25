import React, { useState } from 'react'
import 'react-toastify/dist/ReactToastify.css'
import { Provider } from 'react-redux'
import {
  HashRouter,
} from 'react-router-dom'
import store from './modals/index'
import 'antd/dist/antd.css';
import Route from './components/Authority.tsx'

function App() {

  return (
    <HashRouter location={location}>
      <Provider store={store}>
          <Route />
      </Provider>
    </HashRouter>
  )
}

export default App;
