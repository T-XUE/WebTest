var http = require('http');
http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write('<h1>hell world</h1>');
    res.end('<p>Hello TX1</p>')
}).listen(3000);     //事件监听3000
console.log('HTTP server is listening at port 3000');