import React, { Component } from 'react';
import NavBar from './components/NavBar';
import Signup from './components/Signup';
import { Router, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import BlogBody from './components/BlogBody';
import HomePage from './components/HomePage';
import CreatePost from './components/CreatePost';
import Login from './components/Login';

import './App.css';




export default class App extends Component {


  history = createBrowserHistory();

  render() {
    return (
      <Router history={this.history}>
        <div className="App">
          <NavBar />
          <Switch>
            <Route path='/signup'  component={Signup} />
            <Route path='/login'  component={Login} />
            <Route path='/blog-lobby'  component={BlogBody}/>
            <Route path='/create-post' component={CreatePost} />
            <Route  path='/' exact component={HomePage} />
          </Switch>
        </div>
      </Router>
    )
  }
}
