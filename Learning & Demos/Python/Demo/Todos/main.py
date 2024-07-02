while True:
    user_action = input("Type add, show, complete or exit: ")
    user_action = user_action.strip()

    match user_action:
        case "add":
            todo = input("Enter a todo: ") + "\n"
            with open("todos.txt", "r") as file:
                todos = file.readlines()
                todos.append(todo)

            with open("todos.txt", "w") as file:
                file.writelines(todos)

        case "show":
            with open("todos.txt", "r") as file:
                todos = file.readlines()
                file.close()
            for index, item in enumerate(todos):
                item = item.strip("\n")
                print(f"{index + 1}-{item}")
        case "edit":
            number = int(input("Enter the number of the todo to edit: "))
            number = number - 1

            with open("todos.txt", "r") as file:
                todos = file.readlines()

            new_todo = input("Enter new todo: ") + "\n"
            todos[number] = new_todo

            with open("todos.txt", "w") as file:
                file.writelines(todos)
        case "complete":
            with open("todos.txt", "r") as file:
                todos = file.readlines()
            number = int(input("Enter the number of the todo to complete: "))
            todo_to_rm = todos[number - 1].replace("\n", "")
            todos.pop(number - 1)
            with open("todos.txt", "w") as file:
                file.writelines(todos)
            print(f"{todo_to_rm} was removed")
        case "exit":
            break
