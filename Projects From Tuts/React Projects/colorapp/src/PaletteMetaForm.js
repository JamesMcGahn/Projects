import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

class PaletteMetaForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            open: false,
            newPaletteName: '',
        }
        this.handleClickOpen = this.handleClickOpen.bind(this)
        this.handleClose = this.handleClose.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    componentDidMount() {
        ValidatorForm.addValidationRule("isPaletteNameUnique", value =>
            this.props.palettes.every(({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase())
        );
    }


    handleClickOpen = () => {
        this.props.openCloseForm()
    };

    handleClose = () => {
        this.props.openCloseForm()
    }
    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }



    render() {

        return (

            <Dialog open={true} onClose={this.handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Create a Palette</DialogTitle>
                <ValidatorForm onSubmit={() => this.props.savePalette(this.state.newPaletteName)} >
                    <DialogContent>
                        <DialogContentText>
                            Please enter a name for your Palette. Make sure it is a unique name.
                        </DialogContentText>
                        <TextValidator label="Palette Name"
                            value={this.state.newPaletteName}
                            name='newPaletteName'
                            onChange={this.handleChange}
                            validators={["required", "isPaletteNameUnique",]}
                            errorMessages={[
                                "Enter a Palette name",
                                "Palette name must be unique",
                            ]} />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary">
                            Cancel
                        </Button>
                        <Button variant='contained' color='primary' type='submit' >Save Palette</Button>
                    </DialogActions>
                </ValidatorForm>
            </Dialog>

        )
    }
}
export default PaletteMetaForm