import React, { createContext, useReducer } from 'react'
import todoReducer from '../reducers/todo.reducer'

export const TodosContext = createContext()

const initial = JSON.parse(window.localStorage.getItem('todos' || '[]'));
export function TodosProvider(props) {

    const [todos, dispatch] = useReducer(todoReducer, initial)

    return (
        <TodosContext.Provider value={{ todos, dispatch }} >
            {props.children}
        </TodosContext.Provider>
    )
}

