import { configureStore } from "@reduxjs/toolkit"
import { expenseSlice } from "./expense/expense-slice"

const store = configureStore({
    reducer: {
        // EXPENSE: () => "DATA"
        EXPENSE: expenseSlice.reducer

    }
})

export { store }