import React from 'react';
import JobImage from '../../assets/Mangetsajob.png';
import Cards from '../../components/js/Card'; // Import your Card component here
import '../css/services.css'
const abstyle = {
  textAlign: 'center'
};

const Services = () => {
  return (
    <section>
      <h3 style={abstyle}>Services</h3>
      
      <div className='first-section'>
        <div className='first-section-left'>
          <h4>Affordable services provided by us.</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in et, lectus sit lorem id integer.</p>
        </div>
        <div className='first-section-right'>
          <img src="" alt="online business photo"></img>
        </div>
        
      </div>

      <div className='second-section-carrier-page'>
        <h3>Services for us</h3>
        <div className='info-para-carrier'>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in et, lectus sit lorem id integer.</p>
        </div>
      </div>

      {/* Cards Section */}
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
    </section>
  );
};

export default Services;