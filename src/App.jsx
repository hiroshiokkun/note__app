import "./App.css";

import Sidebar from "./components/Sidebar";

import Main from "./components/Main";

import { useEffect, useState } from "react";

import uuid from "react-uuid";

function App() {
  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem("notes")) || []
  );

  const [activeNote, setActiveNotes] = useState(false);

  useEffect(() => {
    //ローカルストレージをノートに保存する

    setActiveNotes(notes[0].id);
  }, []);

  useEffect(() => {
    //

    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const onAddNote = () => {
    console.log("新しくノートが追加されました。");

    const newNote = {
      id: uuid(),

      title: "新しいノート",

      content: "",

      modDate: Date.now(),
    };

    setNotes([...notes, newNote]);

    console.log(notes);
  };

  const onDeleteNote = (id) => {
    //1つ1つのnotesをとっていく関数。,filterでnoteを取得する。

    const filterNotes = notes.filter((note) => note.id !== id);

    setNotes(filterNotes);
  };

  const getActiveNote = () => {
    return notes.find((note) => note.id === activeNote);
  };

  const onUpdateNote = (updatedNote) => {
    //修正された新しいノートの配列を表す。

    const updatedNotesArray = notes.map((note) => {
      if (note.id === updatedNote.id) {
        console.log(updatedNote);

        return updatedNote;
      } else {
        return note;
      }
    });

    console.log(updatedNotesArray);

    setNotes(updatedNotesArray);
  };

  return (
    <div className="App">
      <Sidebar
        onAddNote={onAddNote}
        notes={notes}
        onDeleteNote={onDeleteNote}
        activeNote={activeNote}
        setActiveNotes={setActiveNotes}
      />

      <Main activeNote={getActiveNote()} onUpdateNote={onUpdateNote} />
    </div>
  );
}

export default App;
