// storage controller
const StorageCtrl = (function () {
    return {
        storeItem: function (item) {
            let items = []
            if (!localStorage.getItem('items')) {
                items = [];
                items.push(item)
                localStorage.setItem('items', JSON.stringify(items))
            } else {
                items = JSON.parse(localStorage.getItem('items'))
                items.push(item)
                localStorage.setItem('items', JSON.stringify(items))
            }
        },
        getItemsFromStorage: function () {
            let items = []
            if (!localStorage.getItem('items')) {
                items = [];
            } else {
                items = JSON.parse(localStorage.getItem('items'))
            }
            return items
        },
        upateItemStorage: function (updatedItem) {
            items = JSON.parse(localStorage.getItem('items'))
            items.forEach((item, index) => {
                if (updatedItem.id === item.id) {
                    items.splice(index, 1, updatedItem)
                }
            })

            localStorage.setItem('items', JSON.stringify(items))
        },
        deleteItemFromStorage: function (id) {
            items = JSON.parse(localStorage.getItem('items'))
            items.forEach((item, index) => {
                if (id === item.id) {
                    items.splice(index, 1)
                }
            })

            localStorage.setItem('items', JSON.stringify(items))
        },
        clearItemsFromStorage: function () {
            localStorage.removeItem('items')
        }

    }
})()

// item controller
const ItemCtrl = (function () {
    // item constructor
    const Item = function (id, name, calories) {
        this.id = id;
        this.name = name;
        this.calories = calories;
    }
    // data structure / state
    const data = {
        items: StorageCtrl.getItemsFromStorage(),
        currentItem: null,
        totalCalories: 0
    }
    return {
        logData: function () {
            return data
        },
        getItems: function () {
            return data.items;
        },
        addItem: function (name, calories) {
            let ID;
            if (data.items.length > 0) {
                ID = data.items[data.items.length - 1].id + 1
            } else {
                ID = 0;
            }

            calorie = parseInt(calories);
            newItem = new Item(ID, name, calorie);
            data.items.push(newItem);
            return newItem;
        },
        getTotalCalories: function () {
            let total = 0;
            data.items.forEach(item => {
                total += item.calories
            })

            data.totalCalories = total;
            return data.totalCalories
        },
        getItemByID: function (id) {
            let found = null;
            data.items.forEach(item => {
                if (item.id === id) {
                    found = item
                }
            })
            return found
        },
        setCurrentItem: function (item) {
            data.currentItem = item;
        },
        getCurrentItem: function () {
            return data.currentItem
        },
        updateItem: function (name, calories) {
            calorie = parseInt(calories)
            let found = null;
            data.items.forEach(item => {
                if (item.id === data.currentItem.id) {
                    item.name = name;
                    item.calories = calorie
                    found = item;
                }

            })
            return found
        },
        deleteItem: function (id) {
            const ids = data.items.map(item => {
                return item.id
            })
            const index = ids.indexOf(id)
            data.items.splice(index, 1)
        },
        clearAllItems: function () {
            data.items = [];
        }
    }

})()

// ui controller
const UICtrl = (function () {
    const UISelectors = {
        itemList: '#item-list',
        listItems: '#item-list li',
        addBtn: '.add-btn',
        updateBtn: '.update-btn',
        deleteBtn: '.delete-btn',
        backBtn: '.back-btn',
        clearBtn: '.clear-btn',
        itemNameInput: '#item-name',
        itemCaloriesInput: '#item-calories',
        totalCalories: '.total-calories'
    }
    return {
        populateItemList: function (items) {
            let html = ''
            items.forEach(item => {
                html += `
    <li class="collection-item" id="item-${item.id}">
          <strong>${item.name}: </strong> <em>${item.calories} Calories</em>
          <a href="#" class="secondary-content">
            <i class="edit-item fa fa-pencil"></i>
          </a>
        </li>
    `
            });
            //insert
            document.querySelector(UISelectors.itemList).innerHTML = html;
        },
        getItemInput: function () {
            return {
                name: document.querySelector(UISelectors.itemNameInput).value,
                calories: document.querySelector(UISelectors.itemCaloriesInput).value
            }
        },
        addListItem: function (item) {
            document.querySelector(UISelectors.itemList).style.display = 'block';
            const li = document.createElement('li');
            li.className = 'collection-item'
            li.id = `item-${item.id}`;
            li.innerHTML = ` <strong>${item.name}: </strong> <em>${item.calories} Calories</em>
                            <a href="#" class="secondary-content">
                        <i class="edit-item fa fa-pencil"></i>
                            </a>`
            document.querySelector(UISelectors.itemList).insertAdjacentElement('beforeend', li)

        },
        clearInput: function () {
            document.querySelector(UISelectors.itemNameInput).value = '';
            document.querySelector(UISelectors.itemCaloriesInput).value = '';
        },
        hideList: function () {
            document.querySelector(UISelectors.itemList).style.display = 'none';
        },
        getSelectors: function () {
            return UISelectors
        },
        showTotalCalories: function (totalCalories) {
            document.querySelector(UISelectors.totalCalories).textContent = totalCalories;
        },
        clearEditState: function () {
            UICtrl.clearInput();
            document.querySelector(UISelectors.updateBtn).style.display = 'none';
            document.querySelector(UISelectors.deleteBtn).style.display = 'none';
            document.querySelector(UISelectors.backBtn).style.display = 'none';
            document.querySelector(UISelectors.addBtn).style.display = 'inline';
        },
        addItemToForm: function () {
            document.querySelector(UISelectors.itemNameInput).value = ItemCtrl.getCurrentItem().name;
            document.querySelector(UISelectors.itemCaloriesInput).value = ItemCtrl.getCurrentItem().calories;
            UICtrl.showEditState();
        },
        showEditState: function () {
            document.querySelector(UISelectors.updateBtn).style.display = 'inline';
            document.querySelector(UISelectors.deleteBtn).style.display = 'inline';
            document.querySelector(UISelectors.backBtn).style.display = 'inline';
            document.querySelector(UISelectors.addBtn).style.display = 'none';
        },
        updateListItem: function (item) {
            let listItems = document.querySelectorAll(UISelectors.listItems)
            listItems = Array.from(listItems)
            listItems.forEach(items => {
                const itemId = items.getAttribute('id');
                if (itemId === items.id) {
                    document.querySelector(`#item-${item.id}`).innerHTML = `<strong>${item.name}: </strong> <em>${item.calories} Calories</em>
                    <a href="#" class="secondary-content">
                <i class="edit-item fa fa-pencil"></i>
                    </a>`
                }
            })
        },
        deleteListItem: function (id) {
            const item = document.querySelector(`#item-${id}`)
            item.remove();
        },
        removeItems: function () {
            let listItems = document.querySelectorAll(UISelectors.listItems)
            listItems = Array.from(listItems)
            listItems.forEach(items => {
                items.remove()

            })
        }
    }
})()

//app controller
const App = (function (ItemCtrl, UICtrl, StorageCtrl) {
    //load events
    const loadEventListeners = function () {
        const UISelectors = UICtrl.getSelectors();

        document.querySelector(UISelectors.addBtn).addEventListener('click', itemAddSubmit)
        document.querySelector(UISelectors.itemList).addEventListener('click', itemUpdateClick)
        document.querySelector(UISelectors.updateBtn).addEventListener('click', itemUpdateSubmit)
        document.querySelector(UISelectors.backBtn).addEventListener('click', UICtrl.clearEditState)
        document.querySelector(UISelectors.deleteBtn).addEventListener('click', itemDeleteSubmit)
        document.querySelector(UISelectors.clearBtn).addEventListener('click', clearAllItemsClick)
        document.addEventListener('keypress', (e) => {
            if (e.keycode === 13 || e.which === 13) {
                e.preventDefault();
                return false
            }
        })
    }
    const itemAddSubmit = function (e) {
        e.preventDefault();
        const input = UICtrl.getItemInput()

        if (input.name !== '' && input.calories !== '') {
            const newItem = ItemCtrl.addItem(input.name, input.calories);
            UICtrl.addListItem(newItem);

            const totalCalories = ItemCtrl.getTotalCalories();
            UICtrl.showTotalCalories(totalCalories)
            StorageCtrl.storeItem(newItem)
            UICtrl.clearInput()

        }
    }

    const itemUpdateClick = function (e) {
        e.preventDefault();
        if (e.target.classList.contains('edit-item')) {
            const listId = e.target.parentNode.parentNode.id
            const listIdarr = listId.split('-')
            const id = parseInt(listIdarr[1])

            const itemToEdit = ItemCtrl.getItemByID(id)
            ItemCtrl.setCurrentItem(itemToEdit)
            UICtrl.addItemToForm()
        }
    }

    const itemUpdateSubmit = function (e) {
        const input = UICtrl.getItemInput()
        const updatedItem = ItemCtrl.updateItem(input.name, input.calories);
        UICtrl.updateListItem(updatedItem)
        const totalCalories = ItemCtrl.getTotalCalories();
        UICtrl.showTotalCalories(totalCalories)
        StorageCtrl.upateItemStorage(updatedItem)
        UICtrl.clearEditState()

        e.preventDefault()
    }

    const itemDeleteSubmit = function (e) {
        const currentItem = ItemCtrl.getCurrentItem()
        ItemCtrl.deleteItem(currentItem.id)
        UICtrl.deleteListItem(currentItem.id)
        const totalCalories = ItemCtrl.getTotalCalories();
        UICtrl.showTotalCalories(totalCalories)
        UICtrl.clearEditState()
        StorageCtrl.deleteItemFromStorage(currentItem.id)
        e.preventDefault()
    }
    const clearAllItemsClick = function () {
        ItemCtrl.clearAllItems();
        UICtrl.removeItems()
        StorageCtrl.clearItemsFromStorage()
        const totalCalories = ItemCtrl.getTotalCalories();
        UICtrl.showTotalCalories(totalCalories)
        UICtrl.hideList()
    }





    return {
        init: function () {
            console.log('Initializing App')
            UICtrl.clearEditState();
            const items = ItemCtrl.getItems();
            if (items.length === 0) {
                UICtrl.hideList();
            } else {
                UICtrl.populateItemList(items)
            }


            loadEventListeners();
        }
    }

})(ItemCtrl, UICtrl, StorageCtrl)


App.init();