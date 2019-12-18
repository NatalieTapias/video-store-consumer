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
import SelectedMovie from './components/SelectedMovie';
import SelectedCustomer from './components/SelectedCustomer'

class App extends Component {
  constructor() {
    super();

    this.state = {
     movies: [],
     customers: [],
     movieSearchResult: '',
     selectedMovieDisplay: false,
     selectedMovie: {},
     selectedCustomerDisplay: false,
     selectedCustomer: {}
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
    const movies = this.state.movies;
    const currentMovie = movies.find((movie) => {
      return movie.id === id;
    });
    this.setState({
      selectedMovie: currentMovie
    }
    );
    this.setState({selectedMovieDisplay: true});
    console.log(this.state.selectedMovie)
    console.log(this.state.selectedMovieDisplay)
  }

  selectCustomer = (id) => {
    const customers = this.state.customers;
    const currentCustomer = customers.find((customer) => {
      return customer.id === id;
    });

    this.setState({
      selectedCustomer: currentCustomer,
      selectedCustomerDisplay: true
    });
  }


  addMovieToLibrary = (movie) => {
    console.log(movie);
    axios.post('http://localhost:3001/movies', movie)
    .then((response) => {
      const updatedMovieLibrary = this.state.movies;
      updatedMovieLibrary.push(response.data);
      
      console.log(response.data);
      this.setState({
        movies: updatedMovieLibrary,
      });
      console.log('posted');
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
            <div><SelectedMovie movie={this.state.selectedMovie} /></div>
            <div><SelectedCustomer customer={this.state.selectedCustomer} /></div>
          </header>
          
          <Switch>
            <Route path="/customers">
              <CustomerList allCustomers={this.state.customers}
              selectCustomerCallback={this.selectCustomer} />
            </Route>
            <Route path="/search">
              <Search addMovieCallback={this.addMovieToLibrary}/>
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
