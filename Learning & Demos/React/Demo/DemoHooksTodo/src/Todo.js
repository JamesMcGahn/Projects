import React from 'react';
import useToggleState from './hooks/useToggleState'
import EditForm from './EditForm';

import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';

function Todo({ task, completed, removeTodo, id, toggleTodo, editTodo }) {
    const [isEditing, toggleEdit] = useToggleState(false)
    return (
        <ListItem>
            {isEditing ?
                <EditForm task={task} id={id} editTodo={editTodo} toggleEdit={toggleEdit} /> :
                <>
                    <Checkbox tabIndex={-1} checked={completed} onClick={() => toggleTodo(id)} />
                    <ListItemText style={{ textDecoration: completed ? 'line-through' : 'none' }} >
                        {task}
                    </ListItemText>
                    <ListItemSecondaryAction>
                        <IconButton aria-label="Delete">
                            <DeleteIcon onClick={() => removeTodo(id)} />
                        </IconButton>
                        <IconButton aria-label="Edit">
                            <EditIcon onClick={toggleEdit} />
                        </IconButton>
                    </ListItemSecondaryAction>

                </>
            }
        </ListItem >
    );
}

export default Todo;