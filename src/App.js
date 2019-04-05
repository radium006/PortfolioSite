import React, { Component } from 'react';
import Title from "./components/Title"
import Nav from './components/Nav'
import AboutMe from './components/AboutMe'
import Education from './components/Education'
import Skills from './components/Skills'
import './components/Styles.css'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Title></Title>
        <Nav></Nav>
        <AboutMe></AboutMe>
        <Education></Education>
        <Skills></Skills>
      </div>
    );
  }
}

export default App;
