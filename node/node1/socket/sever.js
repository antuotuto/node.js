const net = require('net');

var sever = net.createServer(socketConnect);

function socketConnect(socket) {
    console.log(`${socket.remoteAddress}:${socket.remotePort}  进来了`);
    
    socket.on('data', (chunk) => {
        console.log(chunk.toString());
    });
}

var port = 2080;
sever.listen(port, (err) => {
    if (err) {
        console.log('端口被占用');
        return false;
    }
    console.log(`服务器开启2080端口 ${port}端口`);
});