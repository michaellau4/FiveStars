import React from 'react';
import Greeting from '../greeting/greeting_container';
import {Link} from 'react-router-dom';
import Search from '../search/search';
import { useLocation } from 'react-router';

const SearchNav = (props) => {
  let location = useLocation();
  if (!!props) {
    return (
      <div className="search-nav-bar-container">
        <div className="logo">
          <Link to="/" className="header-link">
            <img className="logo" src="https://i.imgur.com/OFHSsc8.png"/>
          </Link>
        </div>
        <Search />
        <Greeting/>
      </div>
    )
  } else {
    return (
      <div className="search-nav-bar-container" style={location.pathname === `/businesses/${props.business.id}/` ? {position: 'unset'} : {position: 'fixed'}}>
        <div className="logo">
          <Link to="/" className="header-link">
            <img className="logo" src="https://i.imgur.com/OFHSsc8.png"/>
          </Link>
        </div>
        <Search />
        <Greeting/>
      </div>
    )
  }
}

export default SearchNav;