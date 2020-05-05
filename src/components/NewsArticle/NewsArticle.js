import React from 'react';
import './NewsArticle.css';

const NewsArticle = (props) => {

  return (
    <article>
      <h1>{props.headline}</h1>
      <p>{props.description}</p>
      <img src={props.img}/>
      <a href="url">Click Here To Read Article</a>
    </article>
  )
}

export default NewsArticle;
