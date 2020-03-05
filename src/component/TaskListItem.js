import React from "react";

const TaskListItem = props => {
  const { id, title, date, description, isCompleted, updateComplete } = props;
  return (
    <div
      className={
        isCompleted
          ? "list-group-item list-group-item-success"
          : "list-group-item"
      }
    >
      <div className="d-flex w-100 justify-content-between">
        <h5 className="mb-1">{title}</h5>
        <small>{date}</small>
      </div>
      <p className="mb-1">{description}</p>
      {!isCompleted && (
        <button
          className="btn btn-sm btn-success"
          onClick={() => updateComplete(id)}
        >
          completed
        </button>
      )}
    </div>
  );
};

export default TaskListItem;
