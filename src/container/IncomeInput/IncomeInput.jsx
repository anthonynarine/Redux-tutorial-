import { useDispatch, useSelector } from "react-redux";
import s from "./style.module.css";
import { actionSetIncome } from "store/expense/expense-slice";

export function IncomeInput(props) {
  // accessing the income state from the store
  const income = useSelector((store) => store.EXPENSE.income);
  const dispatch = useDispatch();

  // this function will update the income state 
  function setIncome(event){
    dispatch(actionSetIncome(Number.parseFloat(event.target.value)));
    // Number.parseFloat will send an integer e.traget.value would send a String.
  }

  return (
    <div className="row justify-content-center mb-2">
      <div className={`col-6 ${s.label}`}>Income</div>
      <div className="col-6">
        <input
          defaultValue={income}
          onChange={setIncome}
          type="number"
          className="form-control"
          placeholder="Ex: 3000"
        />
      </div>
    </div>
  );
}
