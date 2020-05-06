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
      local: local,
      entertainment: entertainment,
      health: health,
      science: science,
      tech: tech,
      // allNews: [local, entertainment, health, science, tech],
      displayedNews: health,
      selectedHeading: "health"
    }
  }

  sendNews = (newsType) => {

    this.setState({displayedNews: this.state[newsType], selectedHeading: newsType})
  }


  searchNews = (searchValue) => {
    let caseSensitive = searchValue.toLowerCase()
    let foundNews = this.state.displayedNews.filter(article => {

      return(
        article.headline.toLowerCase().includes(caseSensitive)||
        article.description.toLowerCase().includes(searchValue)
      )
    })
    this.setState({displayedNews:foundNews})
  }

  render () {
    return (
      <div className="app">
        <Menu sendNews = {this.sendNews} selectedHeading = {this.state.selectedHeading}/>
        <SearchForm searchNews = {this.searchNews} />
        <NewsContainer news = {this.state.displayedNews}/>
      </div>
    );
  }
}

export default App;
