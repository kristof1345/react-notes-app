import { Link } from "react-router-dom";
import { BsPlusLg } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import { RxHamburgerMenu } from "react-icons/rx";

import NoteItem from "../components/NoteItem";
import { useState } from "react";
import { useEffect } from "react";

const Notes = ({ notes }) => {
  const [showSearch, setShowSearch] = useState(false);
  const [text, setText] = useState("");
  const [filteredNotes, setFileteredNotes] = useState(notes);

  const handleSearch = () => {
    setFileteredNotes(
      notes.filter((note) => {
        if (note.title.toLowerCase().match(text.toLocaleLowerCase())) {
          return note;
        }
      })
    );
  };

  useEffect(handleSearch, [text]);

  return (
    <div className="App">
      <header>
        <nav id="nav">
          <div id="icons">
            {/* <span id="notes-icon">
              <span id="line"></span>
            </span> */}
            <div className="toggle-holder">
              <div className="toggle-icon">
                <RxHamburgerMenu />
              </div>
            </div>
            {!showSearch && (
              <div className="wrapp-logo">
                <div className="logo">Notes</div>
              </div>
            )}
          </div>
          <div className="wrapp">
            {showSearch && (
              <input
                id="search"
                type="text"
                value={text}
                onChange={(e) => {
                  setText(e.target.value);
                  handleSearch();
                }}
                placeholder="Search..."
                name="search"
                autoFocus
              />
            )}
            <div
              className="search-icon"
              onClick={() => setShowSearch((prevState) => !prevState)}
            >
              <BiSearch />
            </div>
          </div>
        </nav>
      </header>

      <main>
        <div id="notes-wrapper">
          {filteredNotes.map((note) => (
            <NoteItem key={note.id} note={note} />
          ))}
        </div>
      </main>

      <Link to="/create-note" id="add-Btn">
        <BsPlusLg />
      </Link>
    </div>
  );
};

export default Notes;
