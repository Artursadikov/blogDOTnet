import React, { Component } from 'react';
import NavBar from './components/NavBar';
import LogIn from './components/LogIn';
import { Router, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import BlogBody from './components/BlogBody';
import HomePage from './components/HomePage';

import './App.css';




export default class App extends Component {


  history = createBrowserHistory();

  render() {
    return (
      <Router history={this.history}>
        <div className="App">
          <NavBar />
          <Switch>
            <Route path='/login'  component={LogIn} />
            <Route path='/blog-lobby'  component={BlogBody}/>
            <Route  path='/' exact component={HomePage} />
          </Switch>
        </div>
      </Router>
    )
  }
}
