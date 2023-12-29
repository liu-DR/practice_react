const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    // 示例代理文件1
    app.use(
        '/cloud',
            createProxyMiddleware({
                target: 'http://localhost:3000', // 设置实际的API地址
                changeOrigin: true,
                pathRewrite: { '^/cloud': '/' }
            })
    );
  
    // 示例代理文件2
    app.use(
        '/api',
            createProxyMiddleware({
                target: 'http://localhost:8085', // 设置实际的API地址
                changeOrigin: true,
                pathRewrite: { '^/api': '' }
            })
    );
};