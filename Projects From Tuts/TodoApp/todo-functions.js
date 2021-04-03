// returns saved todos from local

const getSavedTodos = function () {
    todosJSON = localStorage.getItem('todos');

    if (todosJSON !== null) {
        return JSON.parse(todosJSON)
    } else {
        return []
    }
}

// save todos to local
const saveTodos = function (todos) {
    localStorage.setItem('todos', JSON.stringify(todos))
}

const renderTodos = function (todos, filter) {

    let filteredTodos = todos.filter(todos => {
        const searchTextMatch = todos.text.toLowerCase().includes(filter.searchText.toLowerCase());
        const hideCompletedMatch = !filter.hideCompleted || !todos.completed
        return searchTextMatch && hideCompletedMatch

    })

    generateSummaryDOM();
    generateTodoDOM(filteredTodos)

}

const generateTodoDOM = function (todos) {
    todos.forEach(todo => {
        newTodo = document.createElement('div');
        // add todo completed check box 
        completedCheckbox = document.createElement('input');
        completedCheckbox.setAttribute('type', 'checkbox')
        newTodo.appendChild(completedCheckbox);
        // add todo text 
        newTodoText = document.createElement('span');
        newTodoText.innerText = todo.text;
        newTodo.appendChild(newTodoText);
        // add todo delete button
        deleteButton = document.createElement('button');
        deleteButton.innerText = 'X';
        newTodo.appendChild(deleteButton);


        todolist.appendChild(newTodo);
    })
}

const generateSummaryDOM = function () {
    todolist.innerHTML = ``;
    const incompleteTodos = todos.filter(todo => {
        return !todo.completed
    })
    let tasksLeft = document.createElement('p');
    tasksLeft.innerText = `You have ${incompleteTodos.length} left`;
    todolist.appendChild(tasksLeft);

}

function createTodo(newTodo) {
    todos.push({ text: newTodo, completed: false })
    saveTodos(todos)
    renderTodos(todos, filter)
}