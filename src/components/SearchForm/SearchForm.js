import React, { Component } from 'react';
import './SearchForm.css';
import PropTypes from 'prop-types';

class SearchForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchBar: ""
    }
  }

  handleChange = (event) => {
    this.setState({searchBar: event.target.value})
  }


  executeSearch = (event) => {
      event.preventDefault()

      this.props.searchNews(this.state.searchBar)
  }


  render() {

    return (

      <form className ="search-bar" >
        <input value= {this.state.searchBar}
              className ="search-input"
              type="text"
              placeholder="Search for news article here."
              onChange={this.handleChange}>
        </input>

        <button className="search-button"
                type="submit"
                onClick = {this.executeSearch}
                >
        Search Now
        </button>

      </form>

    )
  }

}

SearchForm.propTypes = {
  searchNews: PropTypes.func
}



export default SearchForm;
