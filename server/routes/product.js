import express from 'express';

import productController from '../controllers/productController.js';
import authenticateToken from '../middlewares/authen.js';
const router = express.Router();

    router.post("/pagination", productController.getProduct);
    router.post("/", productController.addProduct);
    router.get("/", productController.getProduct);

export default router;