import React from 'react';
import './Card.css'

export default class Card extends React.Component{
    render(){
        return(
            <div className="card">
                <img src="https://1000marcas.net/wp-content/uploads/2020/02/GitHub-Logo.jpg"></img>
                <div className="card-details">
                    <span className="tag">ReactJS</span>
                    <span className="tag">CSS</span>
                    <div className="name">My portfolio</div>
                    <p>This is my personal portfolio, its a showcase of my web development skills, 
                        interests, and projects. You can take a look at the code here.</p>
                    <button>Go to Github</button>
                </div>
            </div>
        );
    }
}