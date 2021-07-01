import React, { Component } from 'react';
import Die from './Die'

class RollDice extends Component {
    constructor(props) {
        super(props)
        this.state = {
            die1: 'one',
            die2: 'one',
            rolling: false
        }

        this.roll = this.roll.bind(this)
    }
    roll() {
        const num = ['one', 'two', 'three', 'four', 'five', 'six']
        this.setState({
            die1: num[Math.floor(Math.random() * 6)],
            die2: num[Math.floor(Math.random() * 6)],
            rolling: true
        })

        setTimeout(() => { this.setState({ rolling: false }) }, 1000)
    }

    render() {
        return (
            <div>
                <Die numRoll={this.state.die1} />
                <Die numRoll={this.state.die2} />
                <button onClick={this.roll} disabled={this.state.rolling}>{this.state.rolling === true ? "Rolling..." : "Click to Roll"}</button>
            </div>
        )
    }

}

export default RollDice