import React, { Component } from 'react';
import './SearchForm.css';

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


  executeSearch = (props) => {
    this.props.searchNews(this.state.searchBar)
  }


  render() {

    return (
      <section className ="search-bar" >
        <input value= {this.state.searchBar}
              className ="search-input"
              type="text"
              placeholder="Search for news article here."
              onChange={this.handleChange}>
        </input>

        <button className="search-button" type="button" onClick={this.executeSearch}>
        Search Now
        </button>

      </section>
    )
  }

}




export default SearchForm;
