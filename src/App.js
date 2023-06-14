import React, { useEffect, useState } from "react";
import Navigation from "./component/UIComponent/Navigation/navBar";
// import Footer from "./component/Footer";
import Note from "./component/Note/Note";
import CreateArea from "./component/CreateArea/CreateArea";
import "./App.css";

// Getting notes from localstorage
const getNotes = () => {
  const notes = localStorage.getItem("notes");
  if (notes) {
    // If locaStarage have data then convert notes from JSON to Object
    return JSON.parse(notes);
  } else {
    // If locaStarage dont have data then return empty array
    return [];
  }
};

const App = () => {
  // using useState to set Notes
  const [notes, setNotes] = useState(getNotes());

  // This Function is used for to add notes to array
  const addNote = (newNote) => {
    setNotes((preNotes) => {
      return [...preNotes, newNote];
    });
  };

  // to delete the particuler notes from storage
  const deleteNote = (id) => {
    setNotes((preNotes) => {
      return preNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  };

  const updateNote = (id) => {
    // const notes = localStorage.getItem("notes");
    // if (notes) {
    //   // If locaStarage have data then convert notes from JSON to Object
    //   return JSON.parse(notes);
    // } else {
    //   // If locaStarage dont have data then return empty array
    //   return [];
    // }

    const upNote = notes.find((note, index) => {
      return index === id;
    });

    <CreateArea />;
    console.log(upNote);

    //  let updateNote = notes.find((noteItem, index) => {
    //     return index === id;
    //   });
    //   console.log(updateNote);
  };

  // to store notes into localStorage
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  return (
    <div className="container">
      <Navigation />
      <CreateArea onAdd={addNote} />

      {/* To shows all the notes on the dashbord */}
      <div className="notes">
        {notes.map((noteItem, index) => {
          return (
            <Note
              key={index}
              id={index}
              title={noteItem.title}
              content={noteItem.content}
              onDelete={deleteNote}
              onUpdate={updateNote}
            />
          );
        })}
      </div>

      {/* <Footer /> */}
    </div>
  );
};

export default App;
