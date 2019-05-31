import React from 'react';
import './Carosel.css'
import Carousel from 'react-bootstrap/Carousel'
import Button from 'react-bootstrap/Button'


export const Carosel= () =>(
    <div>
       <Carousel>
  <Carousel.Item >
    <img
      className="d-block w-100"
      width = "839 px"
      height = "618px"
      src="https://secure.cdn1.wdpromedia.com/resize/mwImage/1/1860/821/75/wdpromedia.disney.go.com/media/wdpro-assets/dlr/parks-and-tickets/special-events/bravissimo/images/DLR_Bravissimo_FINAL_DESKTOP.png"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>YOUR PERSONAL PLANNER TO SOUTHERN CALIFORNIA AMUSEMENT PARKS</h3>
      <p>Make magical memories with your friends and family</p>
      <Button class = "btn" variant="primary" href="/login" type="submit">Ok, Let's Go!</Button>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://www.universalstudioshollywood.com/wp-content/uploads/2017/04/2800x1197_The_Simpsons_Ride_Exterior.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
     <h3>YOUR PERSONAL PLANNER TO SOUTHERN CALIFORNIA AMUSEMENT PARKS</h3>
      <p>Make magical memories with your friends and family</p>
      <Button class = "btn" variant="primary" href="/login" type="submit">Ok, Let's Go!</Button>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item >
    <img
      className="d-block w-100"
      width = "839 px"
      height = "618px"
      src="https://stmed.net/sites/default/files/disneyland-wallpapers-28549-4277979.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>YOUR PERSONAL PLANNER TO SOUTHERN CALIFORNIA AMUSEMENT PARKS</h3>
      <p>Make magical memories with your friends and family</p>
      <Button class = "btn" variant="primary" href="/login" type="submit">Ok, Let's Go!</Button>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

    </div>
)
export default Carosel