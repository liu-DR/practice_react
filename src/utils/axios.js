import axios from 'axios'
import qs from 'qs'
import proxy from './proxy'
import {
    message
} from 'antd'

// 创建实例
const instance = axios.create({
    // baseURL: 'http://localhost:8085',
    timeout: 15000,  // 毫秒
})

// 请求拦截器
instance.interceptors.request.use(config=>{
    console.log(config,'config');
    // 暂时用不上
    // const { token } = window.localStorage.getItem('formation') || window.sessionStorage.getItem('formation');

    // //在每次的请求中添加token
    // config.data = Object.assign({}, config.data, {
    //     token: token,
    // })

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
    console.log(response,'response');
    if(response.status) {
        switch (response.status) {
            case 200:
                return response.data
            case 401: 
                // 未登录
                message.error('请登录账号')
                window.location.href = `${window.location.host}/#/login`
                break;
            case 403:
                // token过期处理
                break;
            default:
                message.error(response.data.msg)
                return response.data
        }
    }
}, error=>{
    return Promise.reject(error)
})

// export default instance

export default ({url, method = 'GET', params = {}}) => {

    let uri = ''
    const environment = process.env.NODE_ENV || 'development';
    const proxys = proxy[environment]

    let baseURL = window.location.host || 'http://localhost:8085'

    // 暂时简单区分是否是全路径接口地址
    if(url.indexOf('http') !== -1) {
        uri = url
    } else {
        // 用于匹配接口路径，设置baseURL代理地址
        const pattern = /(\/\w+)(.*)/;
        const match = pattern.exec(url)

        if(match) {
            const group1 = match[1];
            const group2 = match[2];

            switch (group1) {
                case '/cloud':
                    baseURL = proxys['/cloud']
                    break;
                case '/api':
                default:
                    break;
            }
            uri = group2
        }
    }

    return instance.request({
        url: uri,
        method,
        baseURL,
        params
    })
}