import React from "react";
import "./Note.css";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";

const Note = (props) => {
  const handleClick = () => {
    props.onDelete(props.id);
  };

  const updateNotes = () => {
    props.onUpdate(props.id);
  };

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <div className="note-buttons">
        <button className="note-buttons-delete" onClick={handleClick}>
          <DeleteIcon fontSize="large" />
        </button>
        <button className="note-buttons-edit" onClick={updateNotes}>
          <EditIcon fontSize="large" />
        </button>
      </div>
    </div>
  );
};

export default Note;
