import React, {useState} from 'react';
import { motion } from 'framer-motion';
import './ProjectsButton.css';

export default function ProjectsButton(){
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.div
            layout
            data-isOpen={isOpen}
            initial={{borderRadius: 50}}
            className="parent"
            onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <div><h1>asdasddsasda</h1>
                <h3>assdasdasda</h3>
                <h1>asdsadsasdasda</h1>
                <h3>asdsdasdasdads</h3>
                <h1>asdsasdsdsd</h1>
                <h3>sdsdsdasdasda</h3>
                <h1>sdsdsdsdasad</h1>
                <h3>dsadsdasdadsa</h3></div> : <div className="child"></div>}

        </motion.div>
    )
}