import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import {image} from "./image/Data"
import "react-responsive-carousel/lib/styles/carousel.min.css";



function CarouselEffect() {
  return (
    <div>
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showIndicators={false}
        showThumbs={false}
        showStatus={false}
      >
        {image.map((imageItemLink, index) => {
          return <img key={index} src={imageItemLink} />;
        })}
      </Carousel>
    </div>
  );
}

export default CarouselEffect;