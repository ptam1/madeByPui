import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './Form.css';

export default class Form extends Component {
    render() {
        return (
         <div class="row justify-content-center">
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label className="labelSize"><b>Name:</b></Form.Label>
                    <Form.Control className="formWidth" size="lg" type="Name" placeholder="Enter Your Name" />
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                    <Form.Label className="labelSize"><b>Email Address:</b></Form.Label>
                    <Form.Control className="formWidth" size="lg" type="email" placeholder="Enter Your Email" />
                </Form.Group>

                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label className="labelSize"><b>Project Description</b></Form.Label>
                    <Form.Control className="formWidth" size="lg" as="textarea" rows="3" />
                    <Form.Text className="text-muted">
                        Please include as much detail as possible, including features, budget, and project time.
                        </Form.Text>
                </Form.Group>

                <div class="text-center">
                    <Button id="button" variant="primary" type="submit">
                        <b>Submit</b>
                    </Button>
                </div>
            </Form>
         </div>
        );
    }
}





