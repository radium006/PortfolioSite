import React, { Component } from 'react';
import {Container, Row, Col} from 'react-bootstrap'
import Me from '../assets/mypic.jpg'


class AboutMe extends Component {
  render() {
    return (
      <Container>
        <h1 className='section-header'>About Me</h1>
        <Row>
        <Col>
          <img src={Me} id="me"/>
        </Col>
        
        <Col>
          <p>My name is Kevin and I'm a Web Developer / Graphic Designer residing in beautiful Houston, TX. I am a recent graduate of DigitalCrafts Coding bootcamp and an University of Houston Alumni. </p>
          <p>After obtaining my bachelor's degree I began working in the craft beer industy where I started designing flyers and promotial materials. My interest in design led me to to return to UH where I took non-degree seeking courses in Computer Science and Mathmatics. Afterwards I attended DigitalCrafts Coding bootcamp where I studied several front-end and back-end technologies and development conventions.</p>
          <p>I am versitile developer in both the front-end and the back-end. I enjoy working primarily on the front-end and I'm always working on increasing my skill-set in UI/UX design. Feel free to reach out</p>
        </Col>

        </Row>
      </Container>
    );
  }
}

export default AboutMe;
