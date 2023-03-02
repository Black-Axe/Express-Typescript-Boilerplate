import express from 'express'
import home from '@/controllers/homeController'

const router = express.Router()

router.get('/', home)

export default (app: express.Application) => app.use(router)
