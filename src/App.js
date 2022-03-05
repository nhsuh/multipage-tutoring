import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Addition from './Addition';
import Subtraction from './Subtraction';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const page = {
    backgroundColor: 'black',
    position: 'absolute',
    top: '0px',
    bottom: '0px',
    right: '0px',
    left: '0px'
  }
  return (
    <Router>    
      <div style = {page}>
        <div className = "app">
          <Switch>
            <Route exact path = "/multipage-tutoring">
              <Home />
            </Route>
            <Route path = "/Addition">
              <Addition />
            </Route>
            <Route path = "/Subtraction">
              <Subtraction />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>

  );
}

export default App;
