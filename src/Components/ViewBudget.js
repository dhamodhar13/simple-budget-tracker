import React from "react";
import { BsFillPencilFill } from "react-icons/bs";

const ViewBudget = (props) => {
  return (
    <>
      <span className="d-flex align-items-center">
        Total Budget: &#8377;{props.budget}
      </span>
      <button
        type="button"
        className="btn btn-primary"
        onClick={props.handleEditClick}
      >
        <BsFillPencilFill />
      </button>
    </>
  );
};

export default ViewBudget;
