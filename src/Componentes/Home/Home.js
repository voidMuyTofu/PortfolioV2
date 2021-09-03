import React from 'react';
import './Home.css';
import SplitText from '../SplitText/SplitText';
import Flecha from '../Recursos/Flecha/flecha';
import descriptionHomeText from '../Recursos/descriptionHomeText'
import { motion } from 'framer-motion'


class Home extends React.Component {

    onClickFlecha = () => {
        let pageHeight = window.innerHeight;
        window.scrollTo({top: pageHeight, behavior: 'smooth'});
    }

    render() {
        return (
            <div className="home">
                <h1>hola</h1>        
            </div>
        )
    }
}
export default Home;