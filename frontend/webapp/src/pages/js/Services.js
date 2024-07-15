import React from 'react';
import img1 from '../../assets/online-business.png'
import Cards from '../../components/js/Card' 
import { Container } from 'react-bootstrap';
// Import your Card component here
import '../css/services.css'
const abstyle = {
  textAlign: 'center'
};

const Services = () => {
  return (
    <Container>
    <section>
      <h3 id='page-heading' style={abstyle}>Services</h3>
      
      <div className='first-section'>
        <div className='first-section-left'>
          <h4>Affordable services provided by us.</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in et, lectus sit lorem id integer.</p>
          <span id='btn'><button >Explore</button></span>
        </div>
        <div className='first-section-right'>
          <img src={img1} alt="online business" className='img-fluid'></img>
        </div>
        
      </div>

      <div className='second-section-carrier-page'>
        <h3>Services for us</h3>
        <div className='info-para-carrier'>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in et, lectus sit lorem id integer.</p>
        </div>
      </div>

      {/* Cards Section */}
      <Container>
      <div className="cards-container">
        <div className="cards-row">
          <Cards />
          <Cards />
        </div>
        <div className="cards-row">
          <Cards />
          <Cards />
        </div>
        <div className="cards-row">
          <Cards />
          <Cards />
        </div>
      </div>
      </Container>
    </section>
    </Container>
  );
};

export default Services;