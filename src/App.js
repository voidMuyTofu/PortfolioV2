import React from 'react';
import './App.css';
import Home from './Componentes/Home/Home';
import About from './Componentes/About/About';
import Projects from './Componentes/Projects/Projects';
import Skills from './Componentes/Skills/Skills';


class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Projects/>
      </div>
    );
  }

}

export default App;
