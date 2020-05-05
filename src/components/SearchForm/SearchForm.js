import React from 'react';
import './SearchForm.css';

const SearchForm = () => {

  return (
    <section className ="search-bar" >
      <input className ="search-input" type="text" placeholder="Search for news article here.">
      </input>
      <button className="search-button" type="button">
      Search Now
      </button>

    </section>
  )

}

export default SearchForm;
