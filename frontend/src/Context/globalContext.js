import React, { useContext, useEffect, useState } from "react";
import axios from 'axios';

const BASE_URL = "http://localhost:5000/api/v1/"

const GlobalContext = React.createContext()

export const GlobalProvider = ({children}) => {

    const [incomes,setIncomes] = useState([])
    const [expenses,setExpenses] = useState([])
    const [error,setError]  = useState(null)

    const addIncome = async (income) => {
        const response = await axios.post(`${BASE_URL}add-income`, income)   
            .catch((err) =>{
                setError(err.response.data.message)
            })
        console.log("Income Added Succesfully")
        getIncomes()
    }
    

    const getIncomes = async () => {
        const response = await axios.get(`${BASE_URL}get-income`)
        setIncomes(response.data)
    }

    const deleteIncome = async(id) => {
        const response = await axios.delete(`${BASE_URL}get-income/${id}`)
        getIncomes()
    }

    const totalIncome = () => {
        let totalIncome = 0
        incomes.forEach((income) => {
            totalIncome += income.amount
        })
        return totalIncome
    }

    const addExpense = async (expense) => {
        const response = await axios.post(`${BASE_URL}add-expenses`, expense)   
            .catch((err) =>{
                setError(err.response.data.message)
            })
        console.log("Expense Added Succesfully")
        getExpenses()
    }
    

    const getExpenses = async () => {
        const response = await axios.get(`${BASE_URL}get-expenses`)
        setExpenses(response.data)
    }

    const deleteExpense = async(id) => {
        const response = await axios.delete(`${BASE_URL}get-expenses/${id}`)
        getExpenses()
    }

    const totalExpense = () => {
        let totalExpense = 0
        incomes.forEach((Expense) => {
            totalExpense += Expense.amount
        })
        return totalExpense
    }

    const totalBalance = () => {
        return totalIncome() -  totalExpense()
    }

    const transactionHistory = () => {
        const history = [...incomes, ...expenses]
        history.sort((a,b) => {
            return new Date(b.createdAt) - new Date(a.createdAt)
        })
        return history.slice(0,3)
    }


     return(
        <GlobalContext.Provider value={{
            addIncome,
            getIncomes,
            incomes,
            deleteIncome,
            totalIncome,
            addExpense,
            getExpenses, 
            expenses,
            deleteExpense,
            totalExpense,
            totalBalance,
            transactionHistory
        }}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () =>{
    return useContext(GlobalContext)
}
