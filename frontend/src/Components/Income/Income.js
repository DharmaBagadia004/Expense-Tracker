import React, { useEffect } from "react";
import { useGlobalContext } from "../../Context/globalContext";
import IncomeItems from "../IncomeItems/IncomeItems";
import Form from "../Forms/Form";

function Income() {
    const {addIncome,incomes,getIncomes,deleteIncome,totalIncome} = useGlobalContext()

    useEffect(()=>{
        getIncomes()
    },[])

    return(
        <div className="income">
            <div className="InnerLayout">
                <h1>Incomes</h1>
                <h2 className="total-income">Total Income: <span id="total-span">${totalIncome()}</span></h2>
                <div className="income-content">
                    <div className="form-container">
                    <Form />
                    </div>
                    <div className="incomes">
                    {incomes.map((income) => {
                            const {_id, title, amount, date, category, description, type} = income;
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
                                deleteItem={deleteIncome}
                            />
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Income