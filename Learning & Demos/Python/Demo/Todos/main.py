while True:
    user_action = input("Type add, show, complete or exit: ")
    user_action = user_action.strip()

    if user_action.startswith("add"):
        todo = user_action[4:]
        with open("todos.txt", "r") as file:
            todos = file.readlines()
            todos.append(todo + "\n")

        with open("todos.txt", "w") as file:
            file.writelines(todos)

    elif user_action.startswith("show"):
        with open("todos.txt", "r") as file:
            todos = file.readlines()
            file.close()
        for index, item in enumerate(todos):
            item = item.strip("\n")
            print(f"{index + 1}-{item}")
    elif user_action.startswith("edit"):
        try:
            number = int(user_action[5:]) - 1

            with open("todos.txt", "r") as file:
                todos = file.readlines()

            new_todo = input("Enter new todo: ") + "\n"
            todos[number] = new_todo

            with open("todos.txt", "w") as file:
                file.writelines(todos)
        except IndexError:
            print("There is no item with that number")
            continue
        except ValueError:
            print("You command is not valid")
            continue
    elif user_action.startswith("complete"):
        try:
            with open("todos.txt", "r") as file:
                todos = file.readlines()
            number = int(user_action[9:]) - 1
            todo_to_rm = todos[number].replace("\n", "")
            todos.pop(number)
            with open("todos.txt", "w") as file:
                file.writelines(todos)
            print(f"{todo_to_rm} was removed")
        except IndexError:
            print("There is no item with that number")
            continue
        except ValueError:
            print("You command is not valid")
            continue
    elif user_action.startswith("exit"):
        break
    else:
        print("Command is not valid")
