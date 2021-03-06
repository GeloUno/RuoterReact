import React, { Component } from "react";
import { Link, NavLink, withRouter, Switch } from "react-router-dom";
import "../Component/AppNavBar.css";
// npm install react-router-dom
class AppNavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisibility: false
    };
    this.onClickHamburger = this.onClickHamburger.bind(this);
  }

  onClickHamburger() {
    this.setState(a => ({
      isVisibility: !a.isVisibility
    }));
    console.log(this.state);
  }

  // console.log(this);
  //console.log(cha);

  render() {
   
    let menuHamburgerActive = this.state.isVisibility ? (
      
      <div>
      <ul className="openUL" >
        <li className="blue openLI"> <NavLink to="/">Home</NavLink></li>
        <li className="blue openLI"> <NavLink to="/posts">Post</NavLink></li>
        <li className="blue openLI"> <NavLink to="/contact">Contact</NavLink></li>
        <li className="blue openLI"> <NavLink to="/about">About</NavLink></li>
      </ ul>     
       </div>
      
    ) : (
      ""
    );
    return (
      <nav className="nav-wrapper blue">
        <div className="container">
          <a className="brand-logo left">Portfolio</a>
          <ul className="right hide-on-small-only">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/posts">Projects</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
            <li>
              <NavLink to="/about">About Me</NavLink>
            </li>
          </ul>

          <div
            className="hide-on-med-and-up right"
            onClick={this.onClickHamburger}
          >
            <i className="material-icons">
              menu
            </i>
            <div className="hide-on-med-and-up right HamburgerActive">{menuHamburgerActive}</div>
            </div>
        </div>
      </nav>
    );
  }
}
export default withRouter(AppNavBar);
