import express from 'express';
import { signin, signup } from '../controllers/user.js';

const router = express.Router();

// Signin to account.
router.post('/signin', signin);

// Signup an account.
router.post('/signup', signup);


export default router;