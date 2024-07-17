import React from 'react'
// import { Container } from 'react-bootstrap';
import abimg1 from '../../assets/team.jpeg';
import abimg2 from '../../assets/girl.png'
import Card_count from '../../components/js/count-card';
import '../css/about.css'
const abstyle = {
    textAlign:'center'
};
export default function About() {
  return (
    <>
    <div className='cont'>
    <h3 id='page-heading' style={abstyle}>About Us</h3>
    <div className='section-top'>
      <img src={abimg1} alt='#'></img>
      <div className='text-over-img'>
        <h4>What is Carlio And<br></br>How it is valid?</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in et, lectus sit lorem id integer.</p>
        <div className='button-holder1'>
              <button id='btn-1'>Buy Products</button>
              <button id='btn-2'>Contact Us</button>
            </div>
      </div>
    </div>
    <div className='section-mid'>
        <div className='section-mid-left'>
          <img src={abimg2} alt='#'></img>
        </div>
        <div className='section-mid-right'>
          <div className='section-mid-right-top'>
            <h3>Our Company Overview</h3>
            <p>Carlio brand is one of the most reliable motor oil manufacturers, which is engaged in the production of high quality products with a history of more than decades in the industry. In order to get more information about other aspects and products of the Carlio brand, you can use the following buttons:</p>
            <div className='button-holder2'>
              <button id='btn-3'>Company</button>
              <button id='btn-4'>Our Team</button>
            </div>
          </div>
          <hr/>
          <div className='section-mid-right-bottom'>
            <p>vThe meaning of production in Carlio is the creation, development, and the path to progress, and the starting point to achieve the goals that we all have the Petroforce brand, with over 20 years of experience in the oil and petrochemical industry, we officially started our activities in the field of design, engineering, construction of refinery equipment, and the production of various motor and industrial lubricants in the year 1390 (2011)</p>
            <button id='btn-5'>Learn More</button>
          </div>
        </div>
    </div>
    <div className='section-bottom'>
      <div className='card-cont'>
        <Card_count count='100' title="Projects" info="this is the no of projects we completed this year" />
        <Card_count count='100' title="Projects" info="this is the no of projects we completed this year" />
        <Card_count count='100' title="Projects" info="this is the no of projects we completed this year" />
      </div>
    </div>
    </div>
    </>
  )
}
