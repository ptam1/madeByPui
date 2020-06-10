import React, { Component } from 'react';
import NavBar from './NavBar.js';
import Container from 'react-bootstrap/Container';
import './Services.css';


export default class services extends Component {
    render() {
        return (
            <Container fluid>
                <div id="backgroundColor">
                    <NavBar displaytext=" " />

                    <div id="titleProperties">
                        <h1> SERVICES </h1>
                    </div>

                            <div id="firstParagraphPosition">
                                <h1 id="firstTitlePosition"> WEB DEVELOPMENT </h1>
                                <img id="firstTitleIcon" src={"/codeIcon.png"} alt={"image"} />
                            
                                <p className="firstParagraphProperties">
                                <br />
                                <b>     Whether it is developing your website from scratch or modifying your existing website, I can help! I can develop new features, or modify and enhance existing features.
                                <br />  I will work with you throughout the whole process to ensure that what I develop is what you envisioned.
                                <br />
                                <br />
                                </b>
                                </p>
                            </div>

                            <div id="secondParagraphPosition">
                                <h1 id="secondTitlePosition"> WEB DESIGN </h1>
                                <img id="secondTitleIcon" src={"/webDesignIcon.png"} alt={"image2"} />
                            
                                <p className="secondParagraphProperties">
                                 <br />
                                 <b>     If your website looks like it might need some upgrading and a new fresh perspective, I can help with that! I can help redesign your website from a creative perspective.
                                 <br />  I can redesign your website so that it looks more modern and tailored to your vision.
                                 <br />
                                <br />
                                <br />
                                 </b>
                                 </p>
                            </div>
                           
                </div>
            </Container>
        );
    }
}