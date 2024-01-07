import express from "express";
import morgan from "morgan";
import authRoutes from "./routes/auth.routes.js";
import cookieParser from "cookie-parser";
import taskRoutes from '../src/routes/task.routes.js'
import cors from 'cors'

const app = express()

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'https://task-manager-alpha-brown.vercel.app');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.get('/', (req, res) => {
    res.json('Hola mundo')
})

app.use(cors({
    origin: '*'
}))
app.use(morgan('dev'))
app.use(express.json())
app.use(cookieParser())

app.use('/api', authRoutes)
app.use('/api', taskRoutes)

export default app;