import React from 'react';
import './NewsArticle.css';

const NewsArticle = (props) => {

  return (
    <article className='article-container' key= {props.headline}>
      <h1>{props.headline}</h1>
      <p>{props.description}</p>
      <img src={props.img} alt= "na"/>
      <a href={props.url}>Click Here To Read Article</a>
    </article>
  )
}

export default NewsArticle;
