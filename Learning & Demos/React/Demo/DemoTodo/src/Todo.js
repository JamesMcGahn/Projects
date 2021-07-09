import React, { Component } from 'react'
import './Todo.css'

class Todo extends Component {
    constructor(props) {
        super(props)

        this.handleCompleted = this.handleCompleted.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
        this.handleUpdate = this.handleUpdate.bind(this)
    }
    handleDelete() {
        this.props.removeTodo(this.props.id)
    }
    handleCompleted() {
        this.props.completeTodo(this.props.id)
    }
    handleUpdate() {
        this.props.updateTodo(this.props.id)
        console.log('click')
    }

    render() {
        let completeStyle = this.props.completed ? "completed" : ""
        return (
            <div>

                <input type="checkbox" onChange={this.handleCompleted} ></input>
                <h3 className={completeStyle} dblclick={this.props.updateTodo}>{this.props.title}</h3>
                <button onClick={this.handleDelete}>Delete</button>
            </div>
        )
    }
}

export default Todo