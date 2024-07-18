import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'; 
import contactImage from '../../assets/contactUs.png'; 
import '../css/contact.css';
import callImage from '../../assets/Call_Contact.png'
import emailImage from '../../assets/Email.png'

function Contact() {
  return (
    <section>
    <div className="hero_container">
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
          <p>9322944343 / 7058417001
          </p>
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
        padding: '50px', 
      }}
    >
      <div style={{ width: '100%', padding: '20px' }}>
        <h1 style={{ textAlign: 'left', marginBottom: '30px', paddingLeft: '20px' }}>Contact Us</h1>
        <Form style={{ maxWidth: '600px', padding: '20px', borderRadius: '10px' }}>
          <Form.Group className="mb-3">
            <Form.Control type="text" placeholder="Name" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control type="text" placeholder="Phone Number" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control type="email" placeholder="Email" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control as="textarea" rows={3} placeholder="Message" />
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
