import React, { useState } from 'react';
import './App.css';
import { Button, Dialog, TextField} from '@material-ui/core';
import { MyDialog } from './MyDialog';
import { convertCompilerOptionsFromJson } from 'typescript';
import FormDialog from './FormDialog';

function App() {

 const  [open, setOpen]= React.useState(false)
 const changeName = (name:string) => {
  setName(name );
}
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
      

         <div>
           <FormDialog open={open} name={name} changeName={changeName}></FormDialog>

         </div>
         </div>

      </header>
    </div>
  );
}

export default App;
