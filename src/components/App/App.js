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
import { fetchNewsArticles } from '../../ApiCalls.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      local: null,
      entertainment: null,
      health: null,
      science: null,
      tech: null,
      displayedNews: [],
      selectedHeading: "health",
    }
  }

  componentDidMount = () => {

    fetchNewsArticles().then(data =>
      this.setState(
        {local:data.local,
          entertainment: data.entertainment,
          health: data.health,
          science: data.science,
          tech: data.technology,
        }
    )).then(() => this.setState({displayedNews:this.state.local}))


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
