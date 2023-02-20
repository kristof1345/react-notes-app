import { Link, useParams, useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useState } from "react";
import useCreateDate from "../components/useCreateDate";

const Editnote = ({ notes, setNotes }) => {
  const { id } = useParams();
  const note = notes.find((item) => item.id == id);
  const [title, setTitle] = useState(note.title);
  const [details, setDetails] = useState(note.details);
  const date = useCreateDate();
  const navigate = useNavigate();

  const handleForm = (e) => {
    e.preventDefault();

    if (title && details) {
      const newNote = { ...note, title, details, date };

      const newNotes = notes.map((item) => {
        if (item.id == id) {
          item = newNote;
        }
        return item;
      });

      setNotes(newNotes);
    }

    //navigate
    navigate("/");
  };

  const handleDelete = () => {
    const newNotes = notes.filter((item) => item.id != id);

    setNotes(newNotes);
    navigate("/");
  };

  return (
    <div>
      <header className="create_note_header">
        <Link to="/" className="back-btn">
          <IoIosArrowBack />
        </Link>
        <button className="save" onClick={handleForm}>
          Save
        </button>
        <button className="delete" onClick={handleDelete}>
          <RiDeleteBin6Line />
        </button>
      </header>

      <form className="create-note_form">
        <input
          type="text"
          placeholder="Title..."
          autoFocus
          className="create-note_form-title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          rows="25"
          placeholder="Note details..."
          className="create-note_form-textarea"
          value={details}
          onChange={(e) => setDetails(e.target.value)}
        ></textarea>
      </form>
    </div>
  );
};

export default Editnote;
