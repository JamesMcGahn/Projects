import React, { Component } from "react";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import Button from "@material-ui/core/Button";
import DraggableColorList from './DraggableColorList'
import PaletteFormNav from "./PaletteFormNav"
import ColorPickerForm from "./ColorPickerForm"
import arrayMove from 'array-move';

const drawerWidth = 400;

const styles = theme => ({
    root: {
        display: "flex"
    },
    hide: {
        display: "none"
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        height: "100vh"
    },
    drawerPaper: {
        width: drawerWidth,
        display: "flex",
        alignItems: "center"
    },
    drawerHeader: {
        display: "flex",
        alignItems: "center",
        padding: "0 8px",
        ...theme.mixins.toolbar,
        justifyContent: "flex-end"
    },
    content: {
        flexGrow: 1,
        height: "calc(100vh - 64px)",
        padding: theme.spacing.unit * 3,
        transition: theme.transitions.create("margin", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        }),
        marginLeft: -drawerWidth
    },
    contentShift: {
        transition: theme.transitions.create("margin", {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen
        }),
        marginLeft: 0
    },
    container: {
        width: "90%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    },
    buttons: {
        width: "100%"
    },
    button: {
        width: "50%"
    }
});

class NewPaletteForm extends Component {
    static defaultProps = {
        maxColors: 20
    }
    constructor(props) {
        super(props);
        this.state = {
            open: true,
            colors: this.props.palettes[0].colors
        };
        this.addNewColor = this.addNewColor.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.savePalette = this.savePalette.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
        this.clearColors = this.clearColors.bind(this)
        this.randomColors = this.randomColors.bind(this)
    }




    handleDrawerOpen = () => {
        this.setState({ open: true });
    };

    handleDrawerClose = () => {
        this.setState({ open: false });
    };



    addNewColor(newColor) {
        this.setState({
            colors: [...this.state.colors, newColor]
        })
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    savePalette(newPaletteName) {
        const newPalette = {
            paletteName: newPaletteName,
            id: newPaletteName.toLowerCase().replace(/ /g, '-'),
            colors: this.state.colors
        }
        this.props.savePalette(newPalette)
        this.props.history.push('/')
    }

    handleDelete(colorName) {
        this.setState({
            colors: this.state.colors.filter(color => color.name !== colorName)
        })
    }

    onSortEnd = ({ oldIndex, newIndex }) => {
        this.setState(({ colors }) => ({
            colors: arrayMove(colors, oldIndex, newIndex),
        }));
    };

    clearColors() {
        this.setState({ colors: [] })
    }

    randomColors() {
        const allColors = this.props.palettes.map(p => p.colors).flat()
        const randoColor = (allColors[Math.floor(Math.random() * allColors.length)])
        this.setState({ colors: [...this.state.colors, randoColor] })
    }

    render() {
        const { classes, maxColors, palettes } = this.props;
        const { open } = this.state;
        const paletteFull = this.state.colors.length >= maxColors
        return (
            <div className={classes.root}>
                <PaletteFormNav open={open}
                    palettes={palettes}
                    savePalette={this.savePalette}
                    handleDrawerOpen={this.handleDrawerOpen}
                />
                <Drawer
                    className={classes.drawer}
                    variant='persistent'
                    anchor='left'
                    open={open}
                    classes={{
                        paper: classes.drawerPaper
                    }}
                >
                    <div className={classes.drawerHeader}>
                        <IconButton onClick={this.handleDrawerClose}>
                            <ChevronLeftIcon />
                        </IconButton>
                    </div>
                    <Divider />
                    <div className={classes.container}>
                        <Typography variant="h4"
                            gutterBottom>
                            Design Your Palette</Typography>
                        <div className={classes.buttons}>
                            <Button variant="contained"
                                color="secondary"
                                onClick={this.clearColors}
                                className={classes.button}
                            >Clear Palette</Button>
                            <Button
                                variant="contained"
                                className={classes.button}
                                color="primary"
                                disabled={paletteFull}
                                onClick={this.randomColors}>{paletteFull ? 'Palette Full' : 'Random Color'}</Button>
                        </div>
                        <ColorPickerForm
                            paletteFull={paletteFull}
                            addNewColor={this.addNewColor}
                            colors={this.state.colors}
                            updateCurrentColor={this.props.updateCurrentColor}
                        />
                    </div>
                </Drawer>
                <main
                    className={classNames(classes.content, {
                        [classes.contentShift]: open
                    })}
                >
                    <div className={classes.drawerHeader} />

                    <DraggableColorList
                        onSortEnd={this.onSortEnd}
                        axis='xy'
                        colors={this.state.colors}
                        handleDelete={this.handleDelete} />

                </main>
            </div >
        );
    }
}
export default withStyles(styles, { withTheme: true })(NewPaletteForm);