let notes = getSavedNotes();

const filters = {
    searchText: ''
}

renderNotes(notes, filters);

document.querySelector('#create-note').addEventListener('click', (e) => {
    const id = uuidv4();
    notes.push({
        id: id,
        title: '',
        body: ''
    })
    saveNotes(notes);
    location.assign(`/edit.html#${id}`)
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



window.addEventListener('storage', function (e) {
    if (e.key === 'notes') {
        notes = JSON.parse(e.newValue)
        renderNotes(notes, filters)
    }
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




