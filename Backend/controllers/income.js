
const incomeSchema = require("../Models/incomeModel")

exports.addIncome = async (req,res) => {
    const {title,amount,category , discription , date } = req.body

    const income = incomeSchema({
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
        await income.save()
        res.status(200).json({message:"Income Added"})
    }
    catch(error){
        res.status(500).json({message:"Server Error"})
    }
    console.log(income)
}

exports.getIncome = async (req,res) => {
    try{
        const incomes = await incomeSchema.find().sort({createdAt:-1})
        res.status(200).json(incomes)
    }
    catch(error){
        res.status(500).json({message:"Server Error"})
    }
}
exports.deleteIncome = async (req,res) => {
    const {id} = req.param
    incomeSchema.findByIdAndDelete(id)
        .then((income)=>{
            res.status(200).json({message:"Deleted Successfully"})
        })
        .catch((err)=>{
            res.status(500).json({message:"Server Error"})
        })
}