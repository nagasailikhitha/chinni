import express from 'express';
import {register}  from '../../controllers/auth/authcontroller.js'
const router = express.Router();

router.post('/register', register);
export default router;  