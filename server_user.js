import http from 'http';
import fs from 'fs';
import url from 'url';
const server = http.createServer((req, res) => {
    if (req.url === '/favicon.ico') return res.end();
    const log = `Received request for ${Date.now()}: ${req.url}\n `;
    const myurl = url.parse(req.url,true);
    // console.log(myurl);
    fs.appendFile('server_user.log', log, (err, data) => {
       switch (myurl.pathname) {
        case '/':
            res.end('Hello, World!\n');
            break;
        case '/about':
            const user = myurl.query.name;
            res.end(`About Us\nUser: ${user}\n`);
            break;
        case '/contact':
            const contactUser = myurl.query.contact;
            res.end(`Contact Us\nUser: ${contactUser}\n`);
            break;
        case '/search':
            const searchQuery = myurl.query.q;
            res.end(`Search Results for: ${searchQuery}\n`);
            break;
        default:
            res.end('404 Not Found\n');
    }
    });
});
server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});