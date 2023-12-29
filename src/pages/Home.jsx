import React, {useState, useEffect} from 'react'
import { connect } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {
    Button
} from 'antd'
import { openSourceModels } from '@/modals'

const Home = (props) => {
    const navigate = useNavigate()

    const onClick = async () => {
        const { GetCloudMusic } = props
        const data = await GetCloudMusic({
            name: '张三',
            password: '123456'
        })
        console.log(data,'data')
    }

    return(
        <div>
            <h2>首页</h2>
            <Button onClick={() => navigate('/assembly/guide')}>前往Guide组件</Button>
            <Button onClick={onClick}>点击获取热门歌单分类</Button>

            {/* <AgGridfEditTable /> */}
        </div>
    )
}


const mapStateToProps = (state, props) => {

    return {

    }
}

const {
    GetCloudMusic
} = openSourceModels.actions


export default connect(mapStateToProps,{
    GetCloudMusic
})(Home)