import React from 'react';
import Greeting from '../greeting/greeting_container';
import { GoSearch } from "react-icons/go";

const SearchNav = () => {
  return (
    <div className="search-nav-bar-container">
      <span>
        <img src="" alt="" />
      </span>
      <div className="main-search-bar">
        <div className="logo">
          logo
        </div>
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