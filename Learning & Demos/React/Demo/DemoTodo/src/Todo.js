import React, { Component } from 'react'

class Todo extends Component {
    constructor(props) {
        super(props)

        this.handleCompleted = this.handleCompleted.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
    }
    handleDelete() {
        this.props.removeTodo(this.props.id)
        console.log('click')
    }
    handleCompleted() {


    }

    render() {
        return (
            <div>

                <input type="checkbox" onchange={this.handleCompleted} ></input>
                <h3>{this.props.title}</h3>
                <button onClick={this.handleDelete}>Delete</button>
            </div>
        )
    }
}

export default Todo