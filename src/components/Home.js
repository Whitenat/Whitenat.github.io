import React, { useState, useEffect } from 'react';
import '../styles/App.css';
import Education from './Education';
import Experience from './Experience';
import Skills from './Skills';
import Contact from './Contact';
import Projects from './Projects';
import AboutMe from './AboutMe';

function Home() {
  
  const [education, setEducation] = useState(false);
  const [experience, setExperience] = useState(false);
  const [skills, setSkills] = useState(false);
  const [contact, setContact] = useState(false);
  const [about, setAbout] = useState(false);
  const [projects, setProjects] = useState(true);
  let inactiveBtn = "btn teal-btn";
  let activeBtn = "btn teal-btn btn-active";

  function clickEducation(){
    setEducation(true);
    setExperience(false);
    setSkills(false);
    setContact(false);
    setProjects(false);
    setAbout(false);
  }

  function clickExperience(){
    setEducation(false);
    setExperience(true);
    setSkills(false);
    setContact(false);
    setProjects(false);
    setAbout(false);
  }

  function clickSkills() {
    setEducation(false);
    setExperience(false);
    setSkills(true);
    setContact(false);
    setProjects(false);
    setAbout(false);
  }

  function clickContact() {
    setEducation(false);
    setExperience(false);
    setSkills(false);
    setContact(true);
    setProjects(false);
    setAbout(false);
  }

  function clickProjects() {
    setEducation(false);
    setExperience(false);
    setSkills(false);
    setContact(false);
    setProjects(true);
    setAbout(false);
  }

    function clickAbout() {
    setEducation(false);
    setExperience(false);
    setSkills(false);
    setContact(false);
    setProjects(false);
    setAbout(true);
  }

  return (
      <div className="App">
        <div className="container jumbotron-container">
          <div className="jumbotron jumbotron-header">
            <h1>Natashia White</h1>
            <p>New Grad Full Stack Engineer</p>
          </div>
        </div>
        <ul className="nav nav-tabs">
          <li className="teal-tab"><button className= {"btn teal-btn" + (projects ? " btn-active" : "")} onClick={clickProjects}>Projects</button></li>
          <li className="teal-tab"><button className= {"btn teal-btn" + (experience ? " btn-active" : "")} onClick={clickExperience}>Experience</button></li>
          <li className="teal-tab"><button className= {"btn teal-btn" + (education ? " btn-active" : "")} onClick={clickEducation}>Education</button></li>
          <li className="teal-tab"><button className= {"btn teal-btn" + (skills ? " btn-active" : "")} onClick={clickSkills}>Skills</button></li>
          <li className="teal-tab"><button className= {"btn teal-btn" + (contact ? " btn-active" : "")} onClick={clickContact}>Contact</button></li>
          <li className="teal-tab"><button className= {"btn teal-btn" + (about ? " btn-active" : "")} onClick={clickAbout}>About Me</button></li>
        </ul>
        {projects && <Projects/>}
        {experience && <Experience/>}
        {education && <Education/>}
        {skills && <Skills/>}
        {contact && <Contact/>}
        {about && <AboutMe/>}
        <br/>
      </div>
  );
}

export default Home;