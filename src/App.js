import React from "react";
import { AppBar, Toolbar, IconButton, Typography } from "@mui/material";

import {
  BrowserRouter as Router, Switch, Link, Route
} from "react-router-dom";

import "./App.css";
import ImageUpload from "./Components/PreviewImage/ImageUpload"
import Canvas from "./Components/Canvas/Canvas"
import FabricCanvas from "./Components/Canvas/FabricCanvas"


function App() {
  return (
    <Router>
      <AppBar position="static">
        <Toolbar variant="dense">
          <Typography>
            <Link to="/">Image Upload</Link>
          </Typography>
          <Typography>
            <Link to="/canvas">Canvas</Link>
          </Typography>
          <Typography>
            <Link to="/fabriccanvas">FabricCanvas</Link>
          </Typography>
        </Toolbar>
      </AppBar>
      <Switch>
        <Route exact path='/' component={ImageUpload}></Route>
        <Route exact path='/canvas' component={Canvas}></Route>
        <Route exact path='/fabriccanvas' component={FabricCanvas}></Route>
      </Switch>
    </Router>
  );
}

export default App;