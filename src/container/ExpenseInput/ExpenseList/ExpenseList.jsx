import { List } from "components/List/List";
import { useSelector } from "react-redux";

//the useSelector is a function that take the store as it's first parameter
//and from the store you can return what you want. 



export function ExpenseList(){
// here we acces our expenseList from the store and store it in a variable  (expenseList)
    const expenseList = useSelector(store => store.EXPENSE.expenseList)
    return <List items={expenseList} />
}