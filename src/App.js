import React from 'react';
import './App.css';
import Home from './Componentes/Home/Home';
import About from './Componentes/About/About';
import Projects from './Componentes/Projects/Projects';


class App extends React.Component {
  render() {
    return (
      <div>
        <Home />
        <About />
      </div>
    );
  }

}

export default App;
