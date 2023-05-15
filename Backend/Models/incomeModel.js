const mongoose = require('mongoose')

const incomeSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        maxLength:50,
        trim:true
    },
    amount:{
        type: Number,
        required:true,
        maxLength:20,
        trim:true
    },
    type:{
        type: String,
        default: "income"
    },
    date:{
        type: Date,
        required:true,
        trim:true
    },
    category:{
        type: String,
        required: true,
        trim: true
    },
    discription:{
        type: String,
        required:true,
        maxLength:50,
        trim:true
    }
},{timestamps:true})

module.exports = mongoose.model('Income',incomeSchema)