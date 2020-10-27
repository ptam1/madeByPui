import React, { Component } from 'react';
import './HomePageSlide.css';
import Carousel from 'react-bootstrap/Carousel';
import './Portfolio.css';

export default class BambinellisSlide extends Component {
    render() {
        return (

            <div className="carousel">
                <Carousel infiniteLoop={true}>

                    <Carousel.Item>
                        <img
                            className="img-fluid"
                            src="/Before - Fitness Navbar.JPG"
                            alt="Before - Fitness Navbar"
                        />
                        <Carousel.Caption className="carousel-caption">
                            <p><b>Before - Navigation Bar</b></p>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            className="img-fluid"
                            src="/After - Fitness Navbar.JPG"
                            alt="After - Fitness Navbar"
                        />
                        <Carousel.Caption className="carousel-caption">
                            <p><b>After - Navigation Bar</b></p>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            className="img-fluid"
                            src="/Before - Fitness Product Page.JPG"
                            alt="Before - Fitness Product Page"
                        />
                        <Carousel.Caption className="carousel-caption">
                            <p><b>Before - Product Page</b></p>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            className="img-fluid"
                            src="/After - Fitness Product Page.JPG"
                            alt="After - Fitness Product Page"
                        />
                        <Carousel.Caption className="carousel-caption">
                            <p><b>After - Product Page</b></p>
                        </Carousel.Caption>
                    </Carousel.Item>


                    <Carousel.Item>
                        <img
                            className="img-fluid"
                            src="/Before - Fitness Footer.JPG"
                            alt="Before - Fitness Footer"
                        />
                        <Carousel.Caption className="carousel-caption">
                            <p><b>Before - Footer</b></p>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            className="img-fluid"
                            src="/After - Fitness Footer.JPG"
                            alt="After - Fitness Footer"
                        />
                        <Carousel.Caption className="carousel-caption">
                            <p><b>After - Footer</b></p>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            className="img-fluid"
                            src="/Fitness Membership Login.JPG"
                            alt="Fitness Membership Login"
                        />
                        <Carousel.Caption className="carousel-caption">
                            <p><b>Installed Memebership Login Portal App</b></p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        );
    }
}

