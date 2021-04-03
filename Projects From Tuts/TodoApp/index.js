let todos = getSavedTodos();

filter = {
    searchText: '',
    hideCompleted: false,
}
todolist = document.querySelector('#todo-list');

renderTodos(todos, filter)

document.querySelector('#filter-todo').addEventListener('input', (e) => {
    filter.searchText = e.target.value;
    renderTodos(todos, filter)
})

const createTodoInput = document.querySelector('#create-todo input');
document.querySelector('#create-todo').addEventListener('submit', (e) => {
    e.preventDefault()
    createTodo(e.target.elements.firstName.value)
    createTodoInput.value = ''
})

document.querySelector('#hide-completed').addEventListener('change', (e) => {
    filter.hideCompleted = e.target.checked;
    renderTodos(todos, filter)
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