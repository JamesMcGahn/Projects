import React, { Component } from "react";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import { ChromePicker } from 'react-color'
import Button from "@material-ui/core/Button";
import DraggableColorList from './DraggableColorList'
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { arrayMove } from 'react-sortable-hoc'
import PaletteFormNav from "./PaletteFormNav"

const drawerWidth = 400;

const styles = theme => ({
    root: {
        display: "flex"
    },
    appBar: {
        transition: theme.transitions.create(["margin", "width"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        })
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(["margin", "width"], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen
        })
    },
    menuButton: {
        marginLeft: 12,
        marginRight: 20
    },
    hide: {
        display: "none"
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0
    },
    drawerPaper: {
        width: drawerWidth
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
            currentColor: 'orange',
            newColorName: "",
            colors: this.props.palettes[0].colors
        };
        this.addNewColor = this.addNewColor.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.savePalette = this.savePalette.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
        this.clearColors = this.clearColors.bind(this)
        this.randomColors = this.randomColors.bind(this)
    }

    componentDidMount() {
        ValidatorForm.addValidationRule("isColorNameUnique", value =>
            this.state.colors.every(
                ({ name }) => name.toLowerCase() !== value.toLowerCase()
            )
        );
        ValidatorForm.addValidationRule("isColorUnique", value =>
            this.state.colors.every(({ color }) => color !== this.state.currentColor)
        );
        ValidatorForm.addValidationRule("isPaletteNameUnique", value =>
            this.props.palettes.every(({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase())
        );
    }


    handleDrawerOpen = () => {
        this.setState({ open: true });
    };

    handleDrawerClose = () => {
        this.setState({ open: false });
    };

    updateCurrentColor = (newColor) => {
        this.setState({ currentColor: newColor.hex });
    }

    addNewColor() {
        const newColor = { color: this.state.currentColor, name: this.state.newColorName }
        this.setState({
            colors: [...this.state.colors, newColor],
            newColorName: ''
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
                <PaletteFormNav open={open} classes={classes}
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
                    <Typography variant="h4">Design Your Palette</Typography>
                    <Button variant="contained"
                        color="secondary"
                        onClick={this.clearColors}
                    >Clear Palette</Button>
                    <Button variant="contained"
                        color="primary"
                        disabled={paletteFull}
                        onClick={this.randomColors}>{paletteFull ? 'Palette Full' : 'Random Color'}</Button>
                    <ChromePicker color={this.state.currentColor} onChangeComplete={(newColor) => this.updateCurrentColor(newColor)} />
                    <ValidatorForm onSubmit={this.addNewColor} ref='form'>
                        <TextValidator
                            value={this.state.newColorName}
                            name='newColorName'
                            onChange={this.handleChange}
                            validators={["required", "isColorNameUnique", "isColorUnique"]}
                            errorMessages={[
                                "Enter a color name",
                                "Color name must be unique",
                                "Color already used!"
                            ]}
                        />
                        <Button
                            variant='contained'
                            type='submit'
                            color='primary'
                            disabled={paletteFull}
                            style={{ backgroundColor: paletteFull ? 'grey' : this.state.currentColor }}
                        >
                            {paletteFull ? "Palette Full" : "Add Color"}

                        </Button>
                    </ValidatorForm>


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