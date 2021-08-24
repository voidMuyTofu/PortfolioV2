import React from 'react'
import './App.css';
import SplitText from './Componentes/SplitText/SplitText';

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <div className="home">
          <div style={{paddingTop: '3%'}}>
            <h1 className="tituloApp">
              <SplitText copy="Welcome" role="heading" delay="0.5"></SplitText>
            </h1>
            <h1 className="tituloApp">
            <SplitText copy="to my portfolio" role="heading" delay="0.8"></SplitText>
            </h1>
          </div>
          
        </div>
        <div className="about">
          <h1>Fernando perez de la torre</h1>
        </div>
        <div className="projects">
          <h1>Fernando perez de la torre</h1>
        </div>
        <div className="skills">
          <h1>Fernando perez de la torre</h1>
        </div>
        <div className="contact">
          <h1>Fernando perez de la torre</h1>
        </div>
      </div>

    );
  }

}

export default App;
