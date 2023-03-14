import axios from 'axios'
import qs from 'qs'

let baseURL = 'http://localhost:8085'

// 创建实例
const instance = axios.create({
    baseURL: baseURL,
    timeout: 15000,  // 毫秒
})

// 请求拦截器
instance.interceptors.request.use(config=>{
    //统一设置请求头部信息
    config.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8;application/json'
    //判断请求方式是post还是get
    if (config.method === 'post') {
        config.data = qs.parse(config.data)
    }
    if (config.method === 'get') {
        config.params = { ...config.params }
        config.params = qs.parse(qs.stringify(config.params))
    }
    //数据根据请求方式进行拼接发送给后台
    return config
}, error=>{
    return Promise.reject(error)
})

// 响应拦截器
instance.interceptors.response.use(response=>{
    let res = null
    if(response && response.data){
        res = response.data
    }
    return res
}, error=>{
    return Promise.reject(error)
})

export default instance