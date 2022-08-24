import axios from 'axios'

let baseURL = 'http://localhost:3000'

// 创建实例
let instance = axios.create({
    baseURL: baseURL,
    timeout: 15000  // 毫秒
})

// 请求拦截器
instance.interceptors.request.use(config=>{
    //统一设置请求头部信息
    config.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
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
instance.interceptors.reponse.use(response=>{
    const res = response.data
    if (res.code !== 200) {  //错误提示
      return Promise.reject(res.msg || 'Error')
    } else {  //成功返回数据
      return res
    }
}, error=>{
    return Promise.reject(error)
})

export default instance