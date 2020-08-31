import { Router } from 'express';
import allAlrams from '../../servies/allAlrams';
import changeFlagged from '../../servies/changeFlagged';

const router = Router();

router.get('/', allAlrams);
router.post('/', changeFlagged);

export default router;