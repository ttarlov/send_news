import React from 'react';
import './NewsContainer.css'
import NewsArticle from '../NewsArticle/NewsArticle.js'

const NewsContainer = (props) => {
  console.log(props.news);

  const allArticles = props.news.map(article => {
    return <NewsArticle
            headline = {article.headline}
            description = {article.description}
            img = {article.img}
            url = {article.url}
            key = {article.headline}
            />
  })


  return (
    <aside className = "news-container">
    {allArticles}
    </aside>
  )
}

export default NewsContainer;
