import React from 'react'
import call from '../../assets/Call.png'
import gmail from '../../assets/Gmail.png'
import loc from '../../assets/Location.png'
import '../css/footer.css'
export default function Footer() {
  return (
    <>
    <div className='footer-main'>
        <div className='footer-content'>
            <div className='footer-content-contact'>
                <h4>Contact Us</h4>
                <div>
                    <img src={call} alt=' '></img><span>  919860485555 , 0240-2980505
                    Ganesh</span>
                </div>
                <br/>
                <div>
                    <img src={gmail} alt=' '></img><span>    Ganesh.mansurkar@moryaassociates.com</span>
                </div>
            </div>
            <div className='footer-content-quicklinks'>
                <h4>Quick Links</h4>
                <div>
                    <ul>
                        <li><a href='w.com'>Home</a></li>
                        <li><a href='w.com'>About Us</a></li>
                        <li><a href='w.com'>Services</a></li>
                        <li><a href='w.com'>Carriers</a></li>
                    </ul>
                </div>
            </div>
            <div className='footer-content-ourLocation'>
                <h4>Our Locations</h4>
                <div>
                    <img src={loc} alt=''></img><span><div><a href='w.com'>  Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur </a></div></span>
                </div>
                <br/>
                <div>
                    <img src={loc} alt=''></img><span><div><a href='w.com'>  Lorem ipsum dolor sit amet consectetur adipisicing elit.t ing elit. Lorem ipsum dolor sit amet consectetur</a></div></span>
                </div>
            </div>
        </div>
        <br/>
        <div className='footer-copyright'>
            <p>@2024 Lambodar Debt Solution. All Right reserved </p>
        </div>
    </div>
    </>
  )
}
