import express from 'express';

import validateBody from '../../../middlewares/validBody.js';
import emailSequenceSchemaValidator from '../../../validators/emailSeq.js';
import authenticateUserByToken from '../../../middlewares/authUserByToken.js';
import { createEmailSequence, deleteEmailSequence, getAllEmailSequence, getEmailSequence, updateEmailSequence } from '../../controllers/emailsequence/server.js'


const router = express.Router();

router.route('/').get(authenticateUserByToken, getAllEmailSequence)

router.route('/:id').get(authenticateUserByToken, getEmailSequence)

router.route('/').post(authenticateUserByToken, validateBody(emailSequenceSchemaValidator), createEmailSequence);

router.route('/:id').delete(authenticateUserByToken, deleteEmailSequence);

router.route('/:id').put(authenticateUserByToken, updateEmailSequence)

export default router;