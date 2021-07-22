import React, { Component } from 'react'
import DraggableColorBox from './DraggableColorBox'
import { SortableContainer } from 'react-sortable-hoc'

class DraggableColorList extends Component {
    render() {
        return (
            <div style={{ height: '100%' }}>
                {this.props.colors.map((color, i) =>
                    <DraggableColorBox index={i} key={color.name} color={color.color} name={color.name} handleDelete={this.props.handleDelete} />)}
            </div>
        )
    }
}

export default SortableContainer(DraggableColorList)