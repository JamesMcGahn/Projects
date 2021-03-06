let input = prompt("Enter 'new' to add a todo, 'list' to see the list, 'delete' to remove a todo or 'quit' to exit");

let todoList = [];

while (input !== 'quit') {
    if (input === 'new') {
        todoList.push(prompt('Enter your todo or quit'));
        input = prompt("Enter 'new' to add a todo, 'list' to see the list, 'delete' to remove a todo or 'quit' to exit");
    } else if (input === 'list') {
        console.log("Your todos:");
        console.log("=================================");
        for (let i = 0; i <= (todoList.length - 1); i++) {
            console.log(`${i}:  ${todoList[i]}`);
        }
        console.log("=================================");
        input = prompt("Enter 'new' to add a todo, 'list' to see the list, 'delete' to remove a todo or 'quit' to exit");
    } else if (input === 'delete') {
        position = prompt("what number todo would you like to delete?");
        todoList.splice(position, 1);
        input = prompt("Enter 'new' to add a todo, 'list' to see the list, 'delete' to remove a todo or 'quit' to exit");
    } else {
        input = prompt("Enter 'new' to add a todo, 'list' to see the list, 'delete' to remove a todo or 'quit' to exit");
    }
}
