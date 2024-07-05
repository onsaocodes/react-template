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
    <div className="table">
      <h1 className="table__title">Expenses</h1>
      <div className="table__columns">
        <p className="table__column-name">Date</p>
        <p className="table__column-name">Merchant</p>
        <p className="table__column-name">Amount</p>
        <p className="table__column-name">Category</p>
        <p className="table__column-name">Description</p>
        <p className="table__column-name">Status</p>
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
