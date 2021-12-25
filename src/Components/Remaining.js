import React, { useContext } from "react";
import { AppContext } from "../Context/AppContext";

const Remaining = () => {
  const { expenses, budget } = useContext(AppContext);
  const totalExpenses = expenses.reduce((total, item) => {
    return (total += item.cost);
  }, 0);

  const alertType = totalExpenses > budget ? "alert-danger" : "alert-success";
  return (
    <div className={`alert ${alertType}`} style={{ padding: "1.42rem 1rem" }}>
      <span>Remaining: &#8377;{budget - totalExpenses}</span>
    </div>
  );
};

export default Remaining;
