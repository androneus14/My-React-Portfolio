import React from 'react';

function Resume() {
    return (
        <section className='resume-section'>
            <h1 className='text-center'>Resume</h1>
            <a href={require('../assets/resume/My-Resume.pdf').default}></a>
        </section>
    )
}

export default Resume;