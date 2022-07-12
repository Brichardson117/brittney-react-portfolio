import React from 'react';
import aboutImage from '../../assets/me/selfie.JPG'


function About() {
    return (
        <section>
            <h1>About Me</h1>
            <img src={aboutImage} alt='picture of me' style={{ height: '200px', width: '200px'}}/>
            <div> 
            <p>
            Hello! My name is Brittney, a Full Stack Web Developer with a
          certificate from Rice Coding Bootcamp, newly acquired skills for
          Frontend and Backend Web Development. Very well known for amazing soft
          skills, incredible work ethic, and desire to learn and grow. I aim to
          give users the best experience using web pages I worked on developing
          across all devices. I am looking forward to taking my skills and
          applying them to a wonderful and hard-working team to grow and enhance
          the experience that users have online.
            </p>
          </div>  
        </section>
    )
}

export default About