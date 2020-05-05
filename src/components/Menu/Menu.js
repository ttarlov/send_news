import React from 'react';
import './Menu.css'
import LocalNews from '../../icons/location-icon.svg';
import Technology from '../../icons/gear.svg';
import Entertainment from '../../icons/movie-camera.svg';
import Science from '../../icons/planet.svg';
import Health from '../../icons/360.svg'




const Menu = () => {

  const navSections =
  [
  {img:LocalNews, title: "Local News", alt: "location pin", key: "Local News"},
  {img:Technology, title: "Technology", alt: "gear icon", key: "Tech"},
  {img:Entertainment, title: "Entertainment", alt: "video camera icon", key: "Entertainment"},
  {img:Science, title: "Science", alt: "globe icon", key: "Science"},
  {img:Health, title: "Health", alt: "heart icon", key: "Health"}
]


  const newsHeading = navSections.map(heading => {

    return (
      <p className="section-heading" key={heading.key} >
        <img className="section-img"
          src={heading.img}
          alt={heading.alt}
          />
      {heading.title}
      </p>
    )
  })

  return(
    <nav className= "menu">
      <p className="heading-one">Send
        <span className="heading-two">News</span>
      </p>

      {newsHeading}

    </nav>

  )
}

export default Menu;
