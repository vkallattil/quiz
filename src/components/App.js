import React from "react";
import Home from "./Home/Home";
import Profile from "./Profile/Profile";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "../styles/App.css";

function App() {
  return (
    <Router>
      <header className='header'>
        <nav>
          <Link to='/' className='site-name-link'>
            Quizzes
          </Link>
          <Link to='/profile' className='nav-link'>
            Profile
          </Link>
        </nav>
      </header>
      <Switch>
        <Route path='/'>
          <Home />
        </Route>
        <Route path='/profile'>
          <Profile />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
