import React, { Component } from 'react';
import NavBar from './NavBar.js';
import Container from 'react-bootstrap/Container';
import './Contact.css';
import Form from './Form.js';

export default class Contact extends Component {
    render() {
        return (
            <Container fluid>
                <div id="backgroundColor">
                    <NavBar displaytext=" " />

                    <div className="titleProperties">
                        <h1> Let's Talk About Your Next Project! </h1>
                    </div> 

                    <Form display />
                </div>
            </Container>
        );
    }
}