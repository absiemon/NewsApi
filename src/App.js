
// Your API key is: 18146180c1c547d9a865f6a250c79a71

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
  render() {
    return (
      <div>
        <Router>
        <Navbar/>
        <Switch>
              <Route exact path="/"><AllNewsItems key="general" pagesize={15} country="in" category="general"/> </Route>
              <Route exact path="/business"><AllNewsItems key="business" pagesize={15} country="in" category="business"/> </Route>
              <Route exact path="/entertainment"><AllNewsItems key="entertainment" pagesize={15} country="in" category="entertainment"/> </Route>
              <Route exact path="/general"><AllNewsItems key="general" pagesize={15} country="in" category="general"/> </Route>
              <Route exact path="/health"><AllNewsItems key="health" pagesize={15} country="in" category="health"/> </Route>
              <Route exact path="/science"><AllNewsItems key="science" pagesize={15} country="in" category="science"/> </Route>
              <Route exact path="/sports"><AllNewsItems key="sports" pagesize={15} country="in" category="sports"/> </Route>
              <Route exact path="/technology"><AllNewsItems key="technology" pagesize={15} country="in" category="technology"/> </Route>

        </Switch>
        </Router>
      </div>

    ) 
  }
}

