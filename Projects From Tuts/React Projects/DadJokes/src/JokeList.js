import React, { Component } from 'react';
import axios from 'axios'
import { v4 as uuidv4 } from 'uuid';
import './JokeList.css'
import Joke from './Joke'

class JokeList extends Component {
    static defaultProps = {
        numJokestoGet: 10,
    }

    constructor(props) {
        super(props)
        this.state = {
            jokes: [],
        }

    }
    async componentDidMount() {
        let jokes = []
        while (jokes.length < this.props.numJokestoGet) {
            let res = await axios.get('https://icanhazdadjoke.com/', { headers: { 'Accept': 'application/json' } })
            jokes.push({ joke: res.data.joke, votes: 0, id: uuidv4() })
        }
        this.setState({ jokes: jokes })

    }

    handleVote(id, change) {
        this.setState(st => ({
            jokes: st.jokes.map(joke => joke.id === id ? { ...joke, votes: joke.votes + change } : joke)
        }))
    }

    render() {
        return (
            <div className="JokeList">
                <div className="JokeList-sidebar">
                    <h1 className="JokeList-title"><span>Dad</span> Jokes</h1>
                    <img src='https://assets.dryicons.com/uploads/icon/svg/8927/0eb14c71-38f2-433a-bfc8-23d9c99b3647.svg' alt='emoji laughing' />
                    <button className="JokeList-getmore">New Jokes</button>
                </div>
                <div className="JokeList-jokes">
                    {this.state.jokes.map(joke => <div>  <Joke key={joke.id} id={joke.id}
                        joke={joke.joke} votes={joke.votes} upVote={() => this.handleVote(joke.id, 1)} downVote={() => this.handleVote(joke.id, -1)} />  </div>)}
                </div>
            </div>
        )
    }
}

export default JokeList;