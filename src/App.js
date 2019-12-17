import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import MovieCollection from './components/MovieCollection';
import Customers from './components/Customers';
import Search from './components/Search';
class App extends Component {
  constructor() {
    super();

    this.state = {
     movies: [],
     customers: ''
    }
  };

  componentDidMount() {
    axios.get('http://localhost:3001/movies')
    .then((response) => {
      let moviesListFromApi = response.data.map((movieData) => {
        return movieData;   
      });

      this.setState({ 
        movies: moviesListFromApi,
        error: '' 
      });
    })
    .catch((error) => {
      this.setState({ error: error.message });
    });
  }
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
                    <Link to="/">Movies/MovieCollection</Link>
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
              <MovieCollection allMovies={this.state.movies} />
            </Route>
          </Switch>

        </Router>
      </div>  
    );
  }
}

export default App;
