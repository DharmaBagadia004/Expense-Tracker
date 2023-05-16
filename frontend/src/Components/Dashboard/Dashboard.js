import React, { useEffect } from "react";
import Chart from "../Chart/Chart";
import { useGlobalContext } from "../../Context/globalContext";
import { dollar } from "../../utils/icons";
import History from "../History/History"; 
import '../../Styles/Dashboard.css'

function Dashboard() {

    const {totalExpense,incomes,expenses,totalIncome,totalBalance,getExpenses,getIncomes} = useGlobalContext()

    useEffect(() => {
        getIncomes()
        getExpenses()
    },[])

    return(
        <div className="dashboard">
            <div className="InnerLayout">
                <h1>All Transaction</h1>
                <div className="stats-con">
                    <div className="chart-con">
                        <Chart />
                        <div className="amount-con">
                            <div className="income">
                                <h2>Total Income</h2>
                                <p>
                                    {dollar} {totalIncome()}
                                </p>
                            </div>
                            <div className="expense">
                                <h2>Total Expense</h2>
                                <p>
                                    {dollar} {totalExpense()}
                                </p>
                            </div>
                            <div className="balance">
                                <h2>Total Balance</h2>
                                <p>
                                    {dollar} {totalBalance()}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="history-con">
                    <History />
                        <h2 className="salary-title">Min <span>Salary</span>Max</h2>
                        <div className="salary-item">
                            <p>
                                {Math.min(...incomes.map(item => item.amount))}
                            </p>
                            <p>
                                {Math.max(...incomes.map(item => item.amount))}
                            </p>
                        </div>
                        <h2 className="salary-title">Min <span>Expense</span>Max</h2>
                        <div className="salary-item">
                            <p>
                                {Math.min(...expenses.map(item => item.amount))}
                            </p>
                            <p>
                                {Math.max(...expenses.map(item => item.amount))}
                            </p>
                        </div>
                    </div>
                </div>
            
            </div>
        </div>
    )
}
export default Dashboard

