import { Router } from 'express';
import { GetExchangeRateController } from '../controllers/rateController';
const router = Router();
router.get('/rates', GetExchangeRateController);
export default router;
