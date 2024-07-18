import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'; 
import axios from 'axios';
import contactImage from '../../assets/contactUs.png'; 
import '../css/contact.css';
import callImage from '../../assets/Call_Contact.png';
import emailImage from '../../assets/Email.png';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/contact', formData);
      if (response.status === 200) {
        alert('Contact details saved and email sent');
      } else {
        alert('Failed to send contact details');
      }
    } catch (err) {
      console.error('Error sending contact form data', err);
      alert('Error sending contact form data');
    }
  };

  return (
    <section>
      <div className="hero-container">
        <div className="left-container">
          <div className="text-container">
            <h2>Get in touch</h2>
            <p>Visit our agency or simply send us an email anytime you want. If you have any questions, please feel free to contact us.</p>
          </div>
        </div>
        <div className="right-container">
          <div className="contact-info">
            <div className="contact-item">
              <img src={callImage} alt="Call" />
              <p>9322944343 / 7058417001</p>
            </div>
            <div className="contact-item">
              <img src={emailImage} alt="Email" />
              <p>lambodardebtsolution@gmail.com</p>
            </div>
          </div>
        </div>
      </div>

      <div
        className="background-image"
        style={{
          backgroundImage: `url(${contactImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '100vh', 
          display: 'flex',
          alignItems: 'center',
          padding: '50px'
        }}
      >
        <div style={{ width: '100%', padding: '20px' }}>
          <h1 style={{ textAlign: 'left', marginBottom: '30px', paddingLeft: '20px' }}>Contact Us</h1>
          <Form style={{ maxWidth: '600px', padding: '20px', borderRadius: '10px' }} onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                placeholder="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                placeholder="Phone Number"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                type="email"
                placeholder="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
