import React from 'react';
import './App.css';

import TodoList from './components/TodoList'
import Navbar from './components/Navbar';
import { Grid } from '@material-ui/core';

function App() {
  return(
    <>
    <Navbar/>
    <Grid container
  direction="row"
  justify="center"
  alignItems="center" >

    <TodoList />

    </Grid>
    </>
  )
  
}

export default App;
