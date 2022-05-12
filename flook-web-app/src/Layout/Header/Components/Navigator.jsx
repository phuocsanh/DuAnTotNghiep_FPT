import React, { useState } from "react"
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from "react-router-dom"

import namePage from "../../../Constants/NamePage"
import actionTypes from "../../../Shop/Action/constants"


const Navigator = props => {
  const { stringClass } = props
  const [ animate, setAnimaie ] = useState('animate__animated animate__zoomIn')

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const ShowDialogAuth = () => { 

    // navigate('/home/authentication');
    dispatch({type: actionTypes.openDialog})
  }

  return (
    <React.Fragment>
      <section className="container navigation-menu ngdone" data-id="main-menu" data-logo="img/logo-colored.png">
        <ul className={animate}>{arrayItemMenu?.map((item, index) => 
          <li className={animate} key={index}>
            {item.icon}
            <Link to={item.link}>{item.name}</Link>
          </li>)}
          <li onClick={ShowDialogAuth}>    
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
              <defs>
                <filter id="gooey">
                  {/* in="sourceGraphic" */}
                  <feGaussianBlur in="SourceGraphic" stdDeviation={5} result="blur" />
                  <feColorMatrix in="blur" type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="highContrastGraphic" />
                  <feComposite in="SourceGraphic" in2="highContrastGraphic" operator="atop" />
                </filter>
              </defs>
            </svg>
            <button id="gooey-button">
              Join US
              <span className="bubbles">
                <span className="bubble" />
                <span className="bubble" />
                <span className="bubble" />
                <span className="bubble" />
                <span className="bubble" />
                <span className="bubble" />
                <span className="bubble" />
                <span className="bubble" />
                <span className="bubble" />
                <span className="bubble" />
              </span>
            </button>
          </li>
        </ul>
      </section>


      <nav className={`${stringClass}`}>
        <section className="nav">
          <div className="nav__content">
            <ul className="nav__list">
              {arrayItemMenu?.map((item, index) => { 
                return (
                  <li className="nav__list-item active-nav" key={index}>
                    <Link to={item.link} className="hover-target">{item.name}</Link>
                  </li>
              )})}
            </ul>
          </div>
        </section>
      </nav>
      {/* <AuthDiaLog /> */}
    </React.Fragment>
  )
}

export const arrayItemMenu = [
  { name: "Home", link: namePage.home,},
  { name: "comic", link: namePage.manga},
  { name: "Novel", link: namePage.movie,},
  { name: "Chat story", link: namePage.movie},
  { name: "Rankings", link: namePage.movie,},
  { name: "FORUMS", link: namePage.forums},
  { name: "About US", link: namePage.about },
  { name: "Contact US", link: namePage.contact },
] 


export default Navigator
