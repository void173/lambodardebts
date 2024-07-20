import React , {useEffect}from 'react';
import img1 from '../../assets/online-business.png'
import Cards from '../../components/js/Card' 
import { Container } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';
// Import your Card component here
import '../css/services.css'


const Services = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Global duration for all animations
      once: false, // Whether animation should happen only once - while scrolling down
      mirror: false, // Whether elements should animate out while scrolling past them
    });
  }, []);
  return (
    <Container>
    <section>
      <h3 id='page-heading' className="text-center">Services</h3>
      <div className='first-section'>
        <div className='first-section-left'>
          <h4 data-aos="fade-right" data-aos-once="true">Affordable services provided by us.</h4>
          <p data-aos="fade-left" data-aos-once="true">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in et, lectus sit lorem id integer.</p>
          <span id='btn' data-aos="fade-up" data-aos-once="true"><button >Explore</button></span>
        </div>
        <div className='first-section-right'>
          <img src={img1} alt="online business" className='img-fluid' data-aos="fade-left"></img>
        </div>
        
      </div>

      <div className='second-section-carrier-page' data-aos="fade-down" data-aos-once="true">
        <h3>Services for us</h3>
        <div className='info-para-carrier'>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in et, lectus sit lorem id integer.</p>
        </div>
      </div>

      {/* Cards Section */}
      <Container>
      <div className="cards-container">
        <div className="cards-row" data-aos="fade-up" data-aos-once="true">
          <Cards />
          <Cards />
        </div>
        <div className="cards-row" data-aos="fade-up" data-aos-once="true">
          <Cards />
          <Cards />
        </div>
        <div className="cards-row" data-aos="fade-up" data-aos-once="true">
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