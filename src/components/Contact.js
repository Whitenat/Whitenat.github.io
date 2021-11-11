import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/App.css';

function Contact (){
  return (
    <div className="LeftGrid teal-row work-background">
      <div class="row">
        <div class="col-md-8 left-header">
          <h3><span class="glyphicon glyphicon-user"></span> Contact</h3>
        </div>
        <div class="col-md-4 right-body">
          <p><span class="glyphicon glyphicon-envelope"></span> tashiaw245@gmail.com</p>
          <p><span class="  glyphicon glyphicon-save-file"></span> Resume</p>
          <p> Github</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
