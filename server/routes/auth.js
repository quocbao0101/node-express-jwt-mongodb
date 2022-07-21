import express from 'express';
import authController from '../controllers/authController.js';

const router = express.Router();
router.post("/signin", authController.login);

router.post("/signup", authController.register);

export default router;