import express from 'express';
import router from './Routers/studRouter.js';
const app = express();
app.use(express.json());
app.use('/',router)
app.listen(7008, ()=> {
    console.log("Server is running on http://localhost:7008");
});