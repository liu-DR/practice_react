const path = require('path')

module.exports = {
    // 入口文件
    appMain: 'main',
    // 端口号
    port: 8050,
    // host: 'localhost',
    // 绝对路径@
    alias: {
        "@": path.resolve(__dirname, "src"),
    },
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    // 代理配置
    proxy: {},
    // 自定义loader规则
    rules: [],
    plugins: [],
}