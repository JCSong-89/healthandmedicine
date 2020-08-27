import { Router } from 'express';
import detailAlram from '../../servies/detailAlram'

const router = Router();

router.post('/', detailAlram);

export default router;