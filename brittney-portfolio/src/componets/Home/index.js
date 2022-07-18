import React from 'react';
import aboutImage from '../../assets/me/selfie.JPG'

export default function Home() {
  return (
    <div > 
    <br /> 
    <br /> 
    <section className >
        <h2 className='uk-text-center uk-panel '>About Me</h2>
        <img className='uk-align-left uk-margin-remove-adjacen' src={aboutImage} alt='me' style={{ height: '300px', width: '300px'}}/>
        <div> 
        <p className='uk-text-large'>
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

  );
}
