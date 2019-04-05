import React, { Component } from 'react';
import './Styles.css'

class Nav extends Component {
  render() {
    return (
      <div className='NavBar'>
        <a>About Me</a>
        <a>Education</a>
        <a>Technical Skills</a>
        <a>Coding Projects</a>
        <a>Graphic Design</a>
        <a>Contact Me</a>
        <a>Links</a>
        <a>Resume</a>
      </div>
    );
  }
}

export default Nav;
