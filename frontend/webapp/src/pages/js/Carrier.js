import React, { useState, useEffect } from 'react';
import '../css/carrier.css';
import interviewImage from '../../assets/OnlineInterview.png';
import Cards from '../../components/js/Card';
import AOS from 'aos';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

const abstyle = {
  textAlign: 'center'
};

const jobRoles = ['Back Office Operation', 'Telecalling', 'Field Executive', 'Analyst', 'Administrator'];

const StyledDiv = () => {
  const [showForm, setShowForm] = useState(false);
  const [selectedJobRole, setSelectedJobRole] = useState('');

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: false,
    });
  }, []);

  const handleShow = () => setShowForm(true);
  const handleClose = () => setShowForm(false);

  const handleJobRoleChange = (e) => {
    setSelectedJobRole(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    handleClose(); 
  };

  return (
    <section>
      <h3 style={abstyle}>Career</h3>
      <div className="styled-div">
        <h2 data-aos="fade-right">Welcome to Lambodar Debt Solutions!</h2>
        <h4 data-aos="fade-right">We are hiring!</h4>
        <Button className='button-apply' variant="outline-light" onClick={handleShow}>
          Apply now
        </Button>{' '}
        <img className='InterviewImage' src={interviewImage} alt="Online Interview" data-aos="fade-left" />
      </div>

      <div className='second-section-carrier-page'>
        <h3 data-aos="fade-right">Available Jobs</h3>
        <div className='info-para-carrier'>
          <p data-aos="fade-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in et, lectus sit lorem id integer.</p>
        </div>
      </div>

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

      <Modal show={showForm} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Application Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" />
            </Form.Group>

            <Form.Group controlId="formEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" />
            </Form.Group>

            <Form.Group controlId="formJob">
              <Form.Label>Job Role</Form.Label>
              <Form.Control as="select" value={selectedJobRole} onChange={handleJobRoleChange}>
                <option value="">Select a job role...</option>
                {jobRoles.map((role, index) => (
                  <option key={index} value={role}>
                    {role}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="formMobile">
              <Form.Label>Mobile No.</Form.Label>
              <Form.Control type="tel" placeholder="Enter your mobile number" />
            </Form.Group>
            
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </section>
  );
};

export default StyledDiv;
