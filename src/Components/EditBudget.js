import React, { useState } from "react";

const EditBudget = (props) => {
  const [value, setValue] = useState(props.budget);
  return (
    <>
      <span className="d-flex align-items-center">
        Total Budget: &#8377;
        <input
          type="number"
          id="totalBudget"
          value={value}
          required={true}
          onChange={(event) => setValue(event.target.value)}
        />
      </span>
      <button
        className="btn btn-primary"
        onClick={() => props.handleSaveClick(value)}
      >
        Save
      </button>
    </>
  );
};

export default EditBudget;
