import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/App.css';
import heroku from '../icons/icons8-heroku-50.png';
import postgres from '../icons/icons8-postgresql-50.png';
import rails from '../icons/icons8-ruby-on-rails-50.png';
import bootstrap from '../icons/icons8-bootstrap-50.png';
import react from '../icons/icons8-react-50.png';
import aws from '../icons/icons8-amazon-web-services-50.png';


function Projects (){
  return (
    <div>
      <div className="RightGrid teal-row projects">
        <div className="row">
          <div className="col-md-4 left-header">
            <h3><span className=" glyphicon glyphicon-pencil"></span> Projects</h3>
          </div>
          <div className="col-md-8 right-body">
            <p></p>
          </div>
        </div>
      </div>
      <br/>
      <div className="RightGrid teal-row projects">
        <div className="row">
          <div className="col-md-4 left-header">
            <h3>COIC COVID Grant Tracker</h3>
          </div>
          <div className="col-md-8 right-body">
            <div className="row icon-row">
              <div className="col icon-col">
                <img className="tech-icon" src={rails} />
              </div>
              <div className="col icon-col">
                <img className="tech-icon" src={postgres} />
              </div>
              <div className="col icon-col">
                <img className="tech-icon" src={heroku} />
              </div>
              <div className="col icon-col">
                <img className="tech-icon" src={bootstrap} />
              </div>
            </div>
            <br/>
            <p>With COVID mandates severely affecting small businesses COIC wanted a way to better connect local Central Oregon businesses with goverment funded COVID relief grants. This grant tracker allows COIC to upload grant applications to create a easy to search database of local business demographics.</p>
            <p>This project utilized Rails with a PostgreSQL database, hosted on Heroku.</p>
          </div>
        </div>
      </div>
      <br/>
      <div className="RightGrid teal-row projects">
        <div className="row">
          <div className="col-md-4 left-header">
            <h3>Personal Portfolio</h3>
          </div>
          <div className="col-md-8 right-body">
            <div className="row icon-row">
              <div className="col icon-col">
                <img className="tech-icon" src={react} />
              </div>
              <div className="col icon-col">
                <img className="tech-icon" src={bootstrap} />
              </div>
              <div className="col icon-col">
                <img className="tech-icon" src={aws} />
              </div>
            </div>
            <br/>
            <p>This portfolio site is a simple react app utilizing bootstrap styling and hosted as an AWS Amplify app</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
