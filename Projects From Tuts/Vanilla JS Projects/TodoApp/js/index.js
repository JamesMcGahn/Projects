let todos = getSavedTodos()

const filters = {
    searchText: '',
    hideCompleted: false
}

renderTodos(todos, filters)

document.querySelector('#search-text').addEventListener('input', function (e) {
    filters.searchText = e.target.value
    renderTodos(todos, filters)
})

document.querySelector('#new-todo').addEventListener('submit', function (e) {
    const text = e.target.elements.text.value.trim();
    e.preventDefault()
    if (text.length > 0) {
        todos.push({
            id: uuidv4(),
            text: text,
            completed: false
        })
        saveTodos(todos)
        renderTodos(todos, filters)
        e.target.elements.text.value = ''
    }
})

document.querySelector('#hide-completed').addEventListener('change', function (e) {
    filters.hideCompleted = e.target.checked
    renderTodos(todos, filters)
})



// function removeTodo(todos, text) {
//     index = todo.findByIndex((x) => {
//         todos.text.toLowerCase() === text.toLowerCase();
//     })

//     if (index > -1) {
//         todos.splice(index, 1)
//     }
// }

// const findtodos = function (todos, query) {
//     return todos.filter((todo) => {
//         return todo.completed === false
//     })
// }


// const sortNotes = function (todos) {
//     todos.sort((a, b) => {
//         if (!a.completed && b.completed) {
//             return -1
//         } else if (!b.completed && a.completed) {
//             return 1
//         } else {
//             return 0
//         }
//     })
// }

// todos.forEach(todo => {
//     let newTodo = document.createElement('p');
//     newTodo.innerText = todo.text;
//     todolist.appendChild(newTodo)
// })