import React, { Component, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './Form.css';
import axios from 'axios';
import FormControl from 'react-bootstrap/FormControl';
import Alert from 'react-bootstrap/Alert'
import { Formik, useFormikContext } from 'formik';
import * as yup from 'yup';

/*
export default class ContactForm extends Component {

    render() {
        return (
                const ContactForm = () => {
                const [state, setState] = useState({
                    name: ' ',
                    email: ' ',
                    message: ' '
                });

                const sendEmail = event => {
                    event.preventDefault();

                    console.log('Example Text');
                };

                const onInputChange = event => {
                    const { name, value } = event.target;

                    setState({
                        ...state,
                        [name]: value
                    });
                };

                <div class="row justify-content-center">
                    <form onSubmit={sendEmail}>
                        <Form id="form">
                            <Form.Group controlId="name">
                                <Form.Label className="labelSize"><b>Name:</b></Form.Label>
                                <Form.Control
                                    className="formWidth"
                                    name="name"
                                    size="lg"
                                    type="text"
                                    value={state.name}
                                    onChange={onInputChange}
                                    placeholder="Enter Your Name"
                                />
                            </Form.Group>

                            <Form.Group controlId="email">
                                <Form.Label className="labelSize"><b>Email Address:</b></Form.Label>
                                <Form.Control
                                    className="formWidth"
                                    name="email"
                                    size="lg"
                                    type="email"
                                    value={state.email}
                                    placeholder="Enter Your Email"
                                    onChange={onInputChange}
                                />
                            </Form.Group>

                            <Form.Group controlId="message">
                                <Form.Label className="labelSize"><b>Project Description</b></Form.Label>
                                <Form.Control
                                    id="formWidth"
                                    name="message"
                                    size="lg"
                                    as="textarea"
                                    rows="3"
                                    value={state.message}
                                    onChange={onInputChange}
                                />
                                <Form.Text className="text-muted">
                                    Please include as much detail as possible, including budget, features, and project length.
                        </Form.Text>
                            </Form.Group>

                            <div class="text-center">
                                <Button id="button" variant="primary" type="submit">
                                    <b>Submit</b>
                                </Button>
                            </div>
                        </Form>
                    </form>
                </div>
            }
            );
        }
    }
*/

const ContactForm = () => {
    const [state, setState] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [result, setResult] = useState(null);
   
    const sendEmail = event => {
        event.preventDefault();
        axios
            .post('/send', { ...state })
            .then(response => {
                setResult(response.data);
                setState({
                    name: '',
                    email: '',
                    message: ''
                });
            })
            .catch(() => {
                setResult({
                    success: false,
                    message: 'Something went wrong. Please resend your form.'
                });
                console.log(message);
            });
    }

        const onInputChange = event => {
            const { name, value } = event.target;

            setState({
                ...state,
                [name]: value
            });
    };

    function showAlert() {
        //if (result && result.success) {
            return (
            <div>
            <Alert show={true} fade="true" variant="success">
                <p> result.message </p>
            </Alert>
            </div>    
        )}
     /*   else {
            return (
            <div>
            <Alert show={true} fade="true"  variant="danger">
                <p> result.message </p>
            </Alert>
            </div>
        )} 
    } */
       

        const formSchema = yup.object({
            name: yup.string().trim()
                .required("Name is required"),
            email: yup.string().email().trim()
                .required("Email is required"),
            message: yup.string().trim()
                .required("An inquiry is required")
        });

        return (
            <div className="row justify-content-center">
                <Formik
                    validationSchema={formSchema}
                    initialValues={{
                        name: '',
                        email: '',
                        message: '',
                    }}
                >
                    {({
                        handleSubmit,
                        handleChange,
                        handleBlur,
                        values,
                        touched,
                        isValid,
                        validateOnBlur,
                        validateOnChange,
                        errors,
                        dirty
                    }) => (

                            /*<Form onSubmit={handleSubmit, sendEmail
                                           }>*/
                            <Form onSubmit={isValid && dirty ? sendEmail: handleSubmit}>
                                <form id="form">
                                    <Form.Group controlId="name" id="nameField">
                                        <Form.Label className="labelSize"><b>Name:</b></Form.Label>
                                        <Form.Control
                                            className="formWidth"
                                            name="name"
                                            size="lg"
                                            type="text"
                                            placeholder="Enter Your First and Last Name"
                                            value={state.name, values.name}
                                            isValid={touched.name && !errors.name}
                                            isInvalid={!!errors.name}
                                            onChange={(e) => {                                               
                                                onInputChange(e);
                                                handleChange(e);
                                            }}                                            
                                            onBlur={handleBlur}
                                        />
                                        <Form.Control.Feedback id="tooltipPosition" type="invalid" tooltip >
                                            {errors.name}
                                        </Form.Control.Feedback>
                                    </Form.Group>

                                    <Form.Group controlId="email" id="emailField">
                                        <Form.Label className="labelSize"><b>Email Address:</b></Form.Label>
                                        <Form.Control
                                            className="formWidth"
                                            name="email"
                                            size="lg"
                                            type="email"
                                            value={state.email, values.email}
                                            isValid={touched.email && !errors.email}
                                            isInvalid={!!errors.email}
                                            placeholder="Enter Your Email"
                                            onChange={(e) => {                                             
                                                onInputChange(e);
                                                handleChange(e);
                                            }}
                                            onBlur={handleBlur}
                                        />
                                        <Form.Control.Feedback id="tooltipPosition" type="invalid" tooltip>
                                            {errors.email}
                                        </Form.Control.Feedback>
                                    </Form.Group>

                                    <Form.Group controlId="message" id="messageField">
                                        <Form.Label className="labelSize"><b>Project Description</b></Form.Label>
                                        <Form.Control
                                            className="formWidth"
                                            name="message"
                                            size="lg"
                                            as="textarea"
                                            rows="3"
                                            value={state.message, values.message}
                                            isValid={touched.message && !errors.message}
                                            isInvalid={!!errors.message}
                                            onChange={(e) => {                                                
                                                onInputChange(e);
                                                handleChange(e);
                                            }}
                                            onBlur={handleBlur}
                                        />
                                        <Form.Control.Feedback id="tooltipPosition" type="invalid" tooltip>
                                            {errors.message}
                                        </Form.Control.Feedback>
                                        <Form.Text className="text-muted">
                                            Please include as much detail as possible, including budget, features, and                  project length.
                                        </Form.Text>
                                    </Form.Group>
                                    <div className="text-center">
                                        <Button id="button" variant="success" type="submit">
                                            <b>Submit</b>
                                        </Button>
                                    </div>
                                </form>
                            </Form>
                        )}
                </Formik>
            </div>
        );
    }

    export default ContactForm;