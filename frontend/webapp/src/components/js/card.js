import React from 'react';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import JobImage from '../../assets/Mangetsajob.png';

function CustomCard() {
  const cardTitleStyle = {
    fontFamily: 'Poppins, sans-serif',
    fontWeight: 700,
    fontSize: '24px',
    lineHeight: '36px',
    marginBottom: '10px',
    width: '100%', // Adjust width as needed
  };

  const cardTextStyle = {
    fontFamily: 'Poppins, sans-serif',
    fontWeight: 400,
    fontSize: '16px',
    lineHeight: '24px',
  };

  return (
    <div className="row justify-content-center">
      {/* First Card */}
      <div className="col-md-6 col-lg-4 mb-4">
        <Card style={{ width: '100%', background: '#F4F6FA' }}>
          <Card.Body className="d-flex">
            <div style={{ paddingRight: '20px', flex: '1' }}>
              <Card.Title style={cardTitleStyle}>Back Office operations</Card.Title>
              <Card.Text style={cardTextStyle}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in et, lectus sit lorem id integer.
              </Card.Text>
            </div>
            <div style={{ flex: '1', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <Image src={JobImage} style={{ width: '100%', height: 'auto', maxWidth: '210px' }} />
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default CustomCard;
