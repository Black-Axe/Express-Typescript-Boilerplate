import { connect } from 'mongoose'

const monURI = 'mongodb://localhost:27017/express-typescript-demo'

const connectDB = async () => {
  try {
    await connect(monURI)
    console.log('MongoDB Connected...')
  } catch (err) {
    console.error(err.message)
    // Exit process with failure
    process.exit(1)
  }
}

export default connectDB
