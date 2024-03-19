import express from 'express'
import {home} from '@/controllers/home-controller'

const router = express.Router()

router.get('/', home)

export default (app: express.Application) => app.use(router)
