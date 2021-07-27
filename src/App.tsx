import React, { useState } from 'react';
import './App.css';
import { Button, Dialog, TextField} from '@material-ui/core';
import { MyDialog } from './MyDialog';
import { convertCompilerOptionsFromJson } from 'typescript';
import FormDialog from './FormDialog';

function App() {
 const  [open, setOpen]= React.useState(false)
 const [name,setName]= React.useState('')
 const handleClickOpen = () =>{
     setOpen(true)
 }
 const handleClickClose = () =>{
  setOpen(false)
}
const handleClickSave = () => {
  console.log("name =  --> " + name)
  setName(name)
  handleClickClose()
  
}
  return (
    <div className="App">
      <header className="App-header">

 
     
         Hello World  and {name}
         <div>
         <Button onClick={handleClickOpen} color="primary">Open Dialog</Button>
         {/* <MyDialog open={open}></MyDialog> */}

         <div>
           <FormDialog open={open} name={name}></FormDialog>
         {/* <Dialog open={open}>
         Hello in a dialog
          <div>
            <TextField label="Name"  >
 
            </TextField>
          </div>
           <Button onClick={handleClickClose} color="primary">
             Cancel
           </Button>
           <Button onClick={handleClickSave} color="primary">
             Save
           </Button>
 
         </Dialog> */}
         </div>
         </div>

      </header>
    </div>
  );
}

export default App;
