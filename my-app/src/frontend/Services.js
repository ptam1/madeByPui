import React, { Component } from 'react';
import NavBar from './NavBar.js';
import Container from 'react-bootstrap/Container';
import './Services.css';
import './BackgroundImage.css';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

export default class Services extends Component {
    render() {
        return (                                
            <Container fluid>
                
                <NavBar displaytext=" " />
                <div id="backgroundColor">
                    <Row>
                       <Col>
                    <div class="servicesTitleProperties">
                       <h1> SERVICES </h1>
                    </div>
                        </Col>
                    </Row>   
                        <h1 id="firstTitlePosition"> WEB DEVELOPMENT </h1>
                        <img id="firstTitleIcon" src={"/codeIcon.png"} alt={"image"} />
                       
                        <p className="firstParagraphProperties">
                             <br />
                             <b>    I develop unqiue websites tailored to each client's  vision. If you
                             <br /> have an existing website, I can modify or update it. I test each feature of the website to ensure that your website is bug free. I have over a year's experience in testing software.
                            <br /> I will work with you throughout the whole process from beginning to end to ensure that what I develop is what you envisioned.
                             <br />
                             <br />
                             </b>
                        </p>
                    
                        <h1 id="secondTitlePosition"> WEB DESIGN </h1>
                        <img id="secondTitleIcon" src={"/webDesignIcon.png"} alt={"image2"} />

                        <p className="secondParagraphProperties">
                            <br />
                            <b>     If you are thinking of upgrading or wanting a new fresh, modern look for your website,        I can help you with that! I can help redesign your website or help set up your website
                            <br />  from a creative perspective. At the end of the project, you will recieve a redesigned
                            <br />  website that you can feel confident about having and sharing. I have experience
                            <br />  working with local Atlanta businesses in redesigning their existing websites.
                            </b>
                    </p> 
                    </div>
                </Container>   
               
        );
    }
}