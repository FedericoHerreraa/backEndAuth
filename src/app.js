import express from "express";
import morgan from "morgan";
import authRoutes from "./routes/auth.routes.js";
import cookieParser from "cookie-parser";
import taskRoutes from '../src/routes/task.routes.js'
import cors from 'cors'

const app = express()

app.get('/', (req, res) => {
    res.json('Hola mundo')
})

app.use(cors({
    origin: 'https://frontendtaskmanager.vercel.app',
    credentials: true
}))
app.use(cookieParser())
app.use(morgan('dev'))
app.use(express.json())


app.use('/api', authRoutes)
app.use('/api', taskRoutes)

export default app;