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
                    <div id="servicesWrapper">

                    <h1 id="firstTitlePosition"> WEB DEVELOPMENT </h1>
                    <p id="firstParagraphProperties">
                        <b>    I develop unqiue websites tailored to each client's vision, which means I code websites from scratch. If you have an existing website, I can modify or add a new feature. I test each feature of the website to ensure that your website is bug free. I will work with you throughout the whole process from beginning to end to ensure that what I develop is what you envisioned.
                        </b>
                    </p>

                        <img id="servicesPic" src={"/macbook pro.jpg"} alt={"macbook pro picture"} />

                    <h1 id="secondTitlePosition"> WEB DESIGN </h1>
                    <p id="secondParagraphProperties">
                        <b>    If you are thinking of upgrading or wanting a new fresh, modern look for your website,           I can help you with that! I can help redesign your website or help set up your website
                        from a creative perspective. At the end of the project, you will recieve a redesigned
                        website that you can feel confident about having and sharing. I have experience
                        working with local Atlanta businesses in redesigning their existing websites.
                        </b>
                    </p>
                      
                  
                    <h2 id="testimonialTitle"> Testimonials </h2>
                    <p id="bambinelliTestimonial">
                            "Pui was awesome from start to finish. She truly exceeded my expectations in regards to my website! I couldn't have asked for more. Her penchant to detail, her wisdom in the field, it was truly an amazing experience working with her. I wish I had more websites for her to design. My website looks incredible, it's user friendly, and has a gorgeous aesthetic. I am 1000% pleased with her work! Thanks Pui!"
                        <br /> <span> - Taiwo </span>
                        <br /> <span> Marketing Director, Bambinelli's </span>
                    </p>

                    <p id="mariascleaningserviceTestimonial">
                            "With Pui's help, we were able to increase the functionality of our website. It looks professional and very easy to navigate. She handled things very efficiently and was available for any questions we have. We couldn't be more happier with our new website."
                        <br /> <span> - Cristian </span>
                        <br /> <span> Manager, Maria's Cleaning Service </span>
                    </p> 
                </div>
                </div>
                </Container>   
               
        );
    }
}