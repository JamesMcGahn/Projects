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
    }

    addTodo(todo) {
        let newTodo = { ...todo, id: uuidv4() }
        this.setState({ todos: [...this.state.todos, newTodo] })
    }

    removeTodo(id) {
        const removed = this.state.todos.filter(todo => todo.id !== id)
        this.setState({ todos: removed })
    }

    completeTodo(todo) {

    }

    render() {
        return <div>
            <TodoForm addTodo={this.addTodo} />
            {this.state.todos.map(todo => <Todo title={todo.title} id={todo.id} removeTodo={this.removeTodo} completeTodo={this.completeTodo} />)}
        </div>
    }
}

export default Todolist