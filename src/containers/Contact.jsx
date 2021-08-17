import React from 'react';
import MainButton from '../components/MainButton';
import image from '../assets/images/desing/image_geometry_3.png';
import '../Styles/images.css';
import '../Styles/bg.css';

const Contact = () => (
  <div id="contact" className="d-flex flex-column my-5 py-5 cream-bg">
    <img src={image} alt="geometry_3" className="geometry_3" />
    <div className="m-auto">
      <h1 className="h-big">Get Started</h1>
      <p>If you want to collaborate, contact me:</p>
      <div className="row my-5">
        <div className="col-lg-6">
          <MainButton msj="Start colaboration" icon="contact" url="mailto:gasb_150@hotmail.com" />
        </div>
      </div>
      <div>
        <p>
          If the link does not work, copy and paste the email:
          <b> gasb_150@hotmail.com</b>
        </p>

      </div>
    </div>
  </div>
);

export default Contact;
