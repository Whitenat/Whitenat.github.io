import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/App.css';

function Experience (){
  return (
    <div className="LeftGrid teal-row work-background">
      <div class="row">
        <div class="col-md-8 left-header">
          <h3><span class="glyphicon glyphicon-briefcase"></span> Experience</h3>
        </div>
        <div class="col-md-4 right-body">
          <p>Over 2 years working experience in Web Development</p>
        </div>
      </div>
    </div>
  );
}

export default Experience;
