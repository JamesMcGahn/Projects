// storage controller


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
        items: [
            { id: 0, name: 'Steak Dinner', calories: 1200 },
            { id: 1, name: 'Cookie', calories: 1200 },
            { id: 2, name: 'Cheese Stick', calories: 1200 }
        ],
        currentItem: null,
        totalCalories: 0
    }
    return {
        logData: function () {
            return data
        },
        getItems: function () {
            return data.items;
        }
    }

})()

// ui controller
const UICtrl = (function () {
    const UISelectors = {
        itemList: '#item-list'
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
        }
    }
})()

//app controller
const App = (function (ItemCtrl, UICtrl) {
    return {
        init: function () {
            console.log('Initializing App')
            const items = ItemCtrl.getItems();
            UICtrl.populateItemList(items)
        }
    }
})(ItemCtrl, UICtrl)


App.init();