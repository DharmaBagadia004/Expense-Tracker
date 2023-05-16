import React, { useEffect } from "react";
import { useGlobalContext } from "../../Context/globalContext";
import IncomeItems from "../IncomeItems/IncomeItems";
import ExpenseForm from "./ExpenseForm";

function Expense() {
    const {addExpense,expenses,getExpenses,deleteExpense,totalExpense} = useGlobalContext()
    useEffect(()=>{
        getExpenses()
    },[])

    return(
        <div className="income">
            <div className="InnerLayout">
                <h1>Expense</h1>
                <h2 className="total-income">Total expense: <span id="total-span">${totalExpense()}</span></h2>
                <div className="income-content">
                    <div className="form-container">
                    <ExpenseForm />
                    </div>
                    <div className="incomes">
                    {expenses.map((expense) => {
                            const {_id, title, amount, date, category, description, type} = expense;
                            return <IncomeItems
                                key={_id}
                                id={_id} 
                                title={title} 
                                description={description} 
                                amount={amount} 
                                date={date} 
                                type={type}
                                category={category} 
                                indicatorColor="var(--color-green)"
                                deleteItem={deleteExpense}
                            />
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Expense