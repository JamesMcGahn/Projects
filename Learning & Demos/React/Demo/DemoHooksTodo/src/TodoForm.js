import React from 'react';
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";

import userInputState from './hooks/userInputState';

function TodoForm({ addTodo }) {
    const [value, handleChange, reset] = userInputState("")
    return (
        <Paper>
            <form onSubmit={e => {
                e.preventDefault();
                addTodo(value)
                reset()
            }}>
                <TextField value={value} onChange={handleChange}></TextField>

            </form >
        </Paper >

    );
}

export default TodoForm;