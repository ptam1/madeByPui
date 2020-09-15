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
                    <br />
                    <b>    Hi! My name is Pui! 
                    <br /> I am a freelance developer based in Atlanta, GA with a Master's degree in Software Engineering.      I have over one year's experience in Software QA Engineering.
                    <br /> I launched my own website services, because I want to help people fulfill their dreams by            creating their perfect website or software product on an affordable budget.
                    <br /> If you would like to know more about what I can do for you or want a quote, let's have a chat! 
                    <br />
                    <br />
                    </b>
                    </p>
                    <Button id="buttonProperties" href="/contact"> <b> Let's Have A Chat! </b> </Button>

            </div>
            </Container>
        );
    }
}