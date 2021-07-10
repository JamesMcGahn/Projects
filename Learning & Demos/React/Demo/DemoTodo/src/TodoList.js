import React, { Component } from 'react';
import TodoForm from './TodoForm'
import Todo from './Todo'
import { v4 as uuidv4 } from 'uuid';

class Todolist extends Component {
    constructor(props) {
        super(props)
        this.state = {
            todos: []
        }

        this.addTodo = this.addTodo.bind(this)
        this.removeTodo = this.removeTodo.bind(this)
        this.completeTodo = this.completeTodo.bind(this)
        this.updateTodo = this.updateTodo.bind(this)
        this.editTodo = this.editTodo.bind(this)
    }

    addTodo(todo) {
        let newTodo = { ...todo, id: uuidv4(), updating: false }
        this.setState({ todos: [...this.state.todos, newTodo] })
    }

    removeTodo(id) {
        const removed = this.state.todos.filter(todo => todo.id !== id)
        this.setState({ todos: removed })
    }

    completeTodo(id) {
        const toggleCompleted = this.state.todos.map(todo => {
            return todo.id === id ? { ...todo, completed: !todo.completed } : { ...todo }
        })
        this.setState({ todos: toggleCompleted })
    }

    updateTodo(id) {
        const toggleUpdate = this.state.todos.map(todo => {
            return todo.id === id ? { ...todo, updating: true } : { ...todo }
        })
        this.setState({ todos: toggleUpdate })
    }

    editTodo(id, newTitle) {
        console.log(newTitle)
        const editTodo = this.state.todos.map(todo => {
            return todo.id === id ? { ...todo, updating: false, title: newTitle } : { ...todo }
        })
        this.setState({ todos: editTodo })
    }

    render() {
        return <div>
            <TodoForm addTodo={this.addTodo} />
            {this.state.todos.map(todo => <Todo key={todo.id} title={todo.title} updating={todo.updating} id={todo.id} completed={todo.completed}
                removeTodo={this.removeTodo} completeTodo={this.completeTodo} updateTodo={this.updateTodo} editTodo={this.editTodo} />)}
        </div>
    }
}

export default Todolist