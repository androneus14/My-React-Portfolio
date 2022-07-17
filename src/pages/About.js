import React from 'react';
import displayPicture from '../assets/images/my-profile-pic.jpg';

function About() {
    return(
        <section className='about-section'>
            <h1 className='title-top'>Andy Nguyen</h1>
            <img src={displayPicture} alt='My Avatar'></img>
            <div className='my-2'>
                <p>
                Welcome to my personal portfolio page! My name is Andy Nguyen and currently, I am studying to become a Full Stack Web Developer through the Monash University Coding Bootcamp.
                </p>
                <p>
                Through the bootcamp, I have learnt front-end and back-end coding technologies such as HTML, CSS, JavaScript, Git, mySQL and several others. There's still a lot for me to learn and understand but I'm a willing learner.
                </p>
            </div>
        </section>
    );
}

export default About;