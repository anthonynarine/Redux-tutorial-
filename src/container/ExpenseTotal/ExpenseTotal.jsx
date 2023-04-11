import { useSelector } from "react-redux";
import s from "./style.module.css";

export function ExpenseTotal(props) {

  //obtaing the sum of all expenses using the reduce method. note the conversion from str to int 
  const expenseList = useSelector((store) => store.EXPENSE.expenseList);
  const totalExpense = expenseList.reduce((accumulator, currentItem)=>{
    return Number.parseFloat(accumulator) + Number.parseFloat(currentItem.price)
  }, 0)
  
  const income = useSelector((store) => store.EXPENSE.income)
  const remaningMoney = income - totalExpense

  
  return (
    <div>
      <div className="row">
        <div className={`col ${s.label}`}>Total expenses</div>
        <div className={`col ${s.amount}`}>{totalExpense}</div>
      </div>
      <div className="row">
        <div className={`col ${s.label}`}>Remaining money</div>
        <div className={`col ${s.amount}`}>{remaningMoney}</div>
      </div>
    </div>
  );
}
