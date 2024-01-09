import { config } from 'dotenv'
import crypto from 'crypto'

config()

export const MONGODB_URI = process.env.MONGODB_URI
export const TOKEN_SECRET = crypto.randomBytes(32).toString('hex')
console.log(TOKEN_SECRET)