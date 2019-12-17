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
import CustomerList from './components/CustomerList';
import Search from './components/Search';
import SelectedMovie from './components/SelectedMovie'

class App extends Component {
  constructor() {
    super();

    this.state = {
     movies: [],
     customers: '',
     movieSearchResult: '',
     selectedMovieDisplay: false,
     selectedMovie: {},
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

    axios.get('http://localhost:3001/customers')
    .then((response) => {
      let customersListFromApi = response.data.map((customerData) => {
        return customerData;   
      });

      this.setState({ 
        customers: customersListFromApi,
        error: '' 
      });
    })
    .catch((error) => {
      this.setState({ error: error.message });
    });
  }

  selectMovie = (id) => {
    const movies = this.movies;
    const selectedMovie = movies.find((movie) => {
      return movie.id === id;
    });
    this.setState({ selectedMovie });
    this.setState({selectedMovieDisplay: true});
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
              <CustomerList allCustomers={this.state.customers} />
            </Route>
            <Route path="/search">
              <Search />
            </Route> 
            <Route path="/">
              <MovieCollection 
                allMovies={this.state.movies} selectMovieCallback={this.selectMovie} />
            </Route>
          </Switch>

        </Router>
      </div>  
    );
  }
}

export default App;
