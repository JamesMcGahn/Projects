// define vars
const form = document.querySelector('#task-form')
const taskList = document.querySelector('.collection')
const clearBtn = document.querySelector('.clear-tasks')
const filter = document.querySelector('#filter')
const taskInput = document.querySelector('#task')

//load e listeners
loadEventListeners();

//load all e listeners
function loadEventListeners() {
    //dom load  
    document.addEventListener('DOMContentLoaded', getTasks)

    // add task
    form.addEventListener('submit', addTask);
    //remove
    taskList.addEventListener('click', removeTask);
    //clear tasks
    clearBtn.addEventListener('click', clearTasks);
    //filter
    filter.addEventListener('keyup', filterTasks);
}

function getTasks() {
    let tasks;
    if (!localStorage.tasks) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'))
    }
    tasks.forEach(task => {
        const li = document.createElement('li');
        li.className = 'collection-item';
        li.appendChild(document.createTextNode(task));
        const link = document.createElement('a');
        link.className = 'delete-item secondary-content';
        link.innerHTML = '<i class="fa fa-remove"></i>'
        li.appendChild(link);
        taskList.appendChild(li);
    })

}

//add task
function addTask(e) {
    if (!taskInput.value) {
        alert('add a task')
    } else {
        // create li element
        const li = document.createElement('li');
        li.className = 'collection-item';
        li.appendChild(document.createTextNode(taskInput.value));
        const link = document.createElement('a');
        link.className = 'delete-item secondary-content';
        link.innerHTML = '<i class="fa fa-remove"></i>'
        li.appendChild(link);
        taskList.appendChild(li);
        // store in local storage
        storeInLocal(taskInput.value)
        taskInput.value = '';




    }
    e.preventDefault();
}


function storeInLocal(task) {
    let tasks;
    if (!localStorage.tasks) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'))
    }
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));

}


// remove task
function removeTask(e) {
    if (e.target.parentElement.classList.contains('delete-item')) {
        e.target.parentElement.parentElement.remove()
    }

    removeFromLocal(e.target.parentElement.parentElement)
}

function removeFromLocal(taskItem) {
    if (!localStorage.tasks) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'))
    }
    tasks.forEach((task, index) => {
        if (taskItem.textContent === task) {
            tasks.splice(index, 1);
        }
    })

    localStorage.setItem('tasks', JSON.stringify(tasks));

}


function clearTasks(e) {
    while (taskList.firstChild) {
        taskList.removeChild(taskList.firstChild)
    }

    // clear from local
    clearLocal();

}

function clearLocal() {
    localStorage.clear('tasks');
}

function filterTasks(e) {
    const text = e.target.value.toLowerCase();
    document.querySelectorAll('.collection-item').forEach((task) => {
        const item = task.firstChild.textContent;
        if (item.toLowerCase().indexOf(text) != -1) {
            task.style.display = 'block';
        } else {
            task.style.display = 'none';
        }
    })
}