import React, { Component } from 'react'
import Color from './Color'
import './Container.css'

class Container extends Component {
    static defaultProps = {
        numBoxes: 18,
        allColors: ["purple", "violet", "orange", "green", "yellow", "blue", "magenta", "pink"]

    }

    constructor(props) {
        super(props)

    }



    render() {
        const boxes = Array.from({ length: this.props.numBoxes }).map(() => <Color allColors={this.props.allColors} />)
        return (
            <div className="Container">
                {boxes}
            </div>
        )
    }
}

export default Container