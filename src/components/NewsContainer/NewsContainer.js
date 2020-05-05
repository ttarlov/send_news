import React from 'react';
import './NewsContainer.css'

const NewsContainer = (props) => {
  console.log(props.news);
  return (
    <aside className = "news-container">
    <p>I am news Container</p>
    </aside>
  )
}

export default NewsContainer;
