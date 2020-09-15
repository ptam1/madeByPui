import React, { Component } from 'react';
import './App.css';
import NavBar from './frontend/NavBar.js';
import HomePageSlide from './frontend/HomePageSlide.js';
import Container from 'react-bootstrap/Container';

class App extends Component {
    render() {
        return (
                          
            <Container fluid>  
                <div className="App">  
                   <NavBar displaytext=" " /> 
                    <HomePageSlide display /> 
                </div>
                </Container>
            
        );
    }
}
export default App;
