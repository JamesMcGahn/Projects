from fns import get_todos, write_todos

while True:
    user_action = input("Type add, show, complete or exit: ")
    user_action = user_action.strip()

    if user_action.startswith("add"):
        todo = user_action[4:]

        todos = get_todos()
        todos.append(todo + "\n")

        write_todos(todos)

    elif user_action.startswith("show"):
        todos = get_todos()
        for index, item in enumerate(todos):
            item = item.strip("\n")
            print(f"{index + 1}-{item}")
    elif user_action.startswith("edit"):
        try:
            number = int(user_action[5:]) - 1

            todos = get_todos()

            new_todo = input("Enter new todo: ") + "\n"
            todos[number] = new_todo

            write_todos(todos)
        except IndexError:
            print("There is no item with that number")
            continue
        except ValueError:
            print("You command is not valid")
            continue
    elif user_action.startswith("complete"):
        try:
            todos = get_todos()
            number = int(user_action[9:]) - 1
            todo_to_rm = todos[number].replace("\n", "")
            todos.pop(number)
            write_todos(todos)
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
