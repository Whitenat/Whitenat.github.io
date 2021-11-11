import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/App.css';

function Projects (){
  return (
      <div className="RightGrid teal-row projects">
        <div class="row">
          <div class="col-md-4 left-header">
            <h3><span class=" glyphicon glyphicon-pencil"></span> Projects</h3>
          </div>
          <div class="col-md-8 right-body">
            <p></p>
          </div>
        </div>
      </div>
  );
}

export default Projects;
