import { useState } from "react";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import TextField from "@mui/material/TextField";
import "./CreateNote.css";

const CreateNote = (props) => {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const inputEvent = (e) => {
    const { name, value } = e.target;
    return setNote((oldVal) => {
      return {
        ...oldVal,
        [name]: value,
      };
    });
  };

  const addEvent = () => {
    props.passNote(note);
    setNote({
      title: " ",
      content: " ",
    });
  };

  return (
    <>
      <div className="CreateNote-main">
        <form>
          <TextField
            type="text"
            onChange={inputEvent}
            name="title"
            value={note.title}
            placeholder="Title"
            className="input"
          />
          <TextareaAutosize
            minRows={1}
            col=""
            onChange={inputEvent}
            name="content"
            value={note.content}
            placeholder="Write a note..."
            className="input"
          />
          <Button className="MuiButton-root" onClick={addEvent}>
            <AddIcon className="CreateNote-icon" />
          </Button>
        </form>
      </div>
    </>
  );
};

export default CreateNote;
