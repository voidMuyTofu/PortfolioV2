import React from 'react';
import './App.css';
import Home from './Componentes/Home/Home';
import About from './Componentes/About/About';
import Projects from './Componentes/Projects/Projects';


class App extends React.Component {

  

  render() {
    return (
      <div className="app">
          <Home/>
          <About/>
          <Projects/>
        <div className="skills">
          <h1>Skills</h1>
        </div>
        <div className="contact">
          <h1>Contact me</h1>
        </div>
      </div>

    );
  }

}

export default App;
