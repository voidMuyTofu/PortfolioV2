import React from 'react';
import './Card.css'

export default class Card extends React.Component{
    render(){
        return(
            <div className="card">
                <img src="https://logodownload.org/wp-content/uploads/2019/08/github-logo-2.png"></img>
                <div className="card-details">
                    <span className="tag">ReactJS</span>
                    <span className="tag">CSS</span>
                    <div className="name">My portfolio</div>
                    <p>This is my personal portfolio, its a showcase of my web development skills, 
                        interests, and projects. You can take a look at the code here.</p>
                        <a href="http://www.google.com">
                    <button>
                        Go to Github
                    </button>
                    </a>
                </div>
            </div>
        );
    }
}