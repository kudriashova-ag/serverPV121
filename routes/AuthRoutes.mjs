import express from "express";
const router = express.Router();
import AuthController from "../controllers/AuthController.mjs";
import auth from "../middleware/auth.mjs";

router.post('/register', AuthController.register);
router.post('/login', AuthController.login);
router.get('/user', auth, AuthController.getAuthUser);

export default router;