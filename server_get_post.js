import http from 'http';
import fs from 'fs';
import url from 'url';
const server = http.createServer((req, res) => {
    if (req.url === '/favicon.ico') return res.end();
    const log = `Received request for ${req.method}: ${Date.now()}: ${req.url}\n `;
    const myurl = url.parse(req.url,true);
    // console.log(myurl);
    fs.appendFile('server_get_post.log', log, (err, data) => {
       switch (myurl.pathname) {
        case '/':
            if (req.method === 'GET') { 
            res.end('Hello, World!\n');
            }
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
        case '/signup':
            if (req.method === 'GET') {
                res.end('Signup Page\n');
            } else if (req.method === 'POST') {
                //db qurey to add user
                res.end('User Registered\n');
            }
        default:
            res.end('404 Not Found\n');
    }
    });
});
server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});