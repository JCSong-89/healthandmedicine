import { Router } from 'express';
import addAlram from '../../servies/addAlram'

const router = Router();

router.post('/', addAlram);

export default router;