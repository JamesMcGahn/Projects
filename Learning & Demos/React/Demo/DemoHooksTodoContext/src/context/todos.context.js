import React, { createContext } from 'react'
import useTodoState from '../hooks/useTodoState'

export const TodosContext = createContext()

export function TodosProvider(props) {
    const initial = JSON.parse(window.localStorage.getItem('todos' || '[]'));
    const todosStuff = useTodoState(initial)

    return (
        <TodosContext.Provider value={todosStuff} >
            {props.children}
        </TodosContext.Provider>
    )
}

