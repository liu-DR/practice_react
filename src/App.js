import 'react-toastify/dist/ReactToastify.css'
import { Provider } from 'react-redux'
import {
  HashRouter,
} from 'react-router-dom'
import store from './modals/reducer'
import 'antd/dist/antd.min.css';
import Route from './components/Authority.tsx'

// 引入富文本编辑器样式
import 'braft-editor/dist/index.css'


function App() {

  return (
    <HashRouter>
      <Provider store={store}>
          <Route/>
      </Provider>
    </HashRouter>
  )
}

export default App;
