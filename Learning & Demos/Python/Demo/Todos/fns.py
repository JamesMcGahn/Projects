def get_todos(filename="todos.txt"):
    """Read a text file and return the list of todo items"""
    with open(filename, "r") as f:
        file_todos = f.readlines()
    return file_todos


def write_todos(todos, filename="todos.txt"):
    """Write todos to text file"""
    with open(filename, "w") as file:
        file.writelines(todos)

