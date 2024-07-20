import React, { useState, useEffect } from 'react';
import '../css/carrier.css';
import interviewImage from '../../assets/OnlineInterview.png';
import Cards from '../../components/js/Card';
import AOS from 'aos';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios'; // Import axios
import { Container } from 'react-bootstrap';


const jobRoles = ['Back Office Operation', 'Telecalling', 'Field Executive', 'Analyst', 'Administrator'];

const StyledDiv = () => {
  const [showForm, setShowForm] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');
  const [selectedJobRole, setSelectedJobRole] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    jobRole: '',
    mobile: ''
  });

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: false,
    });
  }, []);

  const handleShow = () => setShowForm(true);
  const handleClose = () => setShowForm(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleJobRoleChange = (e) => {
    setSelectedJobRole(e.target.value);
    setFormData({ ...formData, jobRole: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/career', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log('Success:', response.data);
      setPopupMessage('Application submitted successfully!');
      setShowPopup(true);
      handleClose();
    } catch (error) {
      console.error('Error:', error);
      setPopupMessage('Failed to submit application. Please try again.');
      setShowPopup(true);
    }
  };

  const handlePopupClose = () => setShowPopup(false);

  return (
    <Container>
    <section>
      <h3 className="text-center">Career</h3>
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
              <Form.Control type="text" name="name" placeholder="Enter your name" value={formData.name} onChange={handleInputChange} />
            </Form.Group>

            <Form.Group controlId="formEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" name="email" placeholder="Enter your email" value={formData.email} onChange={handleInputChange} />
            </Form.Group>

            <Form.Group controlId="formJob">
              <Form.Label>Job Role</Form.Label>
              <Form.Control as="select" name="jobRole" value={selectedJobRole} onChange={handleJobRoleChange}>
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
              <Form.Control type="tel" name="mobile" placeholder="Enter your mobile number" value={formData.mobile} onChange={handleInputChange} />
            </Form.Group>
            
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>

      <Modal show={showPopup} onHide={handlePopupClose}>
        <Modal.Header closeButton>
          <Modal.Title>Application Status</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{popupMessage}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handlePopupClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </section>
    </Container>
  );
};

export default StyledDiv;
