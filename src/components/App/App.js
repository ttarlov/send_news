import React, { Component } from 'react';
import local from '../../data/local';
import entertainment from '../../data/entertainment';
import health from '../../data/health';
import science from '../../data/science';
import tech from '../../data/technology'

import './App.css';
import Menu from '../Menu/Menu';
import SearchForm from '../SearchForm/SearchForm';
import NewsContainer from '../NewsContainer/NewsContainer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      localNews: local,
      entertainment: entertainment,
      health: health,
      science: science,
      tech: tech
    }
  }

  render () {
    return (
      <div className="app">
        <Menu />
        <SearchForm />
        <NewsContainer news = {this.state}/>
      </div>
    );
  }
}

export default App;
