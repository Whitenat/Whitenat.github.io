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
            <p>As an entry-level full stack engineer I am looking to broaden my skills in software development, with a challenging position that allows me to contribute my experience in web development, project management, and ability to collaborate and work with others, while quickly learning new skills and processes.</p>
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
              <li>Coached 100+ Computer Science students in developing their understanding of various concepts including operating systems, databases, and programming fundamentas</li>
              <li>Conducted code reviews and clarified course topics for CS students in and out of the classroom.</li>
              <li>Mentored new students professional development by sharing my own experiences on how to best utilize campus events and resources.</li>
              <li>Graded assignments for 80+ students using the command line and Emacs.</li>
              <li>Provided virtual office hours and assisted with remote lectures.</li>
            </ul>
          </div>
        </div>
      </div>
      <br/>
      <div className="LeftGrid teal-row work-background">
        <div class="row">
          <div class="col-md-8 left-header">
            <h4>Developer</h4>
            <p><b>Mazama Media</b></p>
            <p><i>Aug 2019 - Oct 2020</i></p>
          </div>
          <div class="col-md-4 right-body">
            <ul>
              <li>Maintained existing systems in C#, MySQL, JavaScript, and Azure  for processing data from over 50 automotive dealerships.</li>
              <li>Built a dynamic web based application to automate the process of eligibility verification, enrollment, and phone shipment using Heroku, Go, JavaScript to integrate 5 RESTful APIs.</li>
              <li>Remodeled and repaired websites on Shopify, WordPress, and Wix to meet client needs and achieve better performance using RESTful API integrations, HTML, CSS, and  JavaScript.</li>
              <li>Identified and executed creative solutions to various problems to help companies reach more customers.</li>
              <li>Designed workflows to improve collaboration between internal departments.</li>
            </ul>
          </div>
        </div>
      </div>
      <br/>
      <div className="LeftGrid teal-row work-background">
        <div class="row">
          <div class="col-md-8 left-header">
            <h4>Software Development Intern</h4>
            <p><b>Lora Dicarlo</b></p>
            <p><i>Feb 2019 - Aug 2019</i></p>
          </div>
          <div class="col-md-4 right-body">
            <ul>
              <li>Collaborated with co-founders to define the company’s growing needs and present innovative solutions.</li>
              <li>Learned and implemented new marketing and web development concepts and strategies.</li>
              <li>Prioritized multiple demands in a startup environment, and balanced simultaneous projects to meet deadlines.</li>
              <li>Improved usability of the product site map and aligned with organization mission.</li>
              <li>Researched product specifications and analyzed industry to understand competitor market and create copy for social media.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
