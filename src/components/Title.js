import React, { Component } from 'react';
import Logo from '../assets/logo.png'
import './Styles.css'


class Title extends Component {
  render() {
    return (
    <div className="Title">
        <div>
          <img src = {Logo} />
        </div>
        <div className="Name">
          <h1>John (Kevin) Parmer</h1>
          <p>Web Developer</p>
          <p>Graphic Designer</p>
        </div>
      </div>
    );
  }
}

export default Title;
