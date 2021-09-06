import React from 'react';
import './Home.css';
import SplitText from '../SplitText/SplitText';
import Flecha from '../Recursos/Flecha/flecha';
import descriptionHomeText from '../Recursos/descriptionHomeText'
import { motion } from 'framer-motion'
import Blobs from './Blobs/Blobs';


class Home extends React.Component {


    render() {
        return (
            <div className="bg">
                <div className="home">
                    <div className="wave-container">
                        <svg className="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                            <path fill="#fff" d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
                        </svg>
                    </div>
                    <h1 className="fontAnimation-first">
                        <SplitText copy="Welcome" role="heading" delay="0.4"></SplitText>
                    </h1>
                    <h1 className="fontAnimation">
                        <SplitText copy="to my portfolio" role="heading" delay="0.6"></SplitText>
                    </h1>
                    <motion.div
                        className="descripcionHome"
                        initial={{ x: -1500 }}
                        animate={{ x: 0 }}
                        transition={{ delay: 1.1, duration: 1.5, type: 'spring' }}>
                        <h2 className="descripcionHomeText">{descriptionHomeText}</h2>
                    </motion.div>
                    <div className="flecha">
                        <Flecha />
                    </div>
                    <Blobs/>
                </div>
            </div>
        )
    }
}
export default Home;