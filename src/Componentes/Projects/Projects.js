import React from 'react'
import './Projects.css';
import Card from '../Card/Card';
import { motion } from 'framer-motion';

export default class Projects extends React.Component {
    render() {
        return (
            <div className="projects">
                <motion.div
                initial={{ x: -500 }}
                animate={{ x: 0 }}
                transition={{ delay: 1.1, duration: 1.5 }}>
                <h1 className="tituloProjects">Projects</h1>
                </motion.div>
                
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