import React, { Component } from 'react';

class Clicker extends Component {
    constructor(props) {
        super(props)
        this.state = {
            num: 0,
            Cheese: 'Turkey'
        }
        this.numGen = this.numGen.bind(this)
    }

    numGen() {
        let rando = Math.floor(Math.random() * 10 + 1)
        this.setState({ num: rando })
    }


    render() {
        return (
            <div>
                <h1>{this.state.num}</h1>
                {this.state.num === 7 ? 'You WIN!!!' : <button onClick={this.numGen}>
                    Click Me
                </button>}

            </div>
        );
    }
}

export default Clicker;