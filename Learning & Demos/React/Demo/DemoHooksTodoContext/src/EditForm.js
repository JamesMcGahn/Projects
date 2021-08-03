import React, { useContext } from 'react';
import { TodosContext } from './context/todos.context'

import TextField from "@material-ui/core/TextField";
import { UserInputState } from './hooks/userInputState';
function EditForm({ task, id, toggleEdit }) {
    const [value, handleChange, reset,] = UserInputState(task)
    const { dispatch } = useContext(TodosContext)
    return (
        <form onSubmit={e => {
            e.preventDefault();
            dispatch({ type: "EDIT", newTask: value, id: id })
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