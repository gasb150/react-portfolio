import React from 'react';
import MainButton from '../components/MainButton';
import SocialContent from './SocilContent';
import imagen1 from '../assets/images/desing/image-geometry_1.png';
import imagen2 from '../assets/images/desing/image_geometry_2.png';
import '../Styles/fonts.css';

const Hello = () => (
  <section id="hello" className="row p-5">
    <div className="col-lg-6">
      <h1 className="h-big pt-5 mt-5">Gustavo Sanmartin</h1>
      <p className="py-5">Hello! I am a full-stack software developer! I can help you build a product, feature, or website. Here are my works. If you like what you see and have a project you need coding on, don’t hesitate and contact me.</p>
      <div className="col-md-5">
        <MainButton msj="Start Colaboration" url="#contact" icon="" />
        <div className="py-5">
          <SocialContent bg="dark" />
        </div>
      </div>
    </div>
    <div className="col-lg-6 d-none d-lg-block">
      <img src={imagen1} alt="imagen" className="img-fluid" />
    </div>

    <div className="col-lg-6 d-block d-lg-none">
      <img src={imagen2} alt="imagen" className="w-100" />
    </div>
  </section>
);

export default Hello;
