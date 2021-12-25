import React, { useContext, useState } from "react";
import { AppContext } from "../Context/AppContext";
import EditBudget from "./EditBudget";
import ViewBudget from "./ViewBudget";

const Budget = () => {
  const { budget, dispatch } = useContext(AppContext);
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = (value) => {
    dispatch({
      type: "SET_BUDGET",
      payload: value,
    });
    setIsEditing(false);
  };
  return (
    <div className="alert alert-secondary d-flex justify-content-between align-items center">
      {isEditing ? (
        <EditBudget budget={budget} handleSaveClick={handleSaveClick} />
      ) : (
        <ViewBudget budget={budget} handleEditClick={handleEditClick} />
      )}
    </div>
  );
};

export default Budget;
