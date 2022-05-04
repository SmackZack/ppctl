import express from "express";
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv';
const app = express()

dotenv.config()

app.get('/', (req, res) => {
    res.send('server is tunnign')
})

app.post('/login', (req, res) => {
    const { email, password } = req.body()

    const token = jwt.sign('1234', process.env.JWT_SECRET)
    if (email && password) {
        res.send({ token })
    }
})

app.post('/getProfile', (req, res) => {
    const token = req.headers()
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    if (decoded = '1234') {
        res.send({
            name: 'test'
        })
    } else {
        res.send({
            message: 'error'
        })
    }

})

app.listen(3000, () => { console.log('hello') })