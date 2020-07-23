import React, { Component } from 'react';
import './searchForm.scss'
import { connect } from 'react-redux';
import { searchMovie, fetchMovies, setLoading } from '../../../actions/searchActions';

class SearchForm extends Component {

  onChange = e => {
    this.props.searchMovie(e.target.value);
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.fetchMovies(this.props.text);
    this.props.setLoading();
  };

  render() {
    return (
      <div className="topnav" data-test = 'topnav'>
        <div className="container" data-test = 'container'>
          <h1>
            Search movie..
          </h1>
          <form className="search" onSubmit={this.onSubmit}>
            <input data-test = 'input'
              type="text"
              className="form-control"
              name="searchText"
              placeholder="Search Movies"
              onChange={this.onChange}
            />
            <button data-test = 'submitbtn' type="submit" className="searchButton">
              Search
            </button>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  text: state.movies.text
});

export default connect(
  mapStateToProps,
  { searchMovie, fetchMovies, setLoading }
)(SearchForm);
