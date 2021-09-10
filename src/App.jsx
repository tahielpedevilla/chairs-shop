import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Products from "./components/Products";

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact component={Home} path="/" />
        <Route component={Products} path="/products" />
        <Route component={Contact} path="/contact" />
      </Switch>
    </Router>
  );
}

export default App;
