import express from 'express';
import {home} from '../controllers/homeController';

const router = express.Router();

router.get('/', home);

export default function initRouter(app: express.Application) {
    app.use(router);
}

