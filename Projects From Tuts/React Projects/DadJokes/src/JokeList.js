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
            jokes: JSON.parse(window.localStorage.getItem("jokes") || "[]"),
            loading: false
        }
        this.seenJokes = new Set(this.state.jokes.map(joke => joke.joke))
        this.handleClick = this.handleClick.bind(this)

    }

    async getJokes() {
        try {
            let jokes = []
            while (jokes.length < this.props.numJokestoGet) {
                let res = await axios.get('https://icanhazdadjoke.com/', { headers: { 'Accept': 'application/json' } })
                if (!this.seenJokes.has(res.data.joke)) {
                    jokes.push({ joke: res.data.joke, votes: 0, id: uuidv4() })
                }

            }
            this.setState(st => ({ jokes: [...st.jokes, ...jokes], loading: false }),
                () => window.localStorage.setItem(
                    "jokes", JSON.stringify(this.state.jokes)
                ))

        } catch (e) {
            console.error(e)
            this.setState({ loading: false })
        }
    }

    async componentDidMount() {
        if (this.state.jokes.length === 0) {
            this.getjokes()
        }
    }

    handleVote(id, change) {
        this.setState(st => ({
            jokes: st.jokes.map(joke => joke.id === id ? { ...joke, votes: joke.votes + change } : joke)
        }), () => window.localStorage.setItem(
            "jokes", JSON.stringify(this.state.jokes)
        ))
    }

    handleClick() {
        this.setState({ loading: true }, this.getJokes)
    }

    render() {
        if (this.state.loading) {
            return (
                <div className="JokeList-spinner">
                    <i className="far fa-8x fa-laugh fa-spin" ></i>
                    <h1 className="JokeList-title">Loading....</h1>
                </div>
            )
        }
        let jokes = this.state.jokes.sort((a, b) => b.votes - a.votes)
        return (

            <div className="JokeList">
                <div className="JokeList-sidebar">
                    <h1 className="JokeList-title"><span>Dad</span> Jokes</h1>
                    <img src='https://assets.dryicons.com/uploads/icon/svg/8927/0eb14c71-38f2-433a-bfc8-23d9c99b3647.svg' alt='emoji laughing' />
                    <button className="JokeList-getmore" onClick={this.handleClick}>New Jokes</button>
                </div>
                <div className="JokeList-jokes">
                    {jokes.map(joke => <div>  <Joke key={joke.id} id={joke.id}
                        joke={joke.joke} votes={joke.votes} upVote={() => this.handleVote(joke.id, 1)} downVote={() => this.handleVote(joke.id, -1)} />  </div>)}
                </div>
            </div>
        )
    }
}

export default JokeList;