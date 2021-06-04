import React from 'react';
import Navbar from '../navbar/navbar';

const Splash = (props) => {
  return (
    <div>
      <Navbar/>
      <div className="random">
          <h3>hello</h3>
      </div>
      <div className="main-footer-container">
          <div className="main-footer">
            <div className="footer-content-container">

            </div>
            <footer className="footer-background">
              <h3>bottom</h3>
            </footer>
          </div>
        </div>
    </div>
  )
};

export default Splash;