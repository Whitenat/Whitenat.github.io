import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/App.css';

function Education (){
  return (
      <div className="RightGrid teal-row education">
        <div className="row">
          <div className="col-md-4 left-header">
            <h3><span className="glyphicon glyphicon-education"></span> Education</h3>
          </div>
          <div className="col-md-8 right-body">
            <p>2021 Oregon State University Computer Science Graduate</p>
          </div>
        </div>
      </div>
  );
}

export default Education;
