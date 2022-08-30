import './App.css';
import 'react-toastify/dist/ReactToastify.css'
import { Provider } from 'react-redux'
import {
  HashRouter as Router
} from 'react-router-dom'
import store from '../src/modals/index'
import Layout from '../src/components/layout/Layout'
import 'antd/dist/antd.css';

function App() {

  return (
    <Router>
      <Provider store={store}>
        <Layout/>
      </Provider>
    </Router>
  )
}

export default App;
