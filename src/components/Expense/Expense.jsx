import "./Expense.scss";

function Expense({ date, merchant, amount, category, description, status }) {
  function formatDate() {
    date = new Date(date);
    const day = date.toLocaleString("en-uk", {
      day: "numeric",
    });
    const month = date.toLocaleString("en-uk", {
      month: "short",
    });
    return `${month} ${day}`;
  }

  return (
    <div className="expense-table">
      <p className="expense-table__data">{formatDate(date)}</p>
      <p className="expense-table__data">{merchant}</p>
      <p className="expense-table__data">£{amount}</p>
      <p className="expense-table__data expense-table__data--category ">
        {category}
      </p>
      <p className="expense-table__data">{description}</p>
      <p className="expense-table__data expense-table__data--status">
        {status}
      </p>
    </div>
  );
}
export default Expense;
