import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Movie extends Component {

  constructor() {
    super();

    this.state = {
      showDetails: false,
    }
  };

  toggleShowDetails = () => {
    let doesItShowDetails = this.state.showDetails;
    doesItShowDetails = !(this.state.showDetails);
    this.setState({showDetails: doesItShowDetails});
  }

  render() {
    const {title, image_url, overview, release_date, selectMovieCallback, id} = this.props;

    return (
      <div className="col-sm-4">
        <a onClick={this.toggleShowDetails}>
          <div className="card">
            <h3 className="card-title">{title}</h3>
            <div className="card-body">
              <img src={image_url} alt={title} /> 
              {this.state.showDetails && ( 
                <>
                <p className="card-text">{overview}</p>
                <p>Released on: {release_date}</p>
                </>
              )}
              <button
                className="btn btn-primary"
                onClick={() => { selectMovieCallback(id) }}>
                Select
              </button>
            </div>
          </div> 
        </a>     
      </div>
      );
    }
  };

export default Movie;

Movie.propTypes = {
  title: PropTypes.string,
  image_url: PropTypes.string, 
  overview: PropTypes.string, 
  release_date: PropTypes.string, 
  selectMovieCallback: PropTypes.func, 
  id: PropTypes.number,
};