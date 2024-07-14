import React from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button'; 
import contactImage from '../../assets/contactUs.png'; 

function Contact() {
  return (
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
        <Form style={{ maxWidth: '600px', backgroundColor: 'rgba(255, 255, 255, 0.8)', padding: '20px', borderRadius: '10px' }}>
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
  );
}

export default Contact;
