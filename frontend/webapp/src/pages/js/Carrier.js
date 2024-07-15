import React from 'react';
import '../css/carrier.css';
import interviewImage from '../../assets/OnlineInterview.png';
import Cards from '../../components/js/Card'; // Import your Card component here
import AOS from 'aos';
import { useEffect } from 'react';

const abstyle = {
  textAlign: 'center'
};

const StyledDiv = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000, // Global duration for all animations
      once: false, // Whether animation should happen only once - while scrolling down
      mirror: false, // Whether elements should animate out while scrolling past them
    });
  }, []);

  return (
    <section>
      <h3 style={abstyle}>Career</h3>
      <div className="styled-div">
        <h2 data-aos="fade-right">Welcome to Lambodar Debt Solutions!</h2>
        <h4 data-aos="fade-right">We are hiring!</h4>
        <img className='InterviewImage' src={interviewImage} alt="Online Interview" data-aos="fade-left" />
      </div>

      <div className='second-section-carrier-page'>
        <h3  data-aos="fade-right">Available Jobs</h3>
        <div className='info-para-carrier'>
          <p data-aos="fade-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in et, lectus sit lorem id integer.</p>
        </div>
      </div>

      {/* Cards Section */}
      <div className="cards-container">
        <div className="cards-row" data-aos="fade-up">
          <Cards />
          <Cards />
        </div>
        <div className="cards-row" data-aos="fade-up">
          <Cards />
          <Cards />
        </div>
        <div className="cards-row" data-aos="fade-up">
          <Cards />
          <Cards />
        </div>
      </div>
    </section>
  );
};

export default StyledDiv;