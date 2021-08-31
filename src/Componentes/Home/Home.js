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
            <div id="Home" className="home">
                <div className="wrapper-home">
                    <h1 className="fontAnimation">
                        <SplitText copy="Welcome" role="heading" delay="0.5"></SplitText>
                    </h1>
                    <h1 className="fontAnimation">
                        <SplitText copy="to my portfolio" role="heading" delay="0.8"></SplitText>
                    </h1>
                    <motion.div
                        className="descripcionHome"
                        initial={{ x: -1500 }}
                        animate={{ x: 0 }}
                        transition={{ delay: 1.1, duration: 1.5, type: 'spring'}}>
                        <h2 className="descripcionHomeText">{descriptionHomeText}</h2>
                    </motion.div>
                    <div className="flecha" onClick={this.onClickFlecha}>
                        <Flecha />
                    </div>
                </div>
            </div>
        )
    }
}
export default Home;