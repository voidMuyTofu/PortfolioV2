import React, { useState } from 'react'
import './Projects.css';
import ProjectsButton from '../ProjectsButton/ProjectsButton';

export default function Projects() {
    const [replay, setReplay] = useState(true);

    return (
        <div className="projects">
            <h1 className="tituloProjects">Projects</h1>
            <h2 className="descripcionProjects">Both proffesional and personal projects I´ve worked on</h2>
            <ProjectsButton/>
        </div>
    );
}