import React, { Component } from 'react';
import Container from 'react-bootstrap/Container'
import {Row, Col, Button} from 'react-bootstrap'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import '../components/Styles.css'

library.add(fab)


class Skills extends Component {
  render() {
    return (
      
        <div>
        <Container>
            <h1 className='section-header'>Techinal Skills</h1>
            

            <Row>
                <Col>
                    
                    <FontAwesomeIcon icon={['fab', 'html5']} size='5x'></FontAwesomeIcon>
                    <div className='overlay'>
                        <p>Html 5</p>
                    </div>
                </Col>
                <Col>
                    <p>JavaScript</p>
                    <FontAwesomeIcon icon={['fab', 'js']} size='5x'></FontAwesomeIcon>
                </Col>
                <Col>
                    <p>Css3</p>
                    <FontAwesomeIcon icon={['fab', 'css3']} size='5x'></FontAwesomeIcon>
                </Col>
                <Col>
                    <p>node.js</p>
                    <FontAwesomeIcon icon={['fab', 'node']} size='5x'></FontAwesomeIcon>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p>React</p>
                    <FontAwesomeIcon icon={['fab', 'react']} size='5x'></FontAwesomeIcon>
                </Col>
                <Col>
                    <p>Vue.js</p>
                    <FontAwesomeIcon icon={['fab', 'vuejs']} size='5x'></FontAwesomeIcon>
                </Col>
                <Col>
                    <p>Angular</p>
                    <FontAwesomeIcon icon={['fab', 'angular']} size='5x'></FontAwesomeIcon>
                </Col>
                <Col>
                    <p>Python</p>
                    <FontAwesomeIcon icon={['fab', 'python']} size='5x'></FontAwesomeIcon>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p>C++</p>
                    <FontAwesomeIcon icon={['fab', 'react']} size='5x'></FontAwesomeIcon>
                </Col>
                <Col>
                    <p>Java</p>
                    <FontAwesomeIcon icon={['fab', 'java']} size='5x'></FontAwesomeIcon>
                </Col>
                <Col>
                    <p>AWS</p>
                    <FontAwesomeIcon icon={['fab', 'aws']} size='5x'></FontAwesomeIcon>
                </Col>
                <Col>
                    <p>Photoshop</p>
                    
                </Col>
            </Row>
        </Container>
    </div>
      
    );
  }
}

export default Skills;
