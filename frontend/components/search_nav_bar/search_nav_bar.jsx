import React from 'react';
import Greeting from '../greeting/greeting_container';
import { GoSearch } from "react-icons/go";
import {Link} from 'react-router-dom';

const SearchNav = () => {
  return (
    <div className="search-nav-bar-container">
      <div className="logo">
        <Link to="/" className="header-link">
          <img className="logo" src="https://i.imgur.com/OFHSsc8.png"/>
        </Link>
      </div>
      <div className="main-search-bar">
        <div className="find-input-wrapper">
          <span>
    
          </span>
          <input type="text" />
        </div>
        <div className="near-input-wrapper">
          <span>
          
          </span>
          <input type="text" />
        </div>
        <button><GoSearch className="search-icon"/></button>
      </div>
      <Greeting/>
    </div>
  )
}

export default SearchNav