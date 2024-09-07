import express from "express";
import userRouter from './routes/userRouter.js'
import cookieParser from "cookie-parser";
import cors from 'cors'
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true, limit: "10kb" }))
app.use(cors(
    {
        origin: process.env.CORS_ORIGIN,
        credentials: true
    }
))
app.use(express.static("public"))
app.use(cookieParser())

// Routes
app.use('/api/v1/users', userRouter)


export { app }