import { useEffect, useState } from "react";
import "./ExpenseList.scss";
import Expense from "../Expense/Expense";

function ExpenseList() {
  const [expenses, setExpenses] = useState(null);

  useEffect(() => {
    const fetchExpenses = async () => {
      try {
        await fetch("https://expenses-backend-mu.vercel.app/expenses", {
          headers: {
            "Content-Type": "application/json",
            Username: "onome.ogwuda",
          },
        })
          .then((res) => res.json())
          .then((data) => setExpenses(data));
      } catch (error) {
        console.log(error);
      }
    };

    fetchExpenses();
  }, []);

  if (!expenses) {
    return <p>Loading...</p>;
  }

  return (
    <div className="main">
      <h1 className="main__title">Expenses</h1>
      <div className="main__columns">
        <p className="main__column-header">Date</p>
        <p className="main__column-header">Merchant</p>
        <p className="main__column-header">Amount</p>
        <p className="main__column-header">Category</p>
        <p className="main__column-header">Description</p>
        <p className="main__column-header">Status</p>
      </div>

      {expenses.map((expense) => {
        return (
          <Expense
            key={expense.id}
            date={expense.date}
            merchant={expense.merchant}
            amount={expense.amount}
            category={expense.category}
            description={expense.description}
            status={expense.status}
          />
        );
      })}
    </div>
  );
}
export default ExpenseList;
