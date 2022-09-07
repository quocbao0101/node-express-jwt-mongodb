import express from 'express';
import menuController from '../controllers/menuController.js';
import categoryController from '../controllers/categoryController.js';
import authenticateToken from '../middlewares/authen.js';

const router = express.Router();

    router.get("/", categoryController.getCategory);
    router.post("/", categoryController.addCategory);

export default router;