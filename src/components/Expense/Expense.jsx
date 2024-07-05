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
      <div className="expense-table__column">
        <p className="expense-table__data">{formatDate(date)}</p>
      </div>
      <div className="expense-table__column">
        <p className="expense-table__data">{merchant}</p>
      </div>
      <div className="expense-table__column">
        <p className="expense-table__data">£{amount}</p>
      </div>
      <div className="expense-table__column">
        <p className="expense-table__data expense-table__data--category ">
          {category}
        </p>
      </div>
      <div className="expense-table__column">
        <p className="expense-table__data">{description}</p>
      </div>
      <div className="expense-table__column">
        <p className="expense-table__data expense-table__data--status">
          {status}
        </p>
      </div>
    </div>
  );
}
export default Expense;
