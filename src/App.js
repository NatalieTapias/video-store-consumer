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
class App extends Component {
  constructor() {
    super();

    this.state = {
     movies: [],
     customers: '',
     movieSearchResult: '',
    }
  };

  onSubmitSearch = (searchTerm) => {
    axios.get(`http://localhost:3001/movies?query=<${searchTerm}>/search`)
    .then((response) => {
      let foundMovie = response.data;

      this.setState({ 
        movieSearchResult: foundMovie,
      });
    })
  }

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
              <MovieCollection allMovies={this.state.movies} />
            </Route>
          </Switch>

        </Router>
      </div>  
    );
  }
}

export default App;
