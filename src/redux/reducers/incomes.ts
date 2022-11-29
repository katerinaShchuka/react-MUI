import { createSlice } from "@reduxjs/toolkit";
import { MoneyItem } from "../../types/money"

const initialState : MoneyItem[] = [{
    title: "first item",
    amount: 23,
    date: "first date"
}]

const incomeSlicer = createSlice({
    name: "Incomes",
    initialState,
    reducers: {
        addIncome: () => {
            console.log("addIncome method is invoked")
        },
        deleteIncome: () => {
            console.log("deleteIncome is invoked")
        }
    }
})

const incomeReducer = incomeSlicer.reducer
export default incomeReducer