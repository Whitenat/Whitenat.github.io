import React, { useState, useEffect } from 'react';
import '../styles/App.css';
import Education from './Education';
import Experience from './Experience';
import Skills from './Skills';
import Contact from './Contact';

function Home() {
  
  const [education, setEducation] = useState(false);
  const [experience, setExperience] = useState(true);
  const [skills, setSkills] = useState(false);
  const [contact, setContact] = useState(false);
  let inactiveBtn = "btn teal-btn";
  let activeBtn = "btn teal-btn btn-active";

  function clickEducation(){
    setEducation(true);
    setExperience(false);
    setSkills(false);
    setContact(false);
  }

  function clickExperience(){
    setEducation(false);
    setExperience(true);
    setSkills(false);
    setContact(false);
  }

  function clickSkills() {
    setEducation(false);
    setExperience(false);
    setSkills(true);
    setContact(false);
  }

  function clickContact() {
    setEducation(false);
    setExperience(false);
    setSkills(false);
    setContact(true);
  }

  return (
      <div className="App">
        <div className="container jumbotron-container">
          <div className="jumbotron jumbotron-header">
            <h1>Portfolio</h1>
            <p></p>
          </div>
        </div>
        <ul className="nav nav-tabs">
          <li className="teal-tab"><button className= {"btn teal-btn" + (experience ? " btn-active" : "")} onClick={clickExperience}>Experience</button></li>
          <li className="teal-tab"><button className= {"btn teal-btn" + (education ? " btn-active" : "")} onClick={clickEducation}>Education</button></li>
          <li className="teal-tab"><button className= {"btn teal-btn" + (skills ? " btn-active" : "")} onClick={clickSkills}>Skills</button></li>
          <li className="teal-tab"><button className= {"btn teal-btn" + (contact ? " btn-active" : "")} onClick={clickContact}>Contact</button></li>
        </ul>
        {experience && <Experience/>}
        {education && <Education/>}
        {skills && <Skills/>}
        {contact && <Contact/>}
        <br/>
      </div>
  );
}

export default Home;