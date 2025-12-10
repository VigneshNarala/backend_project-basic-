import express from 'express';
const app = express();
app.get('/', (req, res) => {
    res.send('Hello, World!\n');
});
app.get('/about', (req, res) => {
    const user = req.query.name;
    res.send(`About Us\nUser: ${user}\n`);
});
app.get('/contact', (req, res) => {
    const contactUser = req.query.contact;
    res.send(`Contact Us\nUser: ${contactUser}\n`);
});
app.get('/search', (req, res) => {
    const searchQuery = req.query.q;
    res.send(`Search Results for: ${searchQuery}\n`);
});
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});