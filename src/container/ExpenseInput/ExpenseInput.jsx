import { useDispatch } from "react-redux";
import { useState } from "react";
import s from "./style.module.css";
import { actionAddExpense } from "store/expense/expense-slice";
//to call this action you have to use dispatch. call dispatch from within the main function

export function ExpenseInput(props) {
// we want to update these sates as soon as our input changes
const dispatch = useDispatch();

  const [price, setPrice] = useState();
  const [expenseName, setExpenseName] = useState();

  const submit = (event)=>{
    event.preventDefault();
//THIS FUNC UPDATES expenseSlice state. Note how it is
// called inside the dispatch function()
    dispatch(actionAddExpense({ price, name: expenseName }));
    console.log("submitted")
  }


  return (
    <form onSubmit={submit} >
      <div className="row justify-content-center">
        <div className="col-12 col-sm-5 col-md-4 col-lg-4 mb-2">
          <input
            type="text"
            className="form-control"
            placeholder='Ex : "Name"'
            onChange={(event)=>setExpenseName(event.target.value)}
            />
        </div>
        <div className="col-12 col-sm-2 col-md-4 col-lg-4 mb-2">
          <input
            type="number"
            step="0.01"
            className="form-control"
            placeholder="Ex: Cost"
            onChange={(event)=>setPrice(event.target.value)}

          />
        </div>

        <div className="col-12 col-sm-2 col-md-4 col-lg-4 mb-2">
          <button type="submit" className={`btn btn-primary ${s.btn}`}>
            Add
          </button>
        </div>
      </div>
    </form>
  );
}
