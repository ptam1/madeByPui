import React, { Component } from 'react';
import './App.css';
import NavBar from './frontend/NavBar.js';
import HomePageSlide from './frontend/HomePageSlide.js';
import BackgroundImage from './frontend/BackgroundImage.js';
import './frontend/BackgroundImage.css';
import './frontend/HomePageSlide.css';
import Container from 'react-bootstrap/Container';

class App extends Component {
    render() {
        return (
            <div className="App">               
                <NavBar displaytext=" " />
                <Container fluid>
                    <HomePageSlide display />
                    <BackgroundImage display />
                </Container>
            </div>
        );
    }
}
export default App;
