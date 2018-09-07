import React, { Component } from "react";
import Home from "../src/Component/Home";
import AppNavBar from "../src/Component/AppNavBar";
import About from "../src/Component/About";
import Contact from "../src/Component/Contact";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./App.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <AppNavBar />

          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
