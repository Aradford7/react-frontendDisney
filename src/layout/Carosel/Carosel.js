import React from 'react';
import './Carosel.css'
import Carousel from 'react-bootstrap/Carousel'


export const Carosel= () =>(
    <div>
       <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://secure.cdn1.wdpromedia.com/resize/mwImage/1/640/360/75/dam/wdpro-assets/dlr/gallery/destinations/disneyland-park/disneyland-gallery00.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://www.universalstudioshollywood.com/wp-content/uploads/2017/04/2800x1197_The_Simpsons_Ride_Exterior.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://i.ytimg.com/vi/Gu7a6et4a-U/maxresdefault.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

    </div>
)
export default Carosel