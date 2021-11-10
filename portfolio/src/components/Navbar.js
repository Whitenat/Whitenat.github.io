import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/App.css';

function Navbar (){
  return (
    <nav className="navbar navbar-inverse fixed-top">
      <div className="container-fluid">
        <ul className="nav navbar-nav">
          <li className="active"><a href="#">Home</a></li>
          <li><a href="#">Projects</a></li>
          <li><a href="#">Resources</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;