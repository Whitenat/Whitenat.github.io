import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/App.css';

function Contact (){
  return (
    <div className="LeftGrid teal-row work-background">
      <div className="row">
        <div className="col-md-8 left-header">
          <h3><span className="glyphicon glyphicon-user"></span> Contact</h3>
        </div>
        <div className="col-md-4 right-body">
          <p><span className="glyphicon glyphicon-envelope"></span> tashiaw245@gmail.com</p>
          <p><span className="  glyphicon glyphicon-save-file"></span> Resume</p>
          <p> Github</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
