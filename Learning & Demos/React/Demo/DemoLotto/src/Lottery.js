import React, { Component } from 'react';
import Ball from './Ball'


class Lottery extends Component {
    static defaultProps = {
        title: 'Lotto',
        maxBalls: 6,
        maxNum: 40
    }
    constructor(props) {
        super(props)
        this.state = { nums: Array.from({ length: this.props.maxBalls }) }
        this.handleClick = this.handleClick.bind(this)
    }

    generate() {
        this.setState(current => ({ nums: current.nums.map(b => Math.floor(Math.random() * this.props.maxNum + 1)) }))
    }

    handleClick() {
        this.generate();
    }

    render() {
        return (
            <div className="Lottery">
                <h1>{this.state.title}</h1>
                {this.state.nums.map(n => <Ball num={n} />)}
                <button onClick={this.handleClick}>Generate</button>
            </div>
        )
    }
}

export default Lottery