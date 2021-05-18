import Footer from './components/Footer.jsx';
import Header from './components/Header.jsx';
import Note from './components/Note.jsx';
import CreateArea from './components/CreateArea.jsx';
import React, { useState } from 'react';

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(note) {
    setNotes((prevNotes) => {
      return [...prevNotes, note];
    });
  }

  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem, index) => {
        return <Note key={index} id={index} title={noteItem.title} content={noteItem.content} onDelete={deleteNote} />;
      })}
      <Footer />
    </div>
  );
}

export default App;
