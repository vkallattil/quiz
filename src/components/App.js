import React from "react";
import Home from "./Home/Home";
import Profile from "./Profile/Profile";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "../styles/App.css";

function App() {
  return (
    <Router>
      <header className='header'>
        <Link to='/' className='site-name-link'>
          Quizzes
        </Link>
        <nav className='nav-bar'>
          <Link to='/profile' className='nav-link'>
            Profile
          </Link>
        </nav>
      </header>
      <div className='main'>
        <Switch>
          <Route path='/profile'>
            <Profile />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
