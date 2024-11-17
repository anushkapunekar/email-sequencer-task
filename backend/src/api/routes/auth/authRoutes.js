import express from 'express';

import { registerUser, loginUser } from "../../controllers/auth/authController.js";
import validateBody from '../../../middlewares/validBody.js';
import userSchemaValidator from '../../../validators/userSchema.js';


const router = express.Router();

// for new user registration
router.route('/register').post(validateBody(userSchemaValidator), registerUser);

//  for user login
router.route('/login').post(validateBody(userSchemaValidator), loginUser)

export default router;