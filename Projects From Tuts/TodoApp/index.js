const todos = [
    { text: 'todo 1', completed: false },
    { text: 'todo 2', completed: false },
    { text: 'todo 3', completed: true },
    { text: 'todo 4', completed: false }
];

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

filter = {
    searchText: ''
}
todolist = document.querySelector('#todo-list');

function renderTodos(todos, filter) {
    const filteredTodos = todos.filter(todos => {
        return todos.text.toLowerCase().includes(filter.searchText.toLowerCase());
    })

    todolist.innerHTML = ``;
    const incompleteTodos = todos.filter(todo => {
        return !todo.completed
    })


    let tasksLeft = document.createElement('p');
    tasksLeft.innerText = `You have ${incompleteTodos.length} left`;
    todolist.appendChild(tasksLeft);


    filteredTodos.forEach(todo => {
        newTodo = document.createElement('p');
        newTodo.innerText = todo.text;
        todolist.appendChild(newTodo);
    })

}


renderTodos(todos, filter)






document.querySelector('#create-todo').addEventListener('click', (e) => {

})

document.querySelector('#filter-todo').addEventListener('input', (e) => {
    filter.searchText = e.target.value;
    renderTodos(todos, filter)
})