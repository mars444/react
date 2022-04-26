const express = require('express')
const bodyParser = require('body-parser')
const { v4: uuidv4 } = require('uuid')
const app = express()

// const marksAvto =[
//     { id: 1, marka: 'BMV' },
//     { id: 2, marka: 'Toyota' },
//     { id: 3, marka: 'Lada' },
//     { id: 4, marka: 'Nissan' },
//     { id: 5, marka: 'Mersedes' },
//     { id: 6, marka: 'Volvo' }
// ]


const dict = [
    {
        id:1,
        marka: 'BMV',
        model: 'X1',
        description: {
            color: 'red',
            weight: '1500 kg',
            power: '600 hp'

        }
    },

    {
        id:2,
        marka: 'Toyota',
        model: 'X2',
        description: {
            color: 'red',
            weight: '1500 kg',
            power: '600 hp'

        }
    },
    {
        id:3,
        marka: 'BMV',
        model: 'X5M',
        description: {
            color: 'red',
            weight: '1500 kg',
            power: '600 hp'

        }
    },
    {
        id:4,
        marka: 'Lada',
        model: 'Xda1',
        description: {
            color: 'red',
            weight: '1500 kg',
            power: '600 hp'

        }
    },
    {
        id:5,
        marka: 'BMV',
        model: '500',
        description: {
            color: 'red',
            weight: '1500 kg',
            power: '600 hp'

        }
    },  {
        id:6,
        marka: 'Nissan',
        model: 'X1',
        description: {
            color: 'red',
            weight: '1500 kg',
            power: '600 hp'

        }
    },  {
        id:7,
        marka: 'Mersedes',
        model: 'X1',
        description: {
            color: 'red',
            weight: '1500 kg',
            power: '600 hp'

        }
    },
    {
        id:8,
        marka: 'Volvo',
        model: 'X1',
        description: {
            color: 'red',
            weight: '1500 kg',
            power: '600 hp'

        }
    },


]





//app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

let cors = require("cors");
app.use(cors());

const PORT = 3001

app.listen(PORT, () => {
    console.log(`server started....  PORT: ${PORT}`)
})

app.post('/auth', (req, res) => {

    console.log(req.body)
    if(!req.body) {
        return res.status(200).json({1:['пустое тело', '123243549996']})
    }

    const login = req.body.login || 'pusto'
    const pass = req.body.password || 'pusto'
    const id = uuidv4()

    res.status(200).json({login: login, password: pass, toto: 'wefewfwf', id: id})
})




app.post('/registration', (req, res) => {

        console.log(req.body)
        if(!req.body) {
            return res.status(200).json({1:['пустое тело', '123243549996']})
        }

        const nick = req.body.nickName


        res.status(200).json({
            nickName: nick,
            password: 'sucssses registarttion',

        })

})


app.get('/dict', (req, res) => {



    const dictMarks = dict.map(item => item.marka)

    const noRepeatDict = [...new Set(dictMarks)]


    const arrToSend = []

    for (let i = 0; i < noRepeatDict.length; i++) {
        const dictFinal = {}
        dictFinal.id = i+1
        dictFinal.marka = noRepeatDict[i]
        arrToSend.push(dictFinal)
    }

    console.log('Server send:  ', arrToSend)

    res.status(200).json(arrToSend)

})


app.get('/dict/:marka', (req, res) => {

    function filterDict(value) {
        if (value.marka == req.params.marka) {
            return value
        }

    }

    const filteredDict = dict.filter(filterDict);

    console.log(filteredDict)

    res.status(200).json(filteredDict)

})




//console.log(Object.keys(dict["BMV"]))

