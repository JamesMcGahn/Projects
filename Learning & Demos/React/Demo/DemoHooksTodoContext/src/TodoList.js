import React, { useContext } from 'react';
import Todo from './Todo'
import { TodosContext } from './context/todos.context'

import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";


function TodoList(props) {
    const { todos } = useContext(TodosContext)
    return (
        <Paper>
            <List>
                {todos.map(todo => (
                    <>
                        <Todo id={todo.id} task={todo.task} key={todo.id} completed={todo.completed} />
                        <Divider />
                    </>
                ))}
            </List>

        </Paper >
    );
}

export default TodoList;