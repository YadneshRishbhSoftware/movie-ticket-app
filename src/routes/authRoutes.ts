// src/routes/authRoutes.ts
import { Router } from 'express';
import { register, login } from '../controllers/authController';
import { validateRegisterFields, validateLoginFields } from '../middleware/validationMiddleware';

const router = Router();

router.post('/register', validateRegisterFields, register);
router.post('/login', validateLoginFields, login);

export default router;
