import React, { useContext } from "react";
import { AppContext } from "../Context/AppContext";

const ExpenseTotal = () => {
  const { expenses } = useContext(AppContext);
  const totalExpenses = expenses.reduce((total, item) => {
    return (total += item.cost);
  }, 0);
  return (
    <div className="alert alert-primary" style={{ padding: "1.42rem 1rem" }}>
      <span>Spent to far: &#8377;{totalExpenses}</span>
    </div>
  );
};

export default ExpenseTotal;
