//check for existing data
const getSavedNotes = function () {
    const notesJSON = localStorage.getItem('notes');
    try {
        if (notesJSON !== null) {
            return JSON.parse(notesJSON)
        } else {
            return []
        }
    } catch (e) {
        return []
    }
}
// Save the notes to local Storage
const saveNotes = function (notes) {
    localStorage.setItem('notes', JSON.stringify(notes))
}

// remove note from list
const removeNote = function (id) {
    const noteIndex = notes.findIndex((note) => {
        return note.id === id
    })
    if (noteIndex > -1) {
        notes.splice(noteIndex, 1)
    }

}

// generate DOM structure

const generateNoteDOM = function (note) {
    const noteEl = document.createElement('a');
    const textEl = document.createElement('p');
    const status = document.createElement('p')

    // add note text
    if (note.title.length > 0) {
        textEl.textContent = note.title;
    } else {
        textEl.textContent = 'Unamed Note';
    }
    textEl.classList.add('list__title')
    noteEl.appendChild(textEl);
    noteEl.setAttribute('href', `/edit.html#${note.id}`)
    noteEl.classList.add('list-item')

    status.textContent = generateLastEdited(note.updatedAt)
    status.classList.add('list-item__subtitle')
    noteEl.appendChild(status)

    return noteEl
}

// sort your notes by 
const sortNotes = function (notes, sortBy) {
    if (sortBy === 'byEdited') {
        return notes.sort(function (a, b) {
            if (a.updatedAt > b.updatedAt) {
                return -1
            } else if (a.updatedAt < b.updatedAt) {
                return 1
            } else {
                return 0
            }
        })
    } else if (sortBy === 'byCreated') {
        return notes.sort(function (a, b) {
            if (a.createdAt > b.createdAt) {
                return -1
            } else if (a.createdAt < b.createdAt) {
                return 1
            } else {
                return 0
            }
        })
    } else if (sortBy === 'alphabetical') {
        return notes.sort(function (a, b) {
            if (a.title.toLowerCase() < b.title.toLowerCase()) {
                return -1
            } else if (a.title.toLowerCase() > b.title.toLowerCase()) {
                return 1
            } else {
                return 0
            }
        })
    }
}


// render app notes
const renderNotes = function (notes, filters) {
    const notesDiv = document.querySelector('#notes')
    notes = sortNotes(notes, filters.sortBy);
    const filteredNotes = notes.filter((notes) => {
        return notes.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    notesDiv.innerHTML = ``;

    if (filteredNotes.length > 0) {
        filteredNotes.forEach((note) => {
            const noteEl = generateNoteDOM(note)
            notesDiv.appendChild(noteEl);
        })
    } else {
        const emptyMessage = document.createElement('p');
        emptyMessage.textContent = `No Notes to Show`
        emptyMessage.classList.add('empty-message')
        notesDiv.appendChild(emptyMessage)
    }


}

//generate the last edited message
const generateLastEdited = function (timestamp) {
    return `Last edited ${moment(timestamp).fromNow()}`
}


