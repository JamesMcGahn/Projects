import React from 'react';
import TextField from "@material-ui/core/TextField";
import { UserInputState } from './hooks/userInputState';
function EditForm({ task, id, editTodo, toggleEdit }) {
    const [value, handleChange, reset,] = UserInputState(task)

    return (
        <form onSubmit={e => {
            e.preventDefault();
            editTodo(value, id)
            reset()
            toggleEdit()
        }}>
            <TextField
                margin='normal'
                value={value}
                onChange={handleChange}
                fullWidth />

        </form >
    );
}

export default EditForm;