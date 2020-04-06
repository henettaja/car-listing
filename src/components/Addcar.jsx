import React, {useState} from "react";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function Addcar(props) {

    const [open, setOpen] = useState(false);
    const [car, setCar] = useState({brand: "", model: "", color: "", year: "", fuel: "", price: ""});
    
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        props.addcar(car);
        setOpen(false);
    };

    const handleCancel = () => {
        setOpen(false);
    };

    const inputChanged = (event) => {
        setCar({...car, [event.target.name]: event.target.value})
    };

    return (
        <div>
                <Button style={{margin: 10}} variant="outlined" color="primary" onClick={handleClickOpen}>
                    Add a car
                </Button>
                <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Fill in the information below and click "save".
                        </DialogContentText>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="brand"
                            name="brand"
                            value={car.brand}
                            onChange={inputChanged}
                            label="Brand"
                            fullWidth
                        />
                        <TextField
                            margin="dense"
                            id="model"
                            name="model"
                            value={car.model}
                            onChange={inputChanged}
                            label="Model"
                            fullWidth
                        />
                        <TextField
                            margin="dense"
                            id="color"
                            name="color"
                            value={car.color}
                            onChange={inputChanged}
                            label="Color"
                            fullWidth
                        />
                        <TextField
                            margin="dense"
                            id="fuel"
                            name="fuel"
                            value={car.fuel}
                            onChange={inputChanged}
                            label="Fuel"
                            fullWidth
                        />
                        <TextField
                            margin="dense"
                            id="year"
                            name="year"
                            value={car.year}
                            onChange={inputChanged}
                            label="year"
                            fullWidth
                        />
                        <TextField
                            margin="dense"
                            id="price"
                            name="price"
                            value={car.price}
                            onChange={inputChanged}
                            label="price"
                            fullWidth
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleCancel} color="primary">
                            Cancel
                        </Button>
                        <Button onClick={handleClose} color="primary">
                            Save
                        </Button>
                    </DialogActions>
                </Dialog>
        </div>
    )
}