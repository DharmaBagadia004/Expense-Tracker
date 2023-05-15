
const ExpenseSchema = require("../Models/expenseModel")

exports.addExpense = async (req,res) => {
    const {title,amount,category , discription , date } = req.body

    const expense = ExpenseSchema({
        title,
        amount,
        category,
        discription,
        date
    })
    //vaildation
    try{
        if(!title || !date || !category || !discription )
        {
            res.status(400).json({message: "All Fields are required"})
        }
        if(amount<=0 || !amount === Number)
        {
            res.status(400).json({message:"Amount should be a positive number"})
        }
        await expense.save()
        res.status(200).json({message:"Expense Added"})
    }
    catch(error){
        res.status(500).json({message:"Server Error"})
    }
    console.log(expense)
}

exports.getExpense = async (req,res) => {
    try{
        const expenses = await ExpenseSchema.find().sort({createdAt:-1})
        res.status(200).json(expenses)
    }
    catch(error){
        res.status(500).json({message:"Server Error"})
    }
}
exports.deleteExpense = async (req,res) => {
    const {id} = req.param
    //id is undefined
    console.log(id)
    ExpenseSchema.findByIdAndDelete(id)
        .then((expenses)=>{
            res.status(200).json({message:"Deleted Successfully"})
        })
        .catch((err)=>{
            res.status(500).json({message:"Server Error"})
        })
}