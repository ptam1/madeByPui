import React, { Component } from 'react';
import './HomePageSlide.css';
import Carousel from 'react-bootstrap/Carousel';
import './Portfolio.css';

    export default class MariasCleaningServiceSlide extends Component {
    render() {
        return (

            <div class="carousel">
                <Carousel infiniteLoop={true}>

                 <Carousel.Item>
                    <img
                    class="img-fluid"
                    src="/Home Page.JPG"
                    alt="Before - Home Page"
                    />
                        <Carousel.Caption class="carousel-caption">
                            <p><b>Before - Home Page</b></p>
                        </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                    class="img-fluid"
                    src="/After HomePage.JPG"
                    alt="After - Home Page"
                    />
                        <Carousel.Caption class="carousel-caption">
                            <p><b>After - Home Page</b></p>
                        </Carousel.Caption>
                </Carousel.Item>


                <Carousel.Item>
                    <img
                    class="img-fluid"
                    src="/Services page.JPG"
                    alt="Before - Services Page"
                    />
                        <Carousel.Caption class="carousel-caption">
                            <p><b>Before - Services Page</b></p>
                        </Carousel.Caption>
                </Carousel.Item>


                <Carousel.Item>
                    <img
                    class="img-fluid"
                    src="/After Services.JPG"
                    alt="After - Services Page"
                    />
                        <Carousel.Caption class="carousel-caption">
                            <p><b>After - Services Page</b></p>
                       </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                    class="img-fluid"
                    src="/After Services2.JPG"
                    alt="After - Services Page"
                    />
                        <Carousel.Caption class="carousel-caption">
                             <p><b>After - Home Page</b></p>
                         </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                    class="img-fluid"
                    src="/After Services3.JPG"
                    alt="After - Services Page"
                    />
                        <Carousel.Caption class="carousel-caption">
                             <p><b>After - Home Page</b></p>
                         </Carousel.Caption>
                </Carousel.Item>


                <Carousel.Item>
                <img
                class="img-fluid"
                src="/Clients page.JPG"
                alt="Before - Clients Page"
                />
                    <Carousel.Caption class="carousel-caption">
                        <p><b>Before - Clients Page</b></p>
                    </Carousel.Caption>
                </Carousel.Item>


                <Carousel.Item>
                <img
                class="img-fluid"
                src="/After Clients.JPG"
                alt="After - Clients Page"
                />
                    <Carousel.Caption class="carousel-caption">
                        <p><b>After - Clients Page</b></p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                <img
                class="img-fluid"
                src="/After Contact.JPG"
                alt="Contact Page"
                />
                    <Carousel.Caption class="carousel-caption">
                        <p><b>Contact Page</b></p>
                     </Carousel.Caption>
                </Carousel.Item>
                </Carousel>
            </div>
        );
    }
}
             
           