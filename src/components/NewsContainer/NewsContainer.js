import React from 'react';
import './NewsContainer.css'
import NewsArticle from '../NewsArticle/NewsArticle.js'
import PropTypes from 'prop-types';


const NewsContainer = (props) => {

  const allArticles = props.news.map(article => {
    return( <NewsArticle
            headline = {article.headline}
            description = {article.description}
            img = {article.img}
            url = {article.url}
            key = {article.headline}
            />
          )
  })


  return (
    <aside className = "news-container">
      {allArticles}
      {!props.news.length && <p>No Artiles Found</p>}
    </aside>

  )
}

NewsContainer.propTypes = {
  headline: PropTypes.string,
  description: PropTypes.string,
  img: PropTypes.string,
  url: PropTypes.string

};


export default NewsContainer;
