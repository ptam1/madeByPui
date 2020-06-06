import React, { Component } from 'react';
import './HomePageSlide.css';
import Carousel from 'react-bootstrap/Carousel';
import CarouselCaption from 'react-bootstrap/CarouselCaption';
import './Portfolio.css';

    export default class MariasCleaningServiceSlide extends Component {
    render() {
        return (

            <div class="carousel">
                <Carousel infiniteLoop={true}>

                 <Carousel.Item>
                    <img
                    className="imageCarousel"
                    src="/Home Page.JPG"
                    alt="Before - Home Page"
                    />
                        <Carousel.Caption className="carousel-caption">
                            <p><b>Before - Home Page</b></p>
                        </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                     className="imageCarousel"
                     src="After HomePage.jpg"
                    alt="After - Home Page"
                    />
                        <Carousel.Caption className="carousel-caption">
                            <p><b>After - Home Page</b></p>
                        </Carousel.Caption>
                </Carousel.Item>


                <Carousel.Item>
                    <img
                    className="imageCarousel"
                    src="Services page.jpg"
                    alt="Before - Services Page"
                    />
                        <Carousel.Caption className="carousel-caption">
                            <p><b>Before - Services Page</b></p>
                        </Carousel.Caption>
                </Carousel.Item>


                <Carousel.Item>
                    <img
                    className="imageCarousel"
                    src="After Services.jpg"
                    alt="After - Services Page"
                    />
                        <Carousel.Caption className="carousel-caption">
                            <p><b>After - Services Page</b></p>
                       </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                    className="imageCarousel"
                    src="After Services2.jpg"
                    alt="After - Services Page"
                    />
                        <Carousel.Caption className="carousel-caption">
                             <p><b>After - Home Page</b></p>
                         </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                    className="imageCarousel"
                    src="After Services3.jpg"
                    alt="After - Services Page"
                    />
                        <Carousel.Caption className="carousel-caption">
                             <p><b>After - Home Page</b></p>
                         </Carousel.Caption>
                </Carousel.Item>


                <Carousel.Item>
                <img
                className="imageCarousel"
                src="Clients page.jpg"
                alt="Before - Clients Page"
                />
                    <Carousel.Caption className="carousel-caption">
                        <p><b>Before - Clients Page</b></p>
                    </Carousel.Caption>
                </Carousel.Item>


                <Carousel.Item>
                <img
                className="imageCarousel"
                src="After Clients.jpg"
                alt="After - Clients Page"
                />
                    <Carousel.Caption className="carousel-caption">
                        <p><b>After - Clients Page</b></p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                <img
                className="imageCarousel"
                src="After Contact.jpg"
                alt="Contact Page"
                />
                    <Carousel.Caption className="carousel-caption">
                        <p><b>Contact Page</b></p>
                     </Carousel.Caption>
                </Carousel.Item>
                </Carousel>
            </div>
        );
    }
}
             
           