import React, { createContext, useReducer } from 'react'
import todoReducer from '../reducers/todo.reducer'
import useLocalStorageState from '../hooks/useLocalStorageState'

export const TodosContext = createContext()
export const DispatchContext = createContext()

const initial = JSON.parse(window.localStorage.getItem('todos' || '[]'));
export function TodosProvider(props) {

    const [todos, dispatch] = useLocalStorageState("todos", initial, todoReducer)

    return (
        <TodosContext.Provider value={todos} >
            <DispatchContext.Provider value={dispatch}>
                {props.children}
            </DispatchContext.Provider>
        </TodosContext.Provider>
    )
}

