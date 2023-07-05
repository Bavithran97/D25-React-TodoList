import React, { useState, useEffect } from "react";

function Cards({ index, name, description, ondelete, edittodo }) {
  const [editedName, setEditedName] = useState(name);
  const [editedDescription, setEditedDescription] = useState(description);

  useEffect(() => {
    setEditedName(name);
    setEditedDescription(description);
  }, [name, description]);

  const isDelete = () => {
    ondelete(name, description);
  };

  const updatetodo = () => {
    const newName = prompt("Enter the updated name", editedName);
    const newDescription = prompt("Enter the description", editedDescription);

    if (newName && newDescription) {
      setEditedName(newName);
      setEditedDescription(newDescription);
      edittodo(index, newName, newDescription);
    }
  };

  return (
    <div className="card col-3 m-3 p-4">
      <p>
        <b>Name</b> : {editedName}
      </p>
      <p>
        <b>Description :</b> {editedDescription}
      </p>
      <p>
        <b>status :</b>
        <select>
          <option value="Not-Completed">Not-Completed</option>
          <option value="Completed">Completed</option>
        </select>
      </p>
      <div className="row">
        <div className="col-2 mx-2 text-start">
          <button className="btn btn-success" onClick={updatetodo}>
            Edit
          </button>
        </div>
        <div className="col-2 mx-2 text-end">
          <button className="btn btn-danger" onClick={isDelete}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cards;
