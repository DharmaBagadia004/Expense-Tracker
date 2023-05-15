const express = require('express')
const cors = require('cors')
const app = express()
const { db } = require('./DB/db')
const {readdirSync} = require('fs')
require('dotenv').config
//console.log(process.env.MONGO_URL)
//const PORT = process.env.PORT;
const PORT = 3000;

//moddleware
app.use(express.json())
app.use(cors())

// app.get('/',(req,res)=>{
//     res.send("Hello World")
// })
//routes
readdirSync('./Routes').map((route)=>app.use('/api/v1',require('./Routes/' + route)))

const server = () => {
    db()
    app.listen(PORT,() =>{
        console.log('Listening to PORT:',PORT)
    })
}
server()