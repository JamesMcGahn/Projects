import { uuid } from 'uuidv4';
import useLocalStorageState from './useLocalStorageState'

function useTodoState(initialTodos) {
    const [todos, setTodos] = useLocalStorageState('todos', initialTodos)

    const addTodo = newTodoText => {
        setTodos([...todos, { id: uuid(), task: newTodoText, completed: false }])
    }

    const editTodo = (editText, id) => {
        const editedTodos = todos.map(todo => {
            return todo.id === id ? { ...todo, task: editText } : todo
        })
        setTodos(editedTodos)

    }

    const removeTodo = todoId => {
        const remainingTodos = todos.filter(todo => todo.id !== todoId)
        setTodos(remainingTodos)
    }

    const toggleTodo = todoId => {
        const toggledTodos = todos.map(todo => {
            return todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
        })
        setTodos(toggledTodos)
    }
    return {
        addTodo: addTodo,
        removeTodo: removeTodo,
        editTodo: editTodo,
        toggleTodo: toggleTodo,
        todos: todos
    }
}

export default useTodoState







