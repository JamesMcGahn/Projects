import React, { Component } from 'react';
import './Pokecard.css'
const POKE_API = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/'


class PokeCard extends Component {
    render() {
        return <div className="PokeCard">
            <h1 className="PokeCard-title">{this.props.name}</h1>
            <div className="PokeCard-image">
                <img src={`${POKE_API}${this.props.id}.gif`} />
            </div>

            <p className="PokeCard-data">Type: {this.props.type}</p>
            <p className="PokeCard-data">EXP: {this.props.exp}</p>
        </div>
    }
}

export default PokeCard;