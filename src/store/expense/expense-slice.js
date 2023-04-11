

import { createSlice } from "@reduxjs/toolkit";


export const expenseSlice = createSlice({
    name: "expenseSlice",
    initialState: {
        income: 1000, 
        expenseList: [],

    },
    //this func will be in charge of updating expenseSlice. To see
    //  this fun is called (via dispatch) see ExpenseInput
    reducers:{
    //reducers must be written and in this object we create our function
        actionAddExpense: (currentSlice, action) =>{
// as the first parameter we have access to the current slice 
//the second parameter we receive action
            console.log("action", action)
            currentSlice.expenseList.push(action.payload)
        },
        actionSetIncome: (currentSlice, action) => {
            currentSlice.income = action.payload
        },
    }

});


export const { actionAddExpense, actionSetIncome } = expenseSlice.actions

// const actionAddExpense = expenseSlice.actions.actionAddExpense
//destructured above