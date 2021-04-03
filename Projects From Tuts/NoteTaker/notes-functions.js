//check for existing data
const getSavedNotes = function () {
    const notesJSON = localStorage.getItem('notes');

    if (notesJSON !== null) {
        return JSON.parse(notesJSON)
    } else {
        return []
    }
}
// Save the notes to local Storage
const saveNotes = function (notes) {
    localStorage.setItem('notes', JSON.stringify(notes))
}


// generate DOM structure

const generateNoteDOM = function (note) {
    const noteEl = document.createElement('p');

    if (note.title.length > 0) {
        noteEl.textContent = note.title;
    } else {
        noteEl.textContent = 'Unamed Note';
    }

    return noteEl
}

// render app notes
const renderNotes = function (notes, filters) {
    const filteredNotes = notes.filter((notes) => {
        return notes.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    document.querySelector('#notes').innerHTML = ``;
    filteredNotes.forEach((note) => {
        const noteEl = generateNoteDOM(note)
        document.querySelector('#notes').appendChild(noteEl);
    })
}