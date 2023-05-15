const mongoose = require('mongoose')
const MONGO_URL = 'mongodb+srv://dharmabagadia2:OwxfnZZfcqbikvGA@cluster0.ercw0qc.mongodb.net/?retryWrites=true&w=majority'
const db = async () =>{
    try{
        mongoose.set('strictQuery',false)
        await mongoose.connect(MONGO_URL)
        console.log("DB Connected")
    }
    catch(error){
        console.log(error)
        console.log("DB Connection error")
    }
}

module.exports={db}