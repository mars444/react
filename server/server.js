const express = require('express')
const bodyParser = require('body-parser')
const { v4: uuidv4 } = require('uuid')
const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())


const PORT = 3000

app.listen(PORT, () => {
    console.log(`server started....  PORT: ${PORT}`)
})

app.post('*', (req, res) => {

    console.log(req.body)
    if(!req.body) {
        return res.status(200).json({1:['пустое тело', '123243549996']})
    }

    const login = req.body.login || 'pusto'
    const pass = req.body.password || 'pusto'
    const id = uuidv4()

    console.log(id)
    res.set({
        "Access-Control-Allow-Origin": "*",
    });

    res.status(200).json({login: login, password: pass, toto: 'wefewfwf', id: id})
})