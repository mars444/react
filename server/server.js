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
        model: '123',
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

const marksAvtoTableAdaptive =[
    { id: 1, marka: 'BMV', image: 'avto.png' },
    { id: 2, marka: 'Toyota', image: 'avto.png' },
    { id: 3, marka: 'Lada', image: 'avto.png' },
    { id: 4, marka: 'Nissan', image: 'avto.png' },
    { id: 5, marka: 'Mersedes', image: 'avto.png' },
    { id: 1, marka: 'BMV', image: 'avto.png' },
    { id: 2, marka: 'Toyota', image: 'avto.png' },
    { id: 3, marka: 'Lada', image: 'avto.png' },
    { id: 4, marka: 'Nissan', image: 'avto.png' },
    { id: 1, marka: 'BMV', image: 'avto.png' },
    { id: 2, marka: 'Toyota', image: 'avto.png' },
    { id: 3, marka: 'Lada', image: 'avto.png' },
    { id: 4, marka: 'Nissan', image: 'avto.png' },
    { id: 5, marka: 'Mersedes', image: 'avto.png' },
    { id: 1, marka: 'BMV', image: 'avto.png' },
    { id: 2, marka: 'Toyota', image: 'avto.png' },
    { id: 3, marka: 'Lada', image: 'avto.png' },
    { id: 4, marka: 'Nissan', image: 'avto.png' },
    { id: 1, marka: 'BMV', image: 'avto.png' },
    { id: 2, marka: 'Toyota', image: 'avto.png' },
    { id: 3, marka: 'Lada', image: 'avto.png' },
    { id: 4, marka: 'Nissan', image: 'avto.png' },
    { id: 5, marka: 'Mersedes', image: 'avto.png' },
    { id: 1, marka: 'BMV', image: 'avto.png' },
    { id: 2, marka: 'Toyota', image: 'avto.png' },
    { id: 3, marka: 'Lada', image: 'avto.png' },
    { id: 4, marka: 'Nissan', image: 'avto.png' },
    { id: 1, marka: 'BMV', image: 'avto.png' },
    { id: 2, marka: 'Toyota', image: 'avto.png' },
    { id: 3, marka: 'Lada', image: 'avto.png' },
    { id: 4, marka: 'Nissan', image: 'avto.png' },
    { id: 5, marka: 'Mersedes', image: 'avto.png' },
    { id: 1, marka: 'BMV', image: 'avto.png' },
    { id: 2, marka: 'Toyota', image: 'avto.png' },
    { id: 3, marka: 'Lada', image: 'avto.png' },
    { id: 4, marka: 'Nissan', image: 'avto.png' },
    { id: 1, marka: 'BMV', image: 'avto.png' },
    { id: 2, marka: 'Toyota', image: 'avto.png' },
    { id: 3, marka: 'Lada', image: 'avto.png' },
    { id: 4, marka: 'Nissan', image: 'avto.png' },
    { id: 5, marka: 'Mersedes', image: 'avto.png' },
    { id: 1, marka: 'BMV', image: 'avto.png' },
    { id: 2, marka: 'Toyota', image: 'avto.png' },
    { id: 3, marka: 'Lada', image: 'avto.png' },
    { id: 4, marka: 'Nissan', image: 'avto.png' },
    { id: 1, marka: 'BMV', image: 'avto.png' },
    { id: 2, marka: 'Toyota', image: 'avto.png' },
    { id: 3, marka: 'Lada', image: 'avto.png' },
    { id: 4, marka: 'Nissan', image: 'avto.png' },
    { id: 5, marka: 'Mersedes', image: 'avto.png' },
    { id: 1, marka: 'BMV', image: 'avto.png' },
    { id: 2, marka: 'Toyota', image: 'avto.png' },
    { id: 3, marka: 'Lada', image: 'avto.png' },
    { id: 4, marka: 'Nissan', image: 'avto.png' },
    { id: 1, marka: 'BMV', image: 'avto.png' },
    { id: 2, marka: 'Toyota', image: 'avto.png' },
    { id: 3, marka: 'Lada', image: 'avto.png' },
    { id: 4, marka: 'Nissan', image: 'avto.png' },
    { id: 5, marka: 'Mersedes', image: 'avto.png' },
    { id: 1, marka: 'BMV', image: 'avto.png' },
    { id: 2, marka: 'Toyota', image: 'avto.png' },
    { id: 3, marka: 'Lada', image: 'avto.png' },
    { id: 4, marka: 'Nissan', image: 'avto.png' },
    { id: 1, marka: 'BMV', image: 'avto.png' },
    { id: 2, marka: 'Toyota', image: 'avto.png' },
    { id: 3, marka: 'Lada', image: 'avto.png' },
    { id: 4, marka: 'Nissan', image: 'avto.png' },
    { id: 5, marka: 'Mersedes', image: 'avto.png' },
    { id: 1, marka: 'BMV', image: 'avto.png' },
    { id: 2, marka: 'Toyota', image: 'avto.png' },
    { id: 3, marka: 'Lada', image: 'avto.png' },
    { id: 4, marka: 'Nissan', image: 'avto.png' },
    { id: 1, marka: 'BMV', image: 'avto.png' },
    { id: 2, marka: 'Toyota', image: 'avto.png' },
    { id: 3, marka: 'Lada', image: 'avto.png' },
    { id: 4, marka: 'Nissan', image: 'avto.png' },
    { id: 5, marka: 'Mersedes', image: 'avto.png' },
    { id: 1, marka: 'BMV', image: 'avto.png' },
    { id: 2, marka: 'Toyota', image: 'avto.png' },
    { id: 3, marka: 'Lada', image: 'avto.png' },
    { id: 4, marka: 'Nissan', image: 'avto.png' },
    { id: 1, marka: 'BMV', image: 'avto.png' },
    { id: 2, marka: 'Toyota', image: 'avto.png' },
    { id: 3, marka: 'Lada', image: 'avto.png' },
    { id: 4, marka: 'Nissan', image: 'avto.png' },
    { id: 5, marka: 'Mersedes', image: 'avto.png' },
    { id: 1, marka: 'BMV', image: 'avto.png' },
    { id: 2, marka: 'Toyota', image: 'avto.png' },
    { id: 3, marka: 'Lada', image: 'avto.png' },
    { id: 4, marka: 'Nissan', image: 'avto.png' },
    { id: 1, marka: 'BMV', image: 'avto.png' },
    { id: 2, marka: 'Toyota', image: 'avto.png' },
    { id: 3, marka: 'Lada', image: 'avto.png' },
    { id: 4, marka: 'Nissan', image: 'avto.png' },
    { id: 5, marka: 'Mersedes', image: 'avto.png' },
    { id: 1, marka: 'BMV', image: 'avto.png' },
    { id: 2, marka: 'Toyota', image: 'avto.png' },
    { id: 3, marka: 'Lada', image: 'avto.png' },
    { id: 4, marka: 'Nissan', image: 'avto.png' },
    { id: 1, marka: 'BMV', image: 'avto.png' },
    { id: 2, marka: 'Toyota', image: 'avto.png' },
    { id: 3, marka: 'Lada', image: 'avto.png' },
    { id: 4, marka: 'Nissan', image: 'avto.png' },
    { id: 5, marka: 'Mersedes', image: 'avto.png' },
    { id: 1, marka: 'BMV', image: 'avto.png' },
    { id: 2, marka: 'Toyota', image: 'avto.png' },
    { id: 3, marka: 'Lada', image: 'avto.png' },
    { id: 4, marka: 'Nissan', image: 'avto.png' },
    { id: 1, marka: 'BMV', image: 'avto.png' },
    { id: 2, marka: 'Toyota', image: 'avto.png' },
    { id: 3, marka: 'Lada', image: 'avto.png' },
    { id: 4, marka: 'Nissan', image: 'avto.png' },
    { id: 5, marka: 'Mersedes', image: 'avto.png' },
    { id: 1, marka: 'BMV', image: 'avto.png' },
    { id: 2, marka: 'Toyota', image: 'avto.png' },
    { id: 3, marka: 'Lada', image: 'avto.png' },
    { id: 4, marka: 'Nissan', image: 'avto.png' },
    { id: 1, marka: 'BMV', image: 'avto.png' },
    { id: 2, marka: 'Toyota', image: 'avto.png' },
    { id: 3, marka: 'Lada', image: 'avto.png' },
    { id: 4, marka: 'Nissan', image: 'avto.png' },
    { id: 5, marka: 'Mersedes', image: 'avto.png' },
    { id: 1, marka: 'BMV', image: 'avto.png' },
    { id: 2, marka: 'Toyota', image: 'avto.png' },
    { id: 3, marka: 'Lada', image: 'avto.png' },
    { id: 4, marka: 'Nissan', image: 'avto.png' },
    { id: 1, marka: 'BMV', image: 'avto.png' },
    { id: 2, marka: 'Toyota', image: 'avto.png' },
    { id: 3, marka: 'Lada', image: 'avto.png' },
    { id: 4, marka: 'Nissan', image: 'avto.png' },
    { id: 5, marka: 'Mersedes', image: 'avto.png' },
    { id: 1, marka: 'BMV', image: 'avto.png' },
    { id: 2, marka: 'Toyota', image: 'avto.png' },
    { id: 3, marka: 'Lada', image: 'avto.png' },
    { id: 4, marka: 'Nissan', image: 'avto.png' },
    { id: 1, marka: 'BMV', image: 'avto.png' },
    { id: 2, marka: 'Toyota', image: 'avto.png' },
    { id: 3, marka: 'Lada', image: 'avto.png' },
    { id: 4, marka: 'Nissan', image: 'avto.png' },
    { id: 5, marka: 'Mersedes', image: 'avto.png' },
    { id: 1, marka: 'BMV', image: 'avto.png' },
    { id: 2, marka: 'Toyota', image: 'avto.png' },
    { id: 3, marka: 'Lada', image: 'avto.png' },
    { id: 4, marka: 'Nissan', image: 'avto.png' },
    { id: 1, marka: 'BMV', image: 'avto.png' },
    { id: 2, marka: 'Toyota', image: 'avto.png' },
    { id: 3, marka: 'Lada', image: 'avto.png' },
    { id: 4, marka: 'Nissan', image: 'avto.png' },
    { id: 5, marka: 'Mersedes', image: 'avto.png' },
    { id: 1, marka: 'BMV', image: 'avto.png' },
    { id: 2, marka: 'Toyota', image: 'avto.png' },
    { id: 3, marka: 'Lada', image: 'avto.png' },
    { id: 4, marka: 'Nissan', image: 'avto.png' },
    { id: 1, marka: 'BMV', image: 'avto.png' },
    { id: 2, marka: 'Toyota', image: 'avto.png' },
    { id: 3, marka: 'Lada', image: 'avto.png' },
    { id: 4, marka: 'Nissan', image: 'avto.png' },
    { id: 5, marka: 'Mersedes', image: 'avto.png' },
    { id: 1, marka: 'BMV', image: 'avto.png' },
    { id: 2, marka: 'Toyota', image: 'avto.png' },
    { id: 3, marka: 'Lada', image: 'avto.png' },
    { id: 4, marka: 'Nissan', image: 'avto.png' },
    { id: 1, marka: 'BMV', image: 'avto.png' },
    { id: 2, marka: 'Toyota', image: 'avto.png' },
    { id: 3, marka: 'Lada', image: 'avto.png' },
    { id: 4, marka: 'Nissan', image: 'avto.png' },
    { id: 5, marka: 'Mersedes', image: 'avto.png' },
    { id: 1, marka: 'BMV', image: 'avto.png' },
    { id: 2, marka: 'Toyota', image: 'avto.png' },
    { id: 3, marka: 'Lada', image: 'avto.png' },
    { id: 4, marka: 'Nissan', image: 'avto.png' },
    { id: 1, marka: 'BMV', image: 'avto.png' },
    { id: 2, marka: 'Toyota', image: 'avto.png' },
    { id: 3, marka: 'Lada', image: 'avto.png' },
    { id: 4, marka: 'Nissan', image: 'avto.png' },
    { id: 5, marka: 'Mersedes', image: 'avto.png' },
    { id: 1, marka: 'BMV', image: 'avto.png' },
    { id: 2, marka: 'Toyota', image: 'avto.png' },
    { id: 3, marka: 'Lada', image: 'avto.png' },
    { id: 4, marka: 'Nissan', image: 'avto.png' },



]

const users = {
    mars1234: {
        login: 'mars1234',
        id: 444,
        password: 'mars1234',
        name: 'Piter'
    }
}

const HookTableData = [
    {
        id: "1000",
        code: "f230fh0g3",
        name: "Bamboo Watch",
        description: "Product Description",
        image: "bamboo-watch.jpg",
        price: 65,
        category: "Accessories",
        quantity: 24,
        inventoryStatus: "INSTOCK",
        rating: 5
    },
    {
        id: "1001",
        code: "nvklal433",
        name: "Black Watch",
        description: "Product Description",
        image: "black-watch.jpg",
        price: 72,
        category: "Accessories",
        quantity: 61,
        inventoryStatus: "INSTOCK",
        rating: 4,
    },
    {
        id: "1000",
        code: "f230fh0g3",
        name: "Bamboo Watch",
        description: "Product Description",
        image: "bamboo-watch.jpg",
        price: 65,
        category: "Accessories",
        quantity: 24,
        inventoryStatus: "INSTOCK",
        rating: 5
    },
    {
        id: "1000",
        code: "f230fh0g3",
        name: "Bamboo Watch",
        description: "Product Description",
        image: "bamboo-watch.jpg",
        price: 65,
        category: "Accessories",
        quantity: 24,
        inventoryStatus: "INSTOCK",
        rating: 5
    },
    {
        id: "1000",
        code: "f230fh0g3",
        name: "Bamboo Watch",
        description: "Product Description",
        image: "bamboo-watch.jpg",
        price: 65,
        category: "Accessories",
        quantity: 24,
        inventoryStatus: "INSTOCK",
        rating: 5
    },
    {
        id: "1000",
        code: "f230fh0g3",
        name: "Bamboo Watch",
        description: "Product Description",
        image: "bamboo-watch.jpg",
        price: 65,
        category: "Accessories",
        quantity: 24,
        inventoryStatus: "INSTOCK",
        rating: 5
    }

]



//app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

let cors = require("cors");
app.use(cors());

const PORT = 3003

app.listen(PORT, () => {
    console.log(`server started....  PORT: ${PORT}`)
})

app.post('/auth', (req, res) => {

    console.log(req.body)

    if(!req.body) {
        return res.status(200).json({1:['пустое тело', '123243549996']})
    }

    const login = req.body.login || 'pusto'
    const password = req.body.password || 'pusto'
    const id = uuidv4()


    if (login === users[login]?.login && password === users[login]?.password) {
        return res.status(200).json({status: 'Успешная авторизация', id: id})
    }

    res.status(400).json({status: 'Неверный логин или пароль', id: 666})
})



app.post('/registration', (req, res) => {

        // console.log(req.body)

        if (!req.body) {
            return res.status(200).json({1:['пустое тело', '123243549996']})
        }

        const errors = {}
        errors.status = `Введите все данные`
        const inputsNames = ['login', 'password', 'repeatPassword', 'name', 'surname', 'birthday', 'mail', 'age']

        inputsNames.forEach((itemInput) => {

            if(!req.body[itemInput]) {
                errors[itemInput] = `Пустой ${itemInput}`
            }
        })
    console.log('errors obj' ,Object.keys(errors))

    if (Object.keys(errors).length > 1) {
        res.status(400).json(errors)
        return
    }

    if (users.hasOwnProperty(req.body.login)) {
        console.log("База данных ползователей НЕ ИЗМЕНИЛАСЬ")
        return res.status(400).json({status: 'Такой    пользователь существует'})

    }
    console.log('WTFFFFFFFFFFFFFFFFFFFFFFFFFf')

    users[req.body.login] = {
        login: req.body.login,
        password:req.body.password,
        name:req.body.name,
        surname:req.body.surname,
        birthday:req.body.birthday,
        mail:req.body.mail,
        age:req.body.age,
        gender:req.body.gender,
        tags:req.body.tags,
    }

    console.log("База данных ползователей ОБНОВЛЕНА", users)



        res.status(200).json({status: 'Успешная регистрация'})

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


app.get('/table_adaptive', (req, res) => {

    res.status(200).json(marksAvtoTableAdaptive)

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


app.get('/hook', (req, res) => {

    res.status(200).json(HookTableData)

})



//console.log(Object.keys(dict["BMV"]))

