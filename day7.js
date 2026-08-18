//create your own server using http module 
//const https=require('http');
import http for "http";
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('Hello World');
    }
    res.end();
});
server.listen(3000);