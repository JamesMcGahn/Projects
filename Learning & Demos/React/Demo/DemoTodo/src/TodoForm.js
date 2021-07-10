import React, { Component } from 'react'

class TodoForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: "",
            completed: false,
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }


    handleChange(evt) {
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }

    handleSubmit(evt) {
        evt.preventDefault()
        this.props.addTodo(this.state)
        this.setState({ title: "" })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="title">Title</label>
                <input name="title" value={this.state.title} onChange={this.handleChange}></input>
                <button>New Todo</button>
            </form>
        )
    }
}



export default TodoForm