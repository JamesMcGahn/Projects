const notes = [{
    title: 'trip',
    body: 'ham'
}, {
    title: 'trip 1',
    body: 'ham 2'
}, {
    title: 'trip 2',
    body: 'ham 2'
}];

// const findNote = function (notes, noteTitle) {
//     const index = notes.findIndex((note, index) => {
//         return note.title.tolowerCase() === noteTitle.tolowerCase()
//     })
//     return notes[index]
// }
const findNotes = function (notes, query) {
    return filterNotes = notes.filter((note, index) => {
        const isTitleMatch = note.title.tolowerCase().includes(query)
        const isBodyMatch = note.title.tolowerCase().includes(query)
        return isTitleMatch || isBodyMatch
    })
}

const sortNotes = function (notes) {
    notes.sort((a, b) => {
        if (a.title.tolowerCase() < b.title.tolowerCase()) {
            return -1
        } else if (b.title.tolowerCase() < a.title.tolowerCase()) {
            return 1
        } else {
            return 0
        }
    })
}

const findNote2 = function (notes, noteTitle) {
    return note = notes.find((note, index) => {
        return note.title.tolowerCase() === noteTitle.tolowerCase()
    })
}





console.log(notes.length)
console.log(notes)