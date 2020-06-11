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

                    <div className="titleProperties">
                        <h1> ABOUT THE FREELANCE DEVELOPER </h1>
                    </div>

                    <img className="imageProperties" src={"/aboutPic.jpg"} alt={"image"} />

                    <p className="paragraphProperties">
                    <b>     Hi! My name is Pui! 
                    <br /> I am a freelance developer based in the United States. 
                    <br /> I have a Master's degree in Software Engineering. 
                    <br /> During the day, I am a QA Engineer, and during the night, I like to code projects. 
                    <br /> I launched my own website, because I want to help people fulfill their dreams by creating
                    <br /> their perfect website or product on an affordable budget. 
                    <br /> If you would like to know more about what I can do for you or want a quote, let's have a chat! 
                    </b>
                    </p>
                    <Button id="buttonProperties" variant="light" href="/contact"> <b> Let's Have A Chat! </b> </Button>

            </div>
            </Container>
        );
    }
}