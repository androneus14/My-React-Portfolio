import React from 'react';
import Project from '../components/Project';
import projects from '../projects.json';

function Portfolio () {
    return (
        <section>
            <h1>Portfolio</h1>
            <div className='row'>
                {projects.map((projects) => {
                    <Project 
                        projects={projects}
                        key={projects.id}
                        title={projects.title}
                        description={projects.description}
                        githubLink={projects.githubLink}
                        deployedLink={projects.deployedLink}
                        >
                    </Project>
                })}
            </div>
        </section>
    )
}

export default Portfolio;

