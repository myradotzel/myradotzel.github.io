import './App.css';
import pro_pic from './img/pro_pic_cherry_blossoms.jpg';
import React, { Component } from "react";
import ReactRoundedImage from "react-rounded-image";
import Divider from '@material-ui/core/Divider';

function AboutMe() {
  return (
    <div className="wrapper">
        <img src={pro_pic} alt="profile pic" className="profile_pic" />
        <p className="content_page">
        I am currently a fourth-year PhD student in the Computer Science Department at Carnegie Mellon University. I work with <a href="https://www.andrew.cmu.edu/user/liminjia/" target="_blank" rel="noreferrer">Limin Jia</a> and <a href="http://gauss.cs.iit.edu/~fderakhshan/" target="_blank" rel="noreferrer">Farzaneh Derakhshan</a> on reasoning about intermittent computing through the lens of programming languages. I am broadly interested in solving problems at the interface of mathematics and 
        computer science, and my research interests include programming languages, formal methods, intermittent computing, and quantitative analysis. <b>I want my research to enhance the fidelity of fault-tolerant and safety-critical systems.</b>
{/*
        <br /><br />

        I also collaborate with <a href="https://lfcps.org" target="_blank" rel="noreferrer">Andre Platzer</a> and <a href="http://www.cs.cmu.edu/~smitsch/" target="_blank" rel="noreferrer">Stefan Mitsch</a> on proof calculi for bug detection in safety-critical applications.  
        
        <br /><br />

        Before that, I worked with <a href="https://www.cs.cmu.edu/~janh/" target="_blank" rel="noreferrer">Jan Hoffmann</a> on quantitative analysis. We worked on formulating polymorphism for Resource Aware ML, a language capable of inferring tight resource use bounds for OCaml programs. This was my introduction to programming languages.
*/}
        <br /><br />

        In Spring 2021, I completed my undergraduate at the University of Kansas where I 
        double-majored in computer science and mathematics, and minored in visual arts (emphasis 
        in painting). While there, I was a research assistant under the guidance of Dr. 
        Suzanne Shontz in scientific computing. I worked on developing quality metrics for high-order meshes for modeling the human heart. <br /><br />

        Outside of research, I enjoy painting, running, exploring, and learning languages. 

         
        
        <br /><br />
        
        <Divider />
        <br />
        Email: mdotzel [at] andrew [dot] cmu [dot] edu
        <br />
        Office: GHC 9223
        </p>
      
    </div>
  );
}

export default AboutMe;