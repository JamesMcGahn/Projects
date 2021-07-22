import React, { Component } from 'react'
import { withStyles } from '@material-ui/styles'
import DeleteIcon from "@material-ui/icons/Delete";
import { SortableElement } from 'react-sortable-hoc';
import styles from './styles/DraggableColorBoxStyles'

class DraggableColorBox extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.handleDelete(this.props.name)
    }
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root} style={{ backgroundColor: this.props.color }}>
                <div className={classes.boxContent}>
                    <span> {this.props.name}</span>
                    <DeleteIcon className={classes.deleteIcon} onClick={this.handleClick} />
                </div>
            </div>
        );
    }
}
export default withStyles(styles)(SortableElement(DraggableColorBox))