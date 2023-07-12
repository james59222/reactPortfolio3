import React from "react";
import image3 from "./myPic.jpg";
import "@fontsource/roboto-slab"; // Defaults to weight 400
//jsx uses className for class,inputs and images must be self closing <div style={{width: "100%"}}> <img src="http/pic"/>83c5be
//About page with picture of portfolio owner and a paragraph of about me info.

function About() {
  
  return (
    <div className ="About">
    <div>
      <br></br>
      <br></br>
      <h1><img src={image3} alt="Portfolio owner Pic" class="thumbnail2" height="300" width="300" /></h1>
      <h1>About Me</h1>
        <div class="aboutMe">
        
    `   <p>
        <li>Motivated Engineer with solid experience managing all levels of large-scale projects, including installation, configuration, maintenance and alarming. </li>

        <li>Worked to maximize uptime on network devices through performance monitoring on data centers, local operations hubs, and LTE tower equipment. </li>
        <li>Experienced Engineer with strong leadership and relationship-building skills.</li>
      <p>
      </p>
      
      <li>New training experience to include Full Stack Coding through University of Texas at Austin.</li>
      </p>
      </div>
      </div>
      </div>
  );
}

export default About;