import React, { useState } from 'react'
import TodoList from './TodoList'
import TodoForm from './TodoForm'


import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import { Typography } from '@material-ui/core';

export default function TodoApp() {
    const initial = [{ id: 1, task: "Walk The Goldfish", completed: true }]
    const [todos, setTodos] = useState(initial)

    const addTodo = newTodoText => {
        setTodos([...todos, { id: 4, task: newTodoText, completed: true }])
    }


    return (
        <Paper style={{
            padding: 0,
            margin: 0,
            height: '100vh',
            backgroundColor: '#fafafa'
        }}
            elevation={0}
        >
            <AppBar color="primary" position="static" style={{ height: '64px' }}>
                <Toolbar>
                    <Typography color='inherit'>Todos With Hooks</Typography>
                </Toolbar>
            </AppBar>
            <Grid
                container
                justify="center"
                style={{ marginTop: '1rem' }}
            >
                <Grid item xs={11} md={8} lg={4}>
                    <TodoForm addTodo={addTodo} />
                    <TodoList todos={todos} />
                </Grid>
            </Grid>

        </Paper>
    )
}
