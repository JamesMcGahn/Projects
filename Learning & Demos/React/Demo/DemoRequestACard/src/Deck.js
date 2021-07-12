import React, { Component } from 'react';
import Card from './Card'
import axios from 'axios'

class Deck extends Component {
    constructor(props) {
        super(props)
        this.state = {
            deckId: "",
            deck: [],
            remainingCards: 52,
        }
        this.drawCard = this.drawCard.bind(this)
    }
    async componentDidMount() {
        try {
            const res = await axios.get('https://deckofcardsapi.com/api/deck/new/shuffle ');
            const deckId = await res.data.deck_id
            this.setState({ deckId: deckId })
        } catch (error) {
            console.error(error);
        }
    }

    async drawCard() {
        let deckId = this.state.deckId
        const res = await axios.get(`https://deckofcardsapi.com/api/deck/${deckId}/draw/`);
        const { remaining } = await res.data
        const { images, suit, value } = await res.data.cards[0]
        this.setState({ remainingCards: remaining, deck: [...this.state.deck, { cardImg: images.png, cardValue: `${value} of ${suit}` }] })
    }
    render() {
        const style = { position: 'relative', paddingLeft: '40%' }
        return (
            <div>
                <button onClick={this.drawCard}>Give Me a Card</button>
                <h1>{this.state.remainingCards}</h1>
                <div style={style}>
                    {this.state.deck.map((card, index) => <Card zindex={index} key={card.cardValue} altText={card.cardValue} img={card.cardImg} />)}
                </div>

            </div >
        )
    }
}




export default Deck