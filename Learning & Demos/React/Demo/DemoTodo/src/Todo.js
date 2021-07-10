import React, { Component } from 'react'
import './Todo.css'

class Todo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            newTitle: this.props.title
        }
        this.handleCompleted = this.handleCompleted.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
        this.handleUpdate = this.handleUpdate.bind(this)
        this.handleEdit = this.handleEdit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }
    handleDelete() {
        this.props.removeTodo(this.props.id)
    }
    handleCompleted() {
        this.props.completeTodo(this.props.id)
    }
    handleUpdate() {
        this.props.updateTodo(this.props.id)

    }
    handleEdit(evt) {
        evt.preventDefault()
        this.props.editTodo(this.props.id, this.state.newTitle)

    }

    handleChange(evt) {
        this.setState({
            newTitle: evt.target.value
        })
    }


    render() {
        let completeStyle = this.props.completed ? "completed" : ""
        return (
            <div>

                <input type="checkbox" onChange={this.handleCompleted} ></input>
                {this.props.updating === true ? <form onSubmit={this.handleEdit}><input name="title" value={this.state.newTitle} onChange={this.handleChange}></input></form> : <h3 className={completeStyle} onClick={this.handleUpdate}>{this.props.title}</h3>}
                <button onClick={this.handleDelete}>Delete</button>
            </div>
        )
    }
}

export default Todo