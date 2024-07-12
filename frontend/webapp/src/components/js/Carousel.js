import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from '../../components/js/ExampleCarouselImage'; // Ensure this component exists and handles rendering of images
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS
import kotak from '../../assets/kotak.png'; // Import kotak.png
import sbi from '../../assets/sbi.png'; // Import sbi.png
import hdfc from '../../assets/hdfc.png'; // Import the third image

function IndividualIntervalsExample() {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src={sbi}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src={kotak}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={hdfc}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default IndividualIntervalsExample;
