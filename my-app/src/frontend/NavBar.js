import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './NavBar.css';

export default class Homepage extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
       
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">

                <Navbar.Brand id="navHeader1" href="/"><b>madeByPUI</b></Navbar.Brand>
                <Nav className="mr-auto">
                    <Navbar.Brand href="/"><b>Freelance Developer</b></Navbar.Brand>
                </Nav>
 
                <Navbar.Toggle  aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav"> 
                    <Nav className="ml-auto">
                            <Navbar.Brand href="/">
                                <img
                                    src="/navIcon.png"
                                    width="30"
                                    height="30"
                                    className="d-inline-block align-top"
                                    alt="logo"
                                />
                            </Navbar.Brand>
                    
                            
                            <Nav.Link href="/about"> <b> About </b> </Nav.Link>
                            <Nav.Link href="/services"> <b> Services </b> </Nav.Link>
                            <Nav.Link href="/portfolio"> <b> Portfolio </b> </Nav.Link>
                            <Nav.Link href="/contact"> <b> Get In Touch </b> </Nav.Link>  
                    </Nav>    
                    </Navbar.Collapse>              
        </Navbar>

        )          
    }
}

