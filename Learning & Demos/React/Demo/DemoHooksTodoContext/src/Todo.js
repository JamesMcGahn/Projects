import React, { useContext } from 'react';
import useToggleState from './hooks/useToggleState'
import EditForm from './EditForm';
import { TodosContext } from './context/todos.context'

import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';

function Todo({ task, completed, id, }) {
    const [isEditing, toggleEdit] = useToggleState(false)
    const { dispatch } = useContext(TodosContext)
    return (
        <ListItem>
            {isEditing ?
                <EditForm task={task} id={id} toggleEdit={toggleEdit} /> :
                <>
                    <Checkbox tabIndex={-1} checked={completed} onClick={() => dispatch({ type: "TOGGLE", id: id })} />
                    <ListItemText style={{ textDecoration: completed ? 'line-through' : 'none' }} >
                        {task}
                    </ListItemText>
                    <ListItemSecondaryAction>
                        <IconButton aria-label="Delete">
                            <DeleteIcon onClick={() => dispatch({ type: "REMOVE", id: id })} />
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