import express from 'express';
import menuController from '../controllers/menuController.js';
import authenticateToken from '../middlewares/authen.js';

const router = express.Router();

    router.get("/", menuController.getMenu);
    router.post("/", menuController.addMenu);

export default router;