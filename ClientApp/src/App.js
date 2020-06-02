import React, { Component } from 'react';
import NavBar from './components/NavBar';
import Signup from './components/Signup';
import { Router, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import BlogBody from './components/BlogBody';
import Login from './components/Login';
import Register from "./components/Register";

import './App.css';




export default class App extends Component {


  history = createBrowserHistory();

  render() {
    return (
      <Router history={this.history}>
        <div className="App">
          <NavBar />
          <Switch>
            <Route path='/signup' component={Signup} />
            <Route path='/login' component={Login} />
            <Route path='/' exact component={BlogBody} />
            <Route path="/register" component={Register} />
          </Switch>
        </div>
      </Router>
    )
  }
}
