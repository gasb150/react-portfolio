import React from 'react';
import MainButton from '../components/MainButton';

const Contact = () => (
  <>
    <h1>Get Started</h1>
    <p>If you want to collaborate, contact me:</p>
    <div className="row">
      <div className="col-lg-3">
        <MainButton msj="Start colaboration" icon="contact" url="mailto:gasb_150@hotmail.com" />
      </div>
    </div>
    <div>
      If the link does not work, copy and paste the email: gasb_150@hotmail.com

    </div>
  </>
);

export default Contact;
