// ****** SELECT ITEMS **********
const alert = document.querySelector('.alert')
const form = document.querySelector('.grocery-form')
const grocery = document.querySelector('#grocery')
const submitBtn = document.querySelector('.submit-btn')
const container = document.querySelector('.grocery-container')
const list = document.querySelector('.grocery-list')
const clearBtn = document.querySelector('.clear-btn')

// edit option
let editIndex;
let editFlag = false;
let groceries;


// ****** FUNCTIONS **********
const displayAlert = function (text, action) {
    alert.textContent = `${text}`
    alert.classList.add(`alert-${action}`)
    setTimeout(() => {
        alert.textContent = ``
        alert.classList.remove(`alert-${action}`)
    }, 1500)
}

const newItem = function (itemName) {
    const id = new Date().getTime().toString() + Math.floor(Math.random() * 1000)
    const newItem = { id: id, name: itemName }
    displayAlert('Success', 'success')
    renderItems(itemName, id)
    groceries.push(newItem)
    saveLocalStore()
}

const renderItems = function (grocItem, id) {
    console.log(id)
    const element = document.createElement('article')
    element.classList.add('grocery-item')
    const attr = document.createAttribute('data-id')
    attr.value = id;
    element.setAttributeNode(attr)
    element.innerHTML = `<p class="title">${grocItem}</p>
        <div class="btn-container">
        <button type="button" class="edit-btn">
        <i class="fas fa-edit"></i>
        </button>
        <button type="button" class="delete-btn">
        <i class="fas fa-trash"></i>
        </button>
        </div>
        `
    list.appendChild(element)
    container.classList.add('show-container')
}

const renderList = function () {
    list.innerHTML = ''
    groceries.forEach(item => renderItems(item.name, item.id))
}

const addItem = function (e) {
    e.preventDefault()
    const value = grocery.value

    if (value && !editFlag) {
        newItem(value)
    } else if (value && editFlag) {
        editSubmit(value, editIndex)
    } else {
        displayAlert('No value entered', 'danger')
    }
    grocery.value = ''
}

const deleteItem = function (itemID) {
    console.log('del', itemID)
    const index = groceries.findIndex(item => item.id === itemID)
    groceries.splice(index, 1)
    saveLocalStore();
    renderList();
    displayAlert('Item Deleted', 'success')
}

const editItem = function (itemID) {
    const index = groceries.findIndex(item => item.id === itemID)
    grocery.value = groceries[index].name
    editFlag = true;
    editIndex = index
}

const editSubmit = function (value, editIndex) {
    groceries[editIndex].name = value
    editFlag = false;
    saveLocalStore();
    renderList()
    displayAlert('Item Edited', 'success')
}

const clearList = function () {
    groceries = []
    saveLocalStore()
    container.classList.remove('show-container')
    list.innerHTML = ''
}

// ****** LOCAL STORAGE **********
const getLocalStore = function () {
    try {
        if (localStorage.getItem('groceries')) {
            groceries = JSON.parse(localStorage.getItem('groceries'))
            renderList()
        } else {
            groceries = []
        }
    } catch {
        groceries = []
    }

}

const saveLocalStore = function () {
    localStorage.setItem('groceries', JSON.stringify(groceries))
}

const listClickHandler = function (e) {
    console.log(e.target)
    if (e.target.classList.contains('fa-edit')) {
        const edItem = e.target.closest('article').dataset.id
        console.log(edItem)
        editItem(edItem)
    } else if (e.target.classList.contains('fa-trash')) {
        const delItem = e.target.closest('article').dataset.id
        deleteItem(delItem)
    } else {
        return
    }
}


// ****** SETUP ITEMS **********
const init = function () {
    getLocalStore()
}
init();

// ****** EVENT LISTENERS **********
form.addEventListener('submit', addItem)
clearBtn.addEventListener('click', clearList)
list.addEventListener('click', listClickHandler)