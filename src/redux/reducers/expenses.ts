import { createSlice } from "@reduxjs/toolkit";
import { MoneyItem } from "../../types/money"

const initialState : MoneyItem[] = [{
    title: "first expense item",
    amount: 23,
    date: "first expense date"
}]

const expenseSlicer = createSlice({
    name: "expenses",
    initialState,
    reducers: {
        addExpense: (state, action) => {
            state.push(action.payload)
            console.log("addExpense method is invoked")
        },
        deleteExpense: () => {
            console.log("deleteExpense is invoked")
        }
    }
})

const expenseReducer = expenseSlicer.reducer
export const {addExpense, deleteExpense} = expenseSlicer.actions
export default expenseReducer