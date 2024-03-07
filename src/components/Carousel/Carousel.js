// En src/components/Carousel/Carousel.js

import React from 'react';
import Img1 from '../../assets/images/hogwarts-legacy-pc-games-playstation-4-playstation-5-xbox-1920x1200-2913.jpg';
import Img2 from '../../assets/images/sd0oynukin901.jpg';
import Img3 from '../../assets/images/wp2215724.jpg';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
const Carousel = () => {
    return (
        <div id="demo" className="carousel slide mb-4" data-bs-ride="carousel" data-bs-interval="3000">

            {/* Indicators/dots */}
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
                <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
                <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
            </div>

            {/* The slideshow/carousel */}
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={Img1} alt="Img1" className="d-block w-100" />
                </div>
                <div className="carousel-item">
                    <img src={Img2} alt="Img2" className="d-block w-100" />
                </div>
                <div className="carousel-item">
                    <img src={Img3} alt="Img3" className="d-block w-100"/>
                </div>
            </div>

            {/* Left and right controls/icons */}
            <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
                <span className="carousel-control-prev-icon"></span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
                <span className="carousel-control-next-icon"></span>
            </button>
        </div>
    );
}

export default Carousel;