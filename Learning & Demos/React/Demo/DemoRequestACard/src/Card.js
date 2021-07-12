import React, { Component } from 'react';

class Card extends Component {

    render() {
        let cardIndex = this.props.zindex - 52
        let tilt = Math.floor(Math.random() * 25)
        let styles = {
            zIndex: cardIndex, position: 'absolute', transform: `rotate(${tilt}deg)`
        }
        console.log(cardIndex)
        return (
            <div style={styles}>
                <img src={this.props.img} alt={this.props.altText} />
            </div >
        )
    }
}

export default Card