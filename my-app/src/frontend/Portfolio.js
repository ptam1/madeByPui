import React, { Component } from 'react';
import NavBar from './NavBar.js';
import './BackgroundImage';
import Container from 'react-bootstrap/Container';
import './Portfolio.css';
import MariasCleaningServiceSlide from './MariasCleaningServiceSlide.js';

export default class portfolio extends Component {
    render() {
        return (
            <Container fluid>
                <div id="backgroundColor">
                    <NavBar displaytext=" " />

                    <div id="titleProperties">
                        <h1> Portfolio </h1>
                    </div>

                    <div className="clientText">
                        <b><a href={'https://sites.google.com/mariascleaningatl.com/atl/home'}> Maria's Cleaning Service</a></b>
                        <br /> <b> Website Redesign </b>
                    </div>

                    <MariasCleaningServiceSlide display/>

                </div>
            </Container>
        );
    }
}