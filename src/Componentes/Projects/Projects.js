import React from 'react'
import './Projects.css';

export default class Projects extends React.Component {

    onWheel = (e) => {
        e.preventDefault()
        var container = document.getElementById('container')
        var containerScrollPosition = document.getElementById('container').scrollLeft
        container.scrollTo({
            top: 0,
            left: containerScrollPosition + e.deltaY,
            behaviour: 'smooth' //if you want smooth scrolling
        })
    }

    render() {
        return (
            <div className="projects">
                <section id="container" onWheel={this.onWheel} className="card-list">
                    <article className="card">
                    <img src="https://logodownload.org/wp-content/uploads/2019/08/github-logo-2.png"></img>
                    <figcaption class="figcaption">
                        <p className="project-description">Check this website's repo on github to take a peek to the source code</p>
                        <button>FFFFFFF</button>
                    </figcaption> 
                    </article>
                    <article className="card">
                        <h2>Sep 11th 2020</h2>
                        <p>Card Tricks are fun!</p>
                    </article>
                    <article className="card">
                        <h2>Sep 11th 2020</h2>
                        <p>Card Tricks are fun!</p>
                    </article>
                    <article className="card">
                        <h2>Sep 11th 2020</h2>
                        <p>Card Tricks are fun!</p>
                    </article>
                    <article className="card">
                        <h2>Sep 11th 2020</h2>
                        <p>Card Tricks are fun!</p>
                    </article>
                    <article className="card">
                        <h2>Sep 11th 2020</h2>
                        <p>Card Tricks are fun!</p>
                    </article>
                    <article className="card">
                        <h2>Sep 11th 2020</h2>
                        <p>Card Tricks are fun!</p>
                    </article>
                    
                    <article className="card">
                        <h2>Sep 11th 2020</h2>
                        <p>Card Tricks are fun!</p>
                    </article>
                </section>
            </div>
        );
    }

}