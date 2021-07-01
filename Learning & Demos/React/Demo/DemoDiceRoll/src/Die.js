import React, { Component } from 'react';

class Die extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <i class={`fas fa-dice-${this.props.numRoll} fa-7x`}></i>
                {console.log(this.props.numRoll)}
            </div>
        )
    }
}

export default Die