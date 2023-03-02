import 'dotenv/config'
import bodyparser from 'body-parser'
import express from 'express'
import cors from 'cors'
import initRouter from '@/routes/router'
// import connectDB from '@/database/database'

const app = express()
const port = process.env.PORT || 3000

// Middleware
app.use(cors())
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended: true }))

// OPTIONAL Mongodb
// connectDB();
initRouter(app)

app.listen(port, () => {
  console.log(`🚀  App is running at http://localhost:${port} in``, app.get('env'), 'mode')
  console.log('  Press CTRL-C to stop\n')
})
