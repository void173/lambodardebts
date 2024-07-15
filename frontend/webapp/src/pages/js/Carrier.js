import React from 'react';
import '../css/carrier.css';
import interviewImage from '../../assets/OnlineInterview.png';
import Cards from '../../components/js/Card'; // Import your Card component here

const abstyle = {
  textAlign: 'center'
};

const StyledDiv = () => {
  return (
    <section>
      <h3 style={abstyle}>Career</h3>
      <div className="styled-div">
        <h2>Welcome to Lambodar Debt Solutions!</h2>
        <h4>We are hiring!</h4>
        <img className='InterviewImage' src={interviewImage} alt="Online Interview" />
      </div>

      <div className='second-section-carrier-page'>
        <h3>Available Jobs</h3>
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

export default StyledDiv;