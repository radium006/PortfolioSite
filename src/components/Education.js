import React, { Component } from 'react';
import DC from '../assets/digitalcrafts.png'
import {Container} from 'react-bootstrap'
import UH from '../assets/UH.png'
import './Styles.css'


class Education extends Component {
  render() {
    return (
    <Container>
    <div className="Education">
        <h1 className='section-header'>Education</h1>
        <div className ='edu-entry'>
            <div className='logo-container'>
                <img src = {DC} className="school-logo"/>
            </div>
            <div className='edu-info'>
                <h3>DigitalCrafts Coding Bootcamp</h3>
                <ul>
                    <li>
                    <p>16-Week Immersive Full-Stack Web Development Program</p>
                    <p>Completed: Jan 2019</p>
                    </li>
                </ul>
            </div>    
        </div>
        <div className='edu-entry'>
            <div className='logo-container'>
                <img src={UH} className='school-logo' id='uh-logo'/>
            </div>
            <div className='edu-info'>
                <h3>University of Houston</h3>
                <ul>
                    <li>
                        <p>Post-Baccalaureate Course Work Computer Science / Mathmatics 2015-2017</p>
                        <p>Attended Aug 2015 - Dec 2017</p>
                    </li>
                    <li>
                        <p>B.A. Antropology / History</p>
                        <p>Completed: Dec 2012</p>
                    </li>
                
                </ul>
            </div>
        </div>
    </div>
    </Container>    
    );
  }
}

export default Education;
