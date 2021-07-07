import React, { Component } from 'react'

class Box extends Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick() {
        this.props.removeBox(this.props.id)
        console.log('clicked')
    }

    render() {
        return (
            <div className="Box" style={{ height: this.props.height, width: this.props.width, backgroundColor: this.props.background }} >
                <h1>{`${this.props.background} Box`}</h1>
                <button onClick={this.handleClick}>X</button>
            </ div>
        )
    }
}

export default Box;