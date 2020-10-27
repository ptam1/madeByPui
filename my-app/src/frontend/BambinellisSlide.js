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
                            src="/Bambinellis homepage.JPG"
                            alt="Home Page"
                        />
                        <Carousel.Caption className="carousel-caption">
                            <p><b>Home Page</b></p>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            className="img-fluid"
                            src="/Bambinellis menu.JPG"
                            alt="Menu"
                        />
                        <Carousel.Caption className="carousel-caption">
                            <p><b>Menu</b></p>
                        </Carousel.Caption>
                    </Carousel.Item>


                    <Carousel.Item>
                        <img
                            className="img-fluid"
                            src="/Bambinellis entree.JPG"
                            alt="Product Page"
                        />
                        <Carousel.Caption className="carousel-caption">
                            <p><b>Entree Page</b></p>
                        </Carousel.Caption>
                    </Carousel.Item>


                    <Carousel.Item>
                        <img
                            className="img-fluid"
                            src="/Bambinellis curbside.JPG"
                            alt="Curbside Page"
                        />
                        <Carousel.Caption className="carousel-caption">
                            <p><b>Curbside Page</b></p>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            className="img-fluid"
                            src="/Bambinellis contact.JPG"
                            alt="Contact Page"
                        />
                        <Carousel.Caption className="carousel-caption">
                            <p><b>Contact Page</b></p>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            className="img-fluid"
                            src="/Bambinellis cart.JPG"
                            alt="Cart Page"
                        />
                        <Carousel.Caption className="carousel-caption">
                            <p><b>Cart Page</b></p>
                        </Carousel.Caption>
                    </Carousel.Item>


                </Carousel>
            </div>
        );
    }
}

