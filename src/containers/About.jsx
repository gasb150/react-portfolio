import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';
import AboutCard from '../components/AboutCard';
import MainButton from '../components/MainButton';
import image from '../assets/images/desing/image_dots_with_teal.png';
import iconFrameworks from '../assets/images/desing/ic_framework.svg';
import iconSkills from '../assets/images/desing/ic_skills.svg';
import iconLanguages from '../assets/images/desing/ic_languages_mob.png';

const About = ({ dowmloadUrl }) => (
  <>
    <div id="about" className="row my-5 py-5">
      <div className="row col-lg-6 flex">
        <AboutCard title="languages" background="primary" icon={iconLanguages} />
        <AboutCard title="frameworks" background="danger" icon={iconFrameworks} />
        <AboutCard title="skills" background="warning" icon={iconSkills} />
        <div className="col-lg-6 align-self-end d-flex justify-content-end">
          <img src={image} alt="dots_with_teal" />
        </div>

      </div>
      <div className="col-lg-5 offset-lg-1">
        <h1 className="h-big">About</h1>
        <p>
          I am a full-stack software student. I have experience in:
          pair programming and real-world projects,
          experience with Ruby on Rails and JavaScript software.
          My career began in the education industry,
          so I am familiar with leading people,
          learning and teaching new concepts,
          and keeping up to date with recent information.
          I am currently completing coursework at Microverse,
          a remote pair-programming school,
          building several front-end and back-end projects.

          - In my free time, I enjoy playing music,
          singing and cooking,
          but I hate watching horror movies.

        </p>

        <MainButton url={dowmloadUrl} msj="Get my Cv  " icon={<Icon icon="ant-design:download-outlined" />} dowmload="resume" />

      </div>
    </div>
  </>
);

About.propTypes = {

  dowmloadUrl: PropTypes.element.isRequired,

};

export default About;
