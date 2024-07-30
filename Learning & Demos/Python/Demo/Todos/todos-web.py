import streamlit as st
from fns import get_todos, write_todos

todos = get_todos()


def add_todo():
    todo = st.session_state["new_todo"] + "\n"
    todos.append(todo)
    write_todos(todos)
    st.session_state["new_todo"] = ""


st.title("My Todo App")
st.subheader("This is my todo app")
st.write("Enhance your productivity")
st.text_input(label="Enter a todo", on_change=add_todo, key="new_todo")
for index, todo in enumerate(todos):
    checkbox = st.checkbox(todo, key=f"{todo} - {index}")
    if checkbox:
        todos.pop(index)
        write_todos(todos)
        del st.session_state[f"{todo} - {index}"]
        st.rerun()
