import express from 'express';

import userController from '../controllers/userController.js';
const router = express.Router();

    router.get("/", userController.getUser);

    router.get("/:id", userController.getUserbyID);

    router.post("/", userController.addUser);

    router.delete("/", userController.deleteUser);

export default router;