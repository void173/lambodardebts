import React from 'react';
import IndividualIntervalsExample from '../../components/js/Carousel';
import woman from '../../assets/homepagewoman.png';
import loc from '../../assets/loc.png';
import { Container, Row, Col } from 'react-bootstrap';
import '../css/home.css';

export default function Home() {
  const imageStyle = {
    width: "100%",
    boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)'
  };

  const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    alignItems: 'center',
    color: 'white',
    zIndex: 1,
  };

  const containerStyle = {
    position: 'relative',
    width: '100%',
    display: "flex",
    justifyContent: "center"
  };

  const overlayContent = {
    height: "100%",
    width: "500px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: "50px",
    marginRight: "30px",
    flexDirection: "column"
  };

  const buttonparentStyle = {
    marginTop: "20px"
  };

  const buttonStyle = {
    backgroundColor: "rgba(255, 119, 43, 1)",
    fontFamily: "poppins",
    padding: "15px 45px 15px 45px",
    borderRadius: "30px",
    border: "none",
  };

  return (
    <>
      <div className='home-main-custom'>
        <Container>
          <div className='home-hero-custom' style={containerStyle}>
            <img style={imageStyle} src={woman} alt='woman' className="img-fluid" />
            <div style={overlayStyle}>
              <div style={overlayContent} className='home-hero-overlay'>
                <h1 style={{ fontSize: "4.1vw", fontWeight: "30px", fontFamily: "Poppins" }}>WE BRING GOOD FINANCIAL TO LIFE.</h1>
                <div>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi nemo corporis quod distinctio veniam fugit cumque cum,
                  <div style={buttonparentStyle}>
                    <button style={buttonStyle} className='home-hero-button'>Explore</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <br />
          <br />
          <div className='home-carousel-custom'>
            <h3 className='text-center'>Banks Associated with us.</h3>
            <IndividualIntervalsExample />
          </div>
          <br />
          <br />
          <br />

          <div className='headoffice-custom'>
            <h3 className='text-center'>Head office</h3>
            <br />
            <Container>
              <Row className='head-office-content-custom'>
                <Col md={6} className='head-office-content'>
                  <div>
                    <h4>Address</h4>
                    <br/>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium commodi</p>
                  </div>
                  <div>
                    <p>Mobile : 1234556</p>
                    <p>Mobile : 1234556</p>
                  </div>
                  <div>
                    <p>Email : Lambodar@debts</p>
                  </div>
                </Col>
                <Col md={6} className='head-office-loc'>
                  <img src={loc} alt='' className='img-fluid' />
                </Col>
              </Row>
            </Container>
          </div>
        </Container>
      </div>
    </>
  );
}
