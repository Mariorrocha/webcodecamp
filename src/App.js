import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';
import Home from './pages/Home';
import Speaker from './pages/Speaker';
import Conference from './pages/Conference';

function App() {
  
  return(
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route  path="/speakers/:id">
            <Speaker/>
          </Route>
          <Route  path="/conference">
            <Conference/>
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App;
