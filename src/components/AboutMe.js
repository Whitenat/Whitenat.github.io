import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/App.css';

function AboutMe (){
  return (
    <div className="LeftGrid teal-row work-background">
      <div className="row">
        <div className="col-md-8 left-header">
          <h3><span className="glyphicon glyphicon-user"></span> About Me</h3>
        </div>
        <div className="col-md-4 right-body">
          <p>
          As a new grad I enjoy working with new tools and people. 
          I'm passionate about sharing knowledge and seeking out spaces 
          that cultivate diversity. 
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;