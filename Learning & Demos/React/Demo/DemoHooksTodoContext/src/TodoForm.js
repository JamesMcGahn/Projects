import React, { useContext } from 'react';
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";

import { UserInputState } from './hooks/userInputState';
import { TodosContext } from './context/todos.context'

function TodoForm(props) {
    const [value, handleChange, reset] = UserInputState("")
    const { addTodo } = useContext(TodosContext)
    return (
        <Paper style={{ margin: '1rem 0', padding: '0 1rem' }}>
            <form onSubmit={e => {
                e.preventDefault();
                addTodo(value)
                reset()
            }}>
                <TextField value={value} onChange={handleChange}
                    label='Add New Todo' margin='normal' fullWidth />

            </form >
        </Paper >

    );
}

export default TodoForm;