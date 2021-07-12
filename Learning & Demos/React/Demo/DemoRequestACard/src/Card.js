import React, { Component } from 'react';

class Card extends Component {
    constructor(props) {
        super(props);
        this._cardIndex = this.props.zindex - 52
        this._tilt = Math.floor(Math.random() * 25)
        this._styles = { zIndex: this._cardIndex, position: 'absolute', transform: `rotate(${this._tilt}deg)` }

    }
    render() {
        return (
            <div style={this._styles}>
                <img src={this.props.img} alt={this.props.altText} />
            </div >
        )
    }
}

export default Card