//create your own server using http module 
//const https=require('http');
import http from "http";
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('hello world');
        return;
    }
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
});
server.listen(8000, () => {
    console.log('Server is running on port 8000');
});