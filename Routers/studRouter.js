import express from 'express';
import {getstud,addstud} from '../Controller/studController.js';
const router=express.Router();
router.get('/get-students',getstud);
router.post('/add-students',addstud);
export default router;