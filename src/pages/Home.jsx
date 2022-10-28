import React, {useState, useEffect} from 'react'
import { connect } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {
    Button
} from 'antd'

const Home = (props) => {
    const navigate = useNavigate()


    return(
        <div>
            <h2>首页</h2>
            <Button onClick={() => navigate('/assembly/guide')}>前往Guide组件</Button>
        </div>
    )
}


const mapStateToProps = (state, props) => {

    return {
        ...props
    }
}

export default connect(mapStateToProps,{

})(Home)