import React, { Component } from 'react';
import Coin from './Coin'

class Flipper extends Component {
    static defaultProps = {
        sideImg: ["https://images-na.ssl-images-amazon.com/images/I/51xs7F%2BtP5L._AC_.jpg", "https://images-na.ssl-images-amazon.com/images/I/51NyMaKLydL._AC_.jpg"]
    }
    constructor(props) {
        super(props);
        this.state = {
            heads: 0,
            tails: 0,
            flips: 0,
            currentFlip: 1,
        }
        this.coinFlipper = this.coinFlipper.bind(this)
    }

    coinFlipper() {
        const flip = Math.floor(Math.random() * 2)
        this.setState(cur => {
            return flip === 0 ? { currentFlip: 0, heads: cur.heads + 1, flips: cur.flips + 1 } : { currentFlip: 1, tails: cur.tails + 1, flips: cur.flips + 1 }
        })



    }


    render() {
        return (
            <div>
                <h1>Lets Flip a Coin</h1>
                <Coin side={this.props.sideImg[this.state.currentFlip]} />
                <p>Out of {this.state.flips} flips, there are {this.state.heads} heads and {this.state.tails} tails</p>
                <button onClick={this.coinFlipper}>Click to Flip</button>
            </div >
        )
    }
}

export default Flipper