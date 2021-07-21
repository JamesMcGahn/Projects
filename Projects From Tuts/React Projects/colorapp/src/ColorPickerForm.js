import React, { Component } from 'react'
import { ChromePicker } from 'react-color'
import Button from "@material-ui/core/Button";
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { withStyles } from "@material-ui/core/styles";

const styles = {
    picker: {
        width: "100% !important",
        marginTop: "2rem"
    },
    addColor: {
        width: "100%",
        padding: "1rem",
        marginTop: "1rem",
        fontSize: "2rem"
    },
    colorNameInput: {
        width: "100%",
        height: "70px"
    }
};

class ColorPickerForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentColor: 'teal',
            newColorName: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount() {
        ValidatorForm.addValidationRule("isColorNameUnique", value =>
            this.props.colors.every(
                ({ name }) => name.toLowerCase() !== value.toLowerCase()
            )
        );
        ValidatorForm.addValidationRule("isColorUnique", value =>
            this.props.colors.every(({ color }) => color !== this.state.currentColor)
        );
    }

    updateCurrentColor = (newColor) => {
        this.setState({ currentColor: newColor.hex });
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmit() {

        let color = { name: this.state.newColorName, color: this.state.currentColor }
        this.props.addNewColor(color)
        console.log(color)
    }
    render() {
        const { paletteFull, classes } = this.props
        return (
            <div>
                <ChromePicker
                    color={this.state.currentColor}
                    className={classes.picker}
                    onChangeComplete={(newColor) => this.updateCurrentColor(newColor)} />
                <ValidatorForm onSubmit={this.handleSubmit} ref='form'>
                    <TextValidator
                        value={this.state.newColorName}
                        className={classes.colorNameInput}
                        placeholder='Color Name'
                        name='newColorName'
                        variant='filled'
                        margin='normal'
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
                        className={classes.addColor}
                        style={{ backgroundColor: paletteFull ? 'grey' : this.state.currentColor }}
                    >
                        {paletteFull ? "Palette Full" : "Add Color"}

                    </Button>
                </ValidatorForm>
            </div>
        )
    }
}


export default withStyles(styles)(ColorPickerForm);
