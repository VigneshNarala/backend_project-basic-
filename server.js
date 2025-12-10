import http from 'http';
import fs from 'fs';
import url from 'url';
const server = http.createServer((req, res) => {
    if (req.url === '/favicon.ico') return res.end();
    const log = `Received request for ${Date.now()}: ${req.url}\n `;
    const myurl = url.parse(req.url);
    console.log(myurl);
    fs.appendFile('server.log', log, (err, data) => {
       switch (req.url) { 
        case '/':
            res.end('Hello, World!\n');
            break;
        case '/about':
            res.end('About Us\n');
            break;
        case '/contact':
            res.end('Contact Us\n');
            break;
        default:
            res.end('404 Not Found\n');
    }
    });
});
server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});