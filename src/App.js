
// Your API apiKey={this.api} key is: 18146180c1c547d9a865f6a250c79a71

import './App.css';

import React, { Component } from 'react'
import Navbar from './component/Navbar';
import AllNewsItems from './component/AllNewsItems';
// import { Router } from 'react-router-dom';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


export default class App extends Component {

api = process.env.REACT_APP_NEWS_API; // we can hide our api key in .env.local(it is a custom environment variable) and we will be sending our api key as props

  render() {
    return (
      <div>
        <Router>
        <Navbar/>
        <Switch>
              <Route exact path="/"><AllNewsItems apiKey={this.api} key="general-1" pagesize={15} country="in" category="general"/> </Route>
              <Route exact path="/business"><AllNewsItems apiKey={this.api} key="business" pagesize={15} country="in" category="business"/> </Route>
              <Route exact path="/entertainment"><AllNewsItems apiKey={this.api} key="entertainment" pagesize={15} country="in" category="entertainment"/> </Route>
              <Route exact path="/general"><AllNewsItems apiKey={this.api} key="general" pagesize={15} country="in" category="general"/> </Route>
              <Route exact path="/health"><AllNewsItems apiKey={this.api} key="health" pagesize={15} country="in" category="health"/> </Route>
              <Route exact path="/science"><AllNewsItems apiKey={this.api} key="science" pagesize={15} country="in" category="science"/> </Route>
              <Route exact path="/sports"><AllNewsItems apiKey={this.api} key="sports" pagesize={15} country="in" category="sports"/> </Route>
              <Route exact path="/technology"><AllNewsItems apiKey={this.api} key="technology" pagesize={15} country="in" category="technology"/> </Route>

        </Switch>
        </Router>
      </div>

    ) 
  }
}

