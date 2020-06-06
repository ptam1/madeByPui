import React, { Component } from 'react';
import './HomePageSlide.css';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';




export default class HomePageSlide extends Component {
    render() {
        return (
            <div class="carousel">
                <Carousel controls={false} infiniteLoop={true}>

                    <Carousel.Item>
                    <img
                        className="imageCarousel"
                        src="/code.jpg"
                        alt="First slide"
                     />         
                   </Carousel.Item>
                             
                <Carousel.Item>
                    <img
                        className="imageCarousel"
                        src="macbook pro.jpg"
                        alt="Third slide"
                     />
                  </Carousel.Item>
                 </Carousel>
               </div>                
            );
    }
}