import React from 'react';
import './App.css';
import image from './image/app2.jpg'
import { Grid } from '@material-ui/core';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import Sidebar from './Layouts/Sidebar/Sidebar';

function App() {
  return (
    <div className="App">
    <Router>
    <Grid>
      <Sidebar/>
    </Grid>
    </Router>
    </div>
  );
}

export default App;
