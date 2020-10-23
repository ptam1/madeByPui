import React, { Component } from 'react';
import NavBar from './NavBar.js';
import './aboutPic.css';
import './BackgroundImage.css';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

export default class About extends Component {
    render() {
        return (
            <Container fluid>
            <div id="backgroundColor">
                    <NavBar displaytext=" " />

                    
                    <h1 id="titleProperties"> ABOUT THE FREELANCE DEVELOPER </h1>
                   
                    <img class="imageProperties" src={"/Headshot.jpg"} alt={"image"} />

                    <p class="paragraphProperties">
                    <b> Hi! My name is Pui! 
                        I am a freelance developer based in Atlanta, GA with a Master's degree in Software Engineering 
                        with experience in software quality assurance. I have experience working with local Atlanta businesses in setting up and redesigning their website. I launched my own website services, because I want to help people fulfill their dreams by creating their perfect website or software product on an affordable budget. If you would like to know more about what I can do for you or want a quote, let's have a chat! 
                    </b>
                    </p>
                    <div id="buttonwrapper">
                    <Button id="buttonProperties" href="/contact"> <b> Let's Have A Chat! </b> </Button>
                    </div>

                    <p class="mariascleaningserviceTestimonial">
                        <b>
                            "With Pui's help, we were able to increase the functionality of our website. It looks professional and very easy to navigate. She handled things very efficiently and was available for any questions we have. We couldn't be more happier with our new website."
                        </b>
                        <br /> - Cristian
                        <br /> Manager, Maria's Cleaning Service
                    </p>
            </div>
            </Container>
        );
    }
}