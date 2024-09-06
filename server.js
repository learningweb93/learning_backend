import express from "express";
import dotenv from 'dotenv'
const app = express()
dotenv.config()

app.get('/', (req, res) => {
    res.send('this is working fine and good')
})
const port = process.env.PORT || 5100

app.listen(port, () => {
    console.log(`server is running at port ${port}`)
})