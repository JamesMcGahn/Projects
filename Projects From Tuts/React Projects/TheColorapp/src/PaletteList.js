import React, { Component } from 'react'
import { withStyles } from '@material-ui/styles'
import MiniPalette from './MiniPalette'
import styles from './styles/PaletteListStyles'
import { Link } from 'react-router-dom'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import ListItemText from '@material-ui/core/ListItemText'
import CheckIcon from '@material-ui/icons/Check'
import CloseIcon from '@material-ui/icons/Close'
import Avatar from '@material-ui/core/Avatar'
import blue from '@material-ui/core/colors/blue'
import red from '@material-ui/core/colors/red'

class PaletteList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            deleteDialogOpen: false,
            activeDelete: '',
        }
        this.handleDeleteDialogOpen = this.handleDeleteDialogOpen.bind(this)
        this.handleDeleteDialogClose = this.handleDeleteDialogClose.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
    }
    goToPalette(id) {
        this.props.history.push(`/palette/${id}`)
    }

    handleDeleteDialogOpen(id) {
        this.setState({ deleteDialogOpen: true, activeDelete: id })

    }
    handleDeleteDialogClose() {
        this.setState({ deleteDialogOpen: false, activeDelete: '' })
    }

    handleDelete() {
        this.props.removePalette(this.state.activeDelete)
        this.handleDeleteDialogClose()
    }



    render() {
        const { classes } = this.props
        return (
            <div className={classes.root}>
                <div className={classes.container}>
                    <nav className={classes.nav}>
                        <h1>Color App</h1>
                        <Link to="/palette/new">Create Palette</Link>
                    </nav>


                    <TransitionGroup className={classes.palettes}>
                        {this.props.palettes.map(p => {
                            return (
                                <CSSTransition key={p.id} classNames="fade" timeout={500} ><MiniPalette key={p.id} id={p.id} {...p} handleClick={() => this.goToPalette(p.id)} handleDialog={this.handleDeleteDialogOpen} /></CSSTransition>
                            )
                        })}
                    </TransitionGroup>
                </div>
                <Dialog open={this.state.deleteDialogOpen} aria-labelledby="delete-dialog-title">
                    <DialogTitle id='delete-dialog-title'>Delete this Palette?</DialogTitle>
                    <List>
                        <ListItem button onClick={this.handleDelete}>
                            <ListItemAvatar>
                                <Avatar style={{ backgroundColor: blue[100], color: blue[600] }}>
                                    <CheckIcon />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary='Delete' />
                        </ListItem>
                        <ListItem button onClick={this.handleDeleteDialogClose}>
                            <ListItemAvatar>
                                <Avatar style={{ backgroundColor: red[100], color: red[600] }}>
                                    <CloseIcon />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary='Cancel' />
                        </ListItem>
                    </List>
                </Dialog>
            </div>
        )
    }
}

export default withStyles(styles)(PaletteList)