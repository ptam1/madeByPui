import React, { Component } from 'react';
import './HomePageSlide.css';
import Carousel from 'react-bootstrap/Carousel';
import './Portfolio.css';

export default class BambinellisSlide extends Component {
    render() {
        return (

            <div class="carousel">
                <Carousel infiniteLoop={true}>

                    <Carousel.Item>
                        <img
                            class="img-fluid"
                            src="/Before - Fitness Navbar.JPG"
                            alt="Before - Fitness Navbar"
                        />
                        <Carousel.Caption class="carousel-caption">
                            <p><b>Before - Navigation Bar</b></p>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            class="img-fluid"
                            src="/After - Fitness Navbar.JPG"
                            alt="After - Fitness Navbar"
                        />
                        <Carousel.Caption class="carousel-caption">
                            <p><b>After - Navigation Bar</b></p>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            class="img-fluid"
                            src="/Before - Fitness Product Page.JPG"
                            alt="Before - Fitness Product Page"
                        />
                        <Carousel.Caption class="carousel-caption">
                            <p><b>Before - Product Page</b></p>
                        </Carousel.Caption>
                    </Carousel.Item>


                    <Carousel.Item>
                        <img
                            class="img-fluid"
                            src="/Before - Fitness Footer.JPG"
                            alt="Before - Fitness Footer"
                        />
                        <Carousel.Caption class="carousel-caption">
                            <p><b>Before - Footer</b></p>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            class="img-fluid"
                            src="/After - Fitness Footer.JPG"
                            alt="After - Fitness Footer"
                        />
                        <Carousel.Caption class="carousel-caption">
                            <p><b>After - Footer</b></p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        );
    }
}

