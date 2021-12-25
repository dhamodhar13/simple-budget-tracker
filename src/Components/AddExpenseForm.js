import React, { useContext, useState } from "react";
import { AppContext } from "../Context/AppContext";
import { v4 as uuidv4 } from "uuid";

const AddExpenseForm = () => {
  const { dispatch } = useContext(AppContext);
  const [name, setName] = useState("");
  const [cost, setCost] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();

    const expense = {
      id: uuidv4(),
      name: name,
      cost: parseInt(cost),
    };

    dispatch({
      type: "ADD_EXPENSE",
      payload: expense,
    });

    setName("");
    setCost("");
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="row d-flex justify-content-between">
        <div className="col-sm col-lg-5">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            required={true}
            id="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            className="form-control"
          />
        </div>
        <div className="col-sm col-lg-5">
          <label htmlFor="cost">Cost</label>
          <input
            type="text"
            required={true}
            id="cost"
            value={cost}
            onChange={(event) => setCost(event.target.value)}
            className="form-control"
          />
        </div>
        <div className="col-sm col-lg-2">
          <button
            type="submit"
            className="btn btn-primary"
            style={{ width: "100%", marginTop: "23px" }}
          >
            Save
          </button>
        </div>
      </div>
    </form>
  );
};

export default AddExpenseForm;
