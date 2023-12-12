/**
 * 使用node搭建本地服务
 * @http
 * @listen  设置访问端口
 */

const http = require('http');

http.createServer((request, response) => {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end('Hello World\n');
}).listen(8081)
console.log('服务已运行在  http://127.0.0.1:8081/');