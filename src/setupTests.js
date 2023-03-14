const proxy = require('http-proxy-middleware');
​
module.exports = function (app) {
    app.use(
        proxy('/cloud', {
            target: 'http://localhost:3000',  
            changeOrigin: true,      // 默认值是false
            pathRewrite: { '^/cloud': '' }  
        }),
        proxy('/api', {
            target: 'http://localhost:8085',
            changeOrigin: true,      // 默认值是false
            pathRewrite: { '^/api': '' }
        }),
    )
}