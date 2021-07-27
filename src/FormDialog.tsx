import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { collapseTextChangeRangesAcrossMultipleVersions } from 'typescript';

interface myProps{
    open: boolean,
    name: string,
    changeName: any // this is a changeName fucntion which we receive from the parent 
}

// export default function FormDialog() {
    const FormDialog: React.FC<myProps> = (props) => {
  const [open, setOpen] = React.useState(props.open);

 const [name, setName] = React.useState(props.name)
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleSave = () => {
    //   handleNameChange()
    handleClose()
  };
  const handleClose = () => {
    setOpen(false);
  };

  // The below code handles the change in textfield which assigns to the name in this component. 
  const handleNameChange = (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void =>{
      props.changeName(e.target.value)
  }

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open form dialog
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here. We will send updates
            occasionally.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="New Name"
            onChange={handleNameChange}
            type="email"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSave} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
export default FormDialog;
