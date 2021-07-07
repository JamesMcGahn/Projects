import React, { Component } from 'react'

class NewBoxForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            width: "",
            height: "",
            color: "",

        }
        this.handleForm = this.handleForm.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleForm(evt) {
        this.setState({ [evt.target.name]: evt.target.value })
    }

    handleSubmit(evt) {
        console.log('hi')
        evt.preventDefault()
        this.props.addBox(this.state)
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit} className="NewBoxForm">
                <label htmlFor="width">width</label>
                <input name="width" value={this.state.width} onChange={this.handleForm} placeholder="250px" />
                <label htmlFor="height">height</label>
                <input name="height" value={this.state.height} onChange={this.handleForm} placeholder="250px" />
                <label htmlFor="color">width</label>
                <input name="color" value={this.state.color} onChange={this.handleForm} />
                <button>Submit Box</button>
            </ form>
        )
    }
}

export default NewBoxForm;