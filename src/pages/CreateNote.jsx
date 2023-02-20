import { Link, useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { useState } from "react";
import { v4 as uuid } from "uuid";

import useCreateDate from "../components/useCreateDate";

const CreateNote = ({ setNotes }) => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const date = useCreateDate();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title && details) {
      const note = { id: uuid(), title, details, date };
      setNotes((prevNotes) => [note, ...prevNotes]);

      //redirect to home page
      navigate("/");
    }
  };

  return (
    <div>
      <header className="create_note_header">
        <Link to="/" className="back-btn">
          <IoIosArrowBack />
        </Link>
        <button className="save" onClick={handleSubmit}>
          Save
        </button>
      </header>

      <form className="create-note_form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title..."
          autoFocus
          className="create-note_form-title"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <textarea
          rows="25"
          placeholder="Note details..."
          className="create-note_form-textarea"
          onChange={(e) => setDetails(e.target.value)}
          value={details}
        ></textarea>
      </form>
    </div>
  );
};

export default CreateNote;
