import React, { Component } from 'react';
import NavBar from './components/NavBar';
import Signup from './components/Signup';
import { Router, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import BlogBody from './components/BlogBody';
import HomePage from './components/HomePage';
import CreatePost from './components/CreatePost';
import Login from './components/Login';
import Register from "./components/Register";

import './App.css';


///Intro to Azure DevOps - Source Control, CI/CD, Automation, and more

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
            <Route path='/blog-lobby' component={BlogBody} />
            <Route path='/create-post' component={CreatePost} />
            <Route path='/' exact component={HomePage} />
            <Route path="/register" component={Register} />
          </Switch>
        </div>
      </Router>
    )
  }
}
