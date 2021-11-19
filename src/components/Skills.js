import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/App.css';

function Skills (){
  return (
      <div className="RightGrid teal-row skills">
        <div className="row">
          <div className="col-md-4 left-header">
            <h3><span className="glyphicon glyphicon-book"></span> Skills</h3>
          </div>
          <div className="col-md-8 right-body">
            <ul>
              <li>C</li>
              <li>Go</li>
              <li>Ruby</li>
              <li>JavaScript</li>
              <li>React</li>
              <li>SQL</li>
              <li>C#</li>
              <li>Java</li>
              <li>AWS</li>
              <li>Azure</li>
              <li>Heroku</li>
              <li>PHP</li>
              <li>Flutter</li>
              <li>Rails</li>
              <li>Git</li>
            </ul>
          </div>
        </div>
      </div>
  );
}

export default Skills;
