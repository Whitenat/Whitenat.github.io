import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/App.css';

function Experience (){
  return (
    <div className="experience-list">
      <div className="LeftGrid teal-row work-background">
        <div class="row">
          <div class="col-md-8 left-header">
            <h3><span class="glyphicon glyphicon-briefcase"></span> Experience</h3>
          </div>
          <div class="col-md-4 right-body">
            <p>Currently training as a full stack engineer with Cognizant As an entry-level full stack engineer I am looking to broaden my skills in software development, with a challenging position that allows me to contribute my experience in web development, project management, and ability to collaborate and work with others, while quickly learning new skills and processes.</p>
          </div>
        </div>
      </div>
      <br/>
      <div className="LeftGrid teal-row work-background">
      <div class="row">
        <div class="col-md-8 left-header">
          <h4>Computer Science Teaching Assistant </h4>
          <p><b>Oregon State Univeristy - Cascades </b></p>
          <p><i>June 2020 - June 2021</i></p>
        </div>
        <div class="col-md-4 right-body">
          <ul>
            <li>Coach 100+ Computer Science students in developing their understanding of various concepts including operating systems, databases, and programming fundamentas</li>
            <li></li>
          </ul>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Experience;
