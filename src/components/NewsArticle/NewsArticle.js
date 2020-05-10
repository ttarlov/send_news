import React from 'react';
import './NewsArticle.css';
import PropTypes from 'prop-types';

const NewsArticle = (props) => {


  return (
    <article className='article-container' key= {props.headline}>
      <h1>{props.headline}</h1>
      <p>{props.description}</p>
      <img src={props.img} alt= {`image for ${props.headline}`}/>
      <a href={props.url}>Click Here To Read Article</a>
    </article>
  )


};

NewsArticle.propTypes = {
  headline: PropTypes.string,
  description: PropTypes.string,
  img: PropTypes.string,
  url: PropTypes.string

};

export default NewsArticle;
