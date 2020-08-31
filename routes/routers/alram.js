import { Router } from 'express';
import updateAlram from '../../servies/updateAlram';
import detailAlram from '../../servies/detailAlram'

const router = Router();

router.get('/:id', detailAlram);
router.post('/', updateAlram)

export default router;