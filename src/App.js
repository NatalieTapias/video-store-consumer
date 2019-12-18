import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
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
      selectedMovie: null,
      selectedCustomer: null
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
  }

  selectCustomer = (id) => {
    const customers = this.state.customers;
    const currentCustomer = customers.find((customer) => {
      return customer.id === id;
    });

    this.setState({
      selectedCustomer: currentCustomer,
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

  handleCheckoutMovieClick = () => {
    const { selectedMovie, selectedCustomer } = this.state;
    axios.post(
      `http://localhost:3001/rentals/${selectedMovie.title}/check-out`, 
      { 'customer_id': selectedCustomer.id } 
    ).then((response) => {
      const { data: customer } = response;
      const customers = [...this.state.customers];
      const customerIndex = customers.findIndex((c) => c.id === customer.id);
      customers[customerIndex] = customer;
      this.setState({ selectedCustomer: null, selectedMovie: null , customers });
    })
    .catch((error) => {
      this.setState({ error: error.message });
    });
  }

  render() {
    return (
      <div className="app">
        <Router>
          <header className="jumbotron jumbotron-fluid">
            <h1>Kingrey & Tapias VideoStore</h1>
            <div>
              <nav className="navbar">
                <ul className="row">
                  <li>
                    <Link to="/" className="btn btn-primary">Rental Library</Link>
                  </li>
                  <li>
                    <Link to="/customers" className="btn btn-primary">Customers</Link>
                  </li>
                  <li>
                    <Link to="/search" className="btn btn-primary">Search</Link>
                  </li>
                  <li>
                    {this.state.selectedMovie && (
                      <SelectedMovie movie={this.state.selectedMovie} />
                    )}

                    {this.state.selectedCustomer && (
                    <SelectedCustomer customer={this.state.selectedCustomer} />
                    )}
                    {this.state.selectedCustomer && this.state.selectedMovie && (
                      <button 
                        onClick={this.handleCheckoutMovieClick} 
                        className="btn btn-primary">Checkout Movie</button>
                    )}
                  </li>
                </ul>
              </nav>
            </div>
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
