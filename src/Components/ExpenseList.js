import React, { useContext, useState, useEffect } from "react";
import ExpenseItem from "./ExpenseItem";
import { AppContext } from "../Context/AppContext";

const ExpenseList = () => {
  const { expenses } = useContext(AppContext);
  const [filteredExpenses, setFilteredExpenses] = useState(expenses || []);

  useEffect(() => {
    setFilteredExpenses(expenses);
  }, [expenses]);

  const handleSearch = (event) => {
    const searchResults = expenses.filter((filteredExpense) =>
      filteredExpense.name.toLowerCase().includes(event.target.value)
    );
    setFilteredExpenses(searchResults);
  };
  return (
    <>
      <input
        type="text"
        className="form-control mb-2"
        placeholder="Type to search"
        onChange={handleSearch}
      />
      <ul className="list-group">
        {filteredExpenses.map((expense) => {
          return (
            <ExpenseItem
              id={expense.id}
              name={expense.name}
              cost={expense.cost}
              key={expense.id}
            />
          );
        })}
      </ul>
    </>
  );
};

export default ExpenseList;
