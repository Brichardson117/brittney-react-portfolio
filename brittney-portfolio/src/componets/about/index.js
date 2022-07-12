import React from 'react';
import aboutImage from '../../assets/me/selfie.JPG'


function About() {
    return (
      <div className="uk-section uk-section-muted uk-flex-center@s uk-flex-center@m"> 
        <section className="uk-container" >
            <h2 className="uk-pane">About Me</h2>
            <img className='uk-align-left uk-margin-remove-adjacent' src={aboutImage} alt='me' style={{ height: '300px', width: '300px'}}/>
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
        </div>
    )
}

export default About