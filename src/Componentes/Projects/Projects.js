import React from 'react'
import './Projects.css';
import Card from '../Card/Card';

export default class Projects extends React.Component {
    render() {
        return (
            <div className="projects">
                <h1 className="tituloProjects">Projects</h1>
                <h2 className="descripcionProjects">Both proffesional and personal projects I´ve worked on.</h2>
                <div className="cartas">
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
        );
    }

}