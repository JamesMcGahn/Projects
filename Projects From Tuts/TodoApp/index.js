const todos = [
    { text: 'todo 1', completed: false },
    { text: 'todo 2', completed: false },
    { text: 'todo 3', completed: true },
    { text: 'todo 4', completed: false }
];

function removeTodo(todos, text) {
    index = todo.findByIndex((x) => {
        todos.text.toLowerCase() === text.toLowerCase();
    })

    if (index > -1) {
        todos.splice(index, 1)
    }
}

const findtodos = function (todos, query) {
    return todos.filter((todo) => {
        return todo.completed === false
    })
}


const sortNotes = function (todos) {
    todos.sort((a, b) => {
        if (!a.completed && b.completed) {
            return -1
        } else if (!b.completed && a.completed) {
            return 1
        } else {
            return 0
        }
    })
}