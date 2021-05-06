import React from 'react';
import CardList from './cardList';
import SearchBox from './SearchBox';
import './App.css'

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(users => this.setState({ robots: users }))
    }



    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })

    }

    render() {
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        if (this.state.robots.length === 0) {
            return <h1>No robots found</h1>
        } else {
            return (<div>
                <h1 className="f2">RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange} />
                <CardList robots={filteredRobots} />
            </div >)
        }
    }
}

export default App;