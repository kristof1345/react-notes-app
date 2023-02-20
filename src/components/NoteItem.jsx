import React from "react";
import { Link } from "react-router-dom";

const NoteItem = ({ note }) => {
  return (
    <Link to={`/edit-note/${note.id}`} className="notes-card">
      <h3 className="notes-card-title">
        {note.title.length > 40 ? note.title.substr(0, 40) + "..." : note.title}
      </h3>
      {/* <p className="notes-card-body">{note.details}</p> */}
      <span className="time-o-creation">{note.date}</span>
    </Link>
  );
};

export default NoteItem;
