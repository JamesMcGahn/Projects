import React, { Component } from 'react';

class BrokenClick extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Title: 'not Clicked'
        }
        this.clickFunction = this.clickFunction.bind(this);
    }
    clickFunction(e) {
        this.state.Title === 'not Clicked' ? this.setState({ Title: 'Clicked' }) : this.setState({ Title: 'not Clicked' })
    }

    render() {
        return (
            <div>
                <h1>{this.state.Title}</h1>
                <button onClick={this.clickFunction}>
                    Click Me
                </button>
            </div>
        );
    }
}

export default BrokenClick;