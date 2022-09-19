import express from 'express';

import userController from '../controllers/userController.js';
import authenticateToken from '../middlewares/authen.js';
const router = express.Router();

    router.get("/",authenticateToken, userController.getUser);

    router.get("/:id",authenticateToken, userController.getUserbyID);

    router.post("/",authenticateToken, userController.addUser);

    router.delete("/",authenticateToken, userController.deleteUser);

    router.post("/search", userController.searchUser);
export default router;