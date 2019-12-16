import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Movies from './components/Movies';
import Customers from './components/Customers';
import Search from './components/Search';
class App extends Component {
  render() {
    return (
      <div className="app">
        <Router>
          <header className="App-header">
            <h1>Kingrey & Tapias VideoStore</h1>
            <div>
              <nav>
                <ul>
                  <li>
                    <Link to="/">Movies</Link>
                  </li>
                  <li>
                    <Link to="/customers">Customers</Link>
                  </li>
                  <li>
                    <Link to="/search">Search</Link>
                  </li>
                </ul>
              </nav>
            </div>
          </header>

          <Switch>
            <Route path="/customers">
              <Customers />
            </Route>
            <Route path="/search">
              <Search />
            </Route> 
            <Route path="/">
              <Movies />
            </Route>
          </Switch>

        </Router>
      </div>  
    );
  }
}

export default App;
