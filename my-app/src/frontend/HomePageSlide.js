import React, { Component } from 'react';
import './HomePageSlide.css';
import Carousel from 'react-bootstrap/Carousel';

export default class HomePageSlide extends Component {
    render() {
        return (
            <div class="carousel">
                <Carousel controls={false} infiniteLoop={true} indicators={false}>

                    <Carousel.Item>
                    <img
                        className="imageCarousel"
                        src="/Bambinellis homepage.JPG"
                        alt="First slide"
                     />         
                   </Carousel.Item>
                             
                    <Carousel.Item>
                    <img
                        className="imageCarousel"
                        src="/After HomePage.JPG"
                        alt="Third slide"
                     />
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            className="imageCarousel"
                            src="/Bambinellis menu.JPG"
                            alt="First slide"
                        />
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            className="imageCarousel"
                            src="/After Services.JPG"
                            alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>
            </div>
            );
    }
}