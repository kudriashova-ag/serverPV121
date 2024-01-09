import express from "express";
const router = express.Router();
import PostController from '../controllers/PostController.mjs'

router.get('/posts', PostController.all);

router.get('/posts/:id', PostController.getById);

router.post('/posts', PostController.add);

router.put('/posts/:id', PostController.update);

router.delete('/posts/:id', PostController.remove);

export default router;
