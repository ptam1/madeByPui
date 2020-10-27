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

                    <div id="aboutWrapper">
                    <img className="imageProperties" src={"/Headshot.jpg"} alt={"image"} />

                    <p className="paragraphProperties">
                    <b> Hi! My name is Pui! 
                        I am a freelance developer based in Atlanta, GA with a Master's degree in Software Engineering 
                        with experience in software quality assurance. I have experience working with local Atlanta businesses in setting up and redesigning their website. I launched my own website services, because I want to help people fulfill their dreams by creating their perfect website or software product on an affordable budget. If you would like to know more about what I can do for you or want a quote, let's have a chat! 
                    </b>
                    </p>

                    <Button id="buttonProperties" href="/contact"> <b> Let's Have A Chat! </b> </Button>
                    </div>

            </div>
            </Container>
        );
    }
}