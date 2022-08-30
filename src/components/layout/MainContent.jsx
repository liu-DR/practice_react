import React, { useEffect } from 'react'
import {
    Routes,
    Route,
    useNavigate,
} from 'react-router-dom'
import routes from '../../pages/routes'
import Home from '../../pages/Home'


const MainContent = () => {
  const navigate = useNavigate()

  useEffect(()=>{
    navigate('/')
  },[])

  const renderRoutes = ()=>{
    let res = []
    function deep(arr) {
      arr.map(ele=>{
          res.push( <Route key={ele.key} path={ele.path} element={ele.element}/> )
        if(ele.children) deep(ele.children)
      })
    }

    // 使用上面那个定义的递归方法
    routes.map(ele=>{
      if(ele.children){
        deep(ele.children)
      }else{
        res.push( <Route key={ele.key} path={ele.path} element={ele.element}/> )
      }
    })
    return res
  }


  return (
      <div className='layout_mainContent'>
        <Routes>
          <Route exact path='/' element={<Home />}/>
          {renderRoutes(routes)}
        </Routes>
      </div>
  )
}

export default MainContent

