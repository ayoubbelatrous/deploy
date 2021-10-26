const express = require('express')
const routes = require('./routes')
const path = require('path')
const cors = require('cors')
const {sequelize} = require('../models')
require('dotenv').config()




//express init
const port = process.env.PORT

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())


async function connect()
{
    try {
        await sequelize.authenticate()

    } catch (error) {
        console.log(error)
    }   
} 


connect()
//start app
app.listen(port,() => console.log(`server is running on http://localhost:${port}`))


const dir = path.join(__dirname, 'public');
app.use(express.static(dir))


routes(app)



