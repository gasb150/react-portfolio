import React from 'react';
import AboutCard from '../components/AboutCard';
import MainButton from '../components/MainButton';
import image from '../assets/images/desing/image_dots_with_teal.png';
import iconFrameworks from '../assets/images/desing/ic_framework.svg';
import iconSkills from '../assets/images/desing/ic_skills.svg';
import iconLanguages from '../assets/images/desing/ic_languages_mob.png';

const About = () => (
  <>
    <div className="row my-5 py-5">
      <div className="row col-lg-6 flex">
        <AboutCard title="languages" background="primary" icon={iconLanguages} />
        <AboutCard title="frameworks" background="danger" icon={iconFrameworks} />
        <AboutCard title="skills" background="warning" icon={iconSkills} />
        <div className="col-lg-6 align-self-end d-flex justify-content-end">
          <img src={image} alt="dots_with_teal" />
        </div>

      </div>
      <div className="col-lg-6">
        <h1>About</h1>
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
        <MainButton url="https://dl.dropboxusercontent.com/s/nv0d0d4c67vb34b/Resume%20Gustavo%20Sanmartin.pdf?dl=0" msj="Get my Cv" icon="dowm" dowmload="resume" />

      </div>
    </div>
  </>
);

export default About;
