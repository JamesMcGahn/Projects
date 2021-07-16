import React, { Component } from 'react'
import './DogList.css'
import { Link, Links } from 'react-router-dom'

class DogList extends Component {
    render() {
        return (
            <div className="DogList">
                <h1 className="display-1 text-center">Dog List</h1>
                <div className="container">
                    <div className="row">
                        {this.props.dogs.map(dog => {
                            return (<div className="Dog col-md-4 text-center" key={dog.name}>
                                <img src={dog.src} alt={dog.name} />

                                <Link to={`/dogs/${dog.name}`}> <h3> {dog.name}</h3></Link>

                            </div>)
                        })}
                    </div>
                </div>
            </div >
        )
    }
}

export default DogList