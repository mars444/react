const express = require('express')
const bodyParser = require('body-parser')
const { v4: uuidv4 } = require('uuid')
const app = express()

const marksAvto =[
    { id: 1, marka: 'BMV' },
    { id: 2, marka: 'Toyota' },
    { id: 3, marka: 'Lada' },
    { id: 4, marka: 'Nissan' },
    { id: 5, marka: 'Mersedes' },

]


const dict = [
    {
        id: 1,
        marka_id: 1,
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
        marka_id: 1,
        model: 'X5M',
        marka: 'BMV',
        description: {
            color: 'yellow',
            weight: '1341500 kg',
            power: '604q0 hp'

        }
    },

    {
        id:3,
        marka_id: 1,
        marka: 'BMV',
        model: '500',
        description: {
            color: 'red',
            weight: '12 kg',
            power: '6004 hp'

        }
    },

    {
        id:1,
        marka_id: 2,
        marka: 'Toyota',
        model: 'Camry',
        description: {
            color: 'red',
            weight: '1500 kg',
            power: '600 hp'

        }
    },

    {
        id:2,
        marka_id: 2,
        marka: 'Toyota',
        model: 'Corolla',
        description: {
            color: 'red',
            weight: '1500 kg',
            power: '600 hp'

        }
    },

    {
        id:1,
        marka_id: 3,
        marka: 'Lada',
        model: 'Largus',
        description: {
            color: 'black',
            weight: '1800 kg',
            power: '100 hp'

        }
    },

    {
        id:1,
        marka_id: 4,
        marka: 'Nissan',
        model: 'Almera',
        description: {
            color: 'red',
            weight: '45 kg',
            power: '345 hp'

        }
    },

    {
        id:2,
        marka_id: 4,
        marka: 'Nissan',
        model: 'GTR',
        description: {
            color: 'red',
            weight: '3454 kg',
            power: '12 hp'

        }
    },

    {
        id:1,
        marka_id: 5,
        model: 'a200',
        description: {
            color: 'red',
            weight: '23 kg',
            power: '32 hp'

        }
    },
    {
        id:1,
        marka_id: 6,
        model: 'x90',
        description: {
            color: 'red',
            weight: '1456 kg',
            power: '120 hp'

        }
    },


]





//app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

let cors = require("cors");
app.use(cors());

const PORT = 3002

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



    // const dictMarks = dict.map(item => item.marka)
    //
    // const noRepeatDict = [...new Set(dictMarks)]
    //
    //
    // const arrToSend = []
    //
    // for (let i = 0; i < noRepeatDict.length; i++) {
    //     const dictFinal = {}
    //     dictFinal.id = i+1
    //     dictFinal.marka = noRepeatDict[i]
    //     arrToSend.push(dictFinal)
    // }

    console.log(':  ', marksAvto)

    res.status(200).json(marksAvto)

})


app.get('/dict/:id', (req, res) => {

    function filterDict(value) {
        if (value.marka_id == req.params.id) {
            return value
        }

    }

    const filteredDict = dict.filter(filterDict);

    console.log(filteredDict)

    const dictId = filteredDict.map(item => item.id)
    console.log((dictId))

    const dictModels = filteredDict.map(item => item.model)

    const arrToSend = []

    for (let i = 0; i < filteredDict.length; i++) {
        const dictFinal = {}
        dictFinal.id = dictId[i]
        dictFinal.model = dictModels[i]
        arrToSend.push(dictFinal)
    }

    console.log('ServerSend  ', arrToSend)

    res.status(200).json(arrToSend)

})


app.get('/dict/:id/:model', (req, res) => {

    function filterDict(value) {
        if (value.marka_id == req.params.id && value.model == req.params.model) {

            return value
        }

    }

    const filteredDict = dict.filter(filterDict);
    console.log(...filteredDict)





    res.status(200).json(...filteredDict)

})




//console.log(Object.keys(dict["BMV"]))

