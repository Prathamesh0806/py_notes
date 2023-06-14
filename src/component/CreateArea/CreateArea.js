import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import "./CreateArea.css";

const CreateArea = (props) => {
  const [isExpand, setExpand] = useState(false);
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  };

  const submitNote = (event) => {
    props.onAdd(note);
    setNote({
      title: "",
      content: "",
    });
    setExpand(false);
    event.preventDefault();
  };

  const expand = () => {
    setExpand(true);
  };

  return (
    <div>
      <form className="create-note">
        {isExpand && (
          <input
            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder="Title"
          />
        )}
        <textarea
          name="content"
          onChange={handleChange}
          onClick={expand}
          value={note.content}
          placeholder="Take a note..."
          rows={isExpand ? "3" : "1"}
        />
        <button onClick={submitNote}>
          <AddIcon />
        </button>
      </form>
    </div>
  );
};

export default CreateArea;
