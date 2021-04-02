let notes = [];

const filters = {
    searchText: ''
}

//check for existing data
const notesJSON = localStorage.getItem('notes');

if (notesJSON !== null) {
    notes = JSON.parse(notesJSON)
}

const renderNotes = function (notes, filters) {
    const filteredNotes = notes.filter((notes) => {
        return notes.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    document.querySelector('#notes').innerHTML = ``;
    filteredNotes.forEach((note) => {
        const noteEl = document.createElement('p');

        if (note.title.length > 0) {
            noteEl.textContent = note.title;
        } else {
            noteEl.textContent = 'Unamed Note';
        }

        document.querySelector('#notes').appendChild(noteEl);
    })
}
renderNotes(notes, filters);

document.querySelector('#create-note').addEventListener('click', (e) => {
    notes.push({
        title: '',
        body: ''
    })
    localStorage.setItem('notes', JSON.stringify(notes))
    renderNotes(notes, filters);
})


document.querySelector('#search-text').addEventListener('change', (e) => {
    filters.searchText = e.target.value;
    renderNotes(notes, filters);
})

document.querySelector('#name-form').addEventListener('submit', (e) => {
    e.preventDefault()
    e.target.elements.firstName.value
})
document.querySelector('#filter-by').addEventListener('change', (e) => {
    console.log();
})







// const findNote = function (notes, noteTitle) {
//     const index = notes.findIndex((note, index) => {
//         return note.title.tolowerCase() === noteTitle.tolowerCase()
//     })
//     return notes[index]
// }
// const findNotes = function (notes, query) {
//     return filterNotes = notes.filter((note, index) => {
//         const isTitleMatch = note.title.tolowerCase().includes(query)
//         const isBodyMatch = note.title.tolowerCase().includes(query)
//         return isTitleMatch || isBodyMatch
//     })
// }

// const sortNotes = function (notes) {
//     notes.sort((a, b) => {
//         if (a.title.tolowerCase() < b.title.tolowerCase()) {
//             return -1
//         } else if (b.title.tolowerCase() < a.title.tolowerCase()) {
//             return 1
//         } else {
//             return 0
//         }
//     })
// }

// const findNote2 = function (notes, noteTitle) {
//     return note = notes.find((note, index) => {
//         return note.title.tolowerCase() === noteTitle.tolowerCase()
//     })
// }




