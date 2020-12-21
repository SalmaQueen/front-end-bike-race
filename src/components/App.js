import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Photos from '../components/Photos'
import Location from '../components/Location'
import Rider from '../components/Rider'
import Home from '../components/Home'
import Contest from '../components/Contest'
import Slogans from '../components/Slogan'
import './App.css'



export default function App() {
  return (
    <Router>
      <div>
   

<nav className="navbar navbar-expand-lg navbar-light bg-display">
  
  <Link className="navbar-brand text-white" to="/">BOULDER BIKE TOUR</Link>

  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      
    <li className="nav-item">
              <Link className="nav-link text-white" to="/">Home</Link>
        </li>
      <li className="nav-item">
              <Link className="nav-link text-white" to="/photos">Photo</Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link text-white" to="/Location">Location</Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link text-white" to="/rider">Rider</Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link text-white" to="/contest">Contest</Link>
        </li>
    </ul>
    
  </div>
</nav>

    
            
        <Switch>
        <Route exact path="/">
            <Home/>
            </Route >
          <Route path="/photos">
            <Photos />
            </Route >
          <Route path="/Location">
            <Location />
            </Route >
            <Route path="/rider">
              <Rider />
              </Route >
            <Route path="/contest">
                <Contest/>
            </Route >
            <Route path='/submissions' component={Slogans} />

         
        </Switch>
        
      </div>
    </Router>
  );
};

