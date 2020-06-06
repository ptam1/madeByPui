import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import navFont from './NavBar.css';
import './NavBar.css';
import LinkContainer from 'react-router-bootstrap';
import {Link} from 'react-router-dom';

export default class Homepage extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (<div className="comptext">
            <Navbar bg="light" variant="light" sticky="top">
                <div id="navFont">
                    <Navbar.Brand href="/"><b>madeByPUI</b></Navbar.Brand>
                </div>
                <div id="navTextAlign">
                    <Navbar.Brand href="/"><b>Freelance Developer</b></Navbar.Brand>
                </div>
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
                <Nav.Item> <Nav.Link href="/"> <b> Home </b> </Nav.Link> </Nav.Item>
                    <Nav.Item> <Nav.Link href="/about"> <b> About </b> </Nav.Link> </Nav.Item>
                    <Nav.Item> <Nav.Link href="/services"> <b> Services </b> </Nav.Link> </Nav.Item>
                    <Nav.Item> <Nav.Link href="/portfolio"> <b> Portfolio </b> </Nav.Link> </Nav.Item>
                    <Nav.Item> <Nav.Link href="/contact"> <b> Get In Touch </b> </Nav.Link> </Nav.Item>
                </Nav>          
                </Navbar>
                    

        {this.props.displaytext}
        </div>)          
    }
}

