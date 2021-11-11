import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/App.css';

function Education (){
  return (
      <div className="RightGrid teal-row education">
        <div class="row">
          <div class="col-md-4 left-header">
            <h3><span class="glyphicon glyphicon-education"></span> Education</h3>
          </div>
          <div class="col-md-8 right-body">
            <p>2021 Oregon State University Computer Science Graduate</p>
          </div>
        </div>
      </div>
  );
}

export default Education;
