import React, { Component } from 'react';
import Box from './Box'
import NewBoxForm from './NewBoxForm'
import { v4 as uuidv4 } from 'uuid';


class BoxList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            boxes: [],
        }
        this.addBox = this.addBox.bind(this)
        this.removeBox = this.removeBox.bind(this)
    }

    addBox(box) {
        let newBox = { ...box, id: uuidv4() }
        this.setState(state => ({ boxes: [...state.boxes, newBox] }))
        console.log('ya')
    }

    removeBox(id) {
        let boxes = this.state.boxes;
        const newBoxes = boxes.filter(box => box.id !== id)
        this.setState({ boxes: newBoxes })
    }

    render() {
        return (
            <div>
                <NewBoxForm addBox={this.addBox} />
                {this.state.boxes.map(box => (
                    <Box key={box.id} id={box.id} background={box.color} height={box.height} width={box.height} removeBox={this.removeBox} />
                ))}
            </div>
        )
    }
}

export default BoxList;