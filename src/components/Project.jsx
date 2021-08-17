import React from 'react';
import PropTypes from 'prop-types';
import logo from '../assets/images/icon/favicon-32x32.png';
import '../Styles/carrousel.css';
import Modal from './Modal';

const Project = ({
  project, skills, languages, frameworks, projects,
}) => {
  const {
    images, name, skillId, languageId, frameworkId, id,
  } = project;

  const alt = `image_${name}`;

  return (
    <>

      <div className="card">
        <img src={images[0]} alt={alt} className="img-fluid" />
        <div className="card-body bg-dark">
          <div className="card-title">
            {' '}
            <h1 className="text-light">{name}</h1>
          </div>
          <div className="row">
            <div className="col-3">
              <div className="btn btn-info">
                {skills.map((skill) => (
                  skill.id === skillId ? skill.name : ''
                ))}
              </div>
            </div>
            <div className="col-3">
              <div className="btn btn-info">
                {languages.map((language) => (
                  language.id === languageId ? language.name : ''
                ))}
              </div>
            </div>
            <div className="col-3">
              <div className="btn btn-info">
                {frameworks.map((framework) => (
                  framework.id === frameworkId ? framework.name : ''
                ))}
              </div>
            </div>

            <div>
              <button type="button" className="btn btn-light mb-3 mt-5" href="url" data-bs-toggle="modal" data-bs-target={`#projectModal_${id}`}>
                <h3>

                  See this project
                  arrow

                </h3>
              </button>
              <Modal
                logo={logo}
                project={project}
                skills={skills}
                projects={projects}
                languages={languages}
                frameworks={frameworks}
              />
            </div>

          </div>
        </div>
      </div>

    </>
  );
};

Project.propTypes = {

  skills: PropTypes.element.isRequired,
  frameworks: PropTypes.element.isRequired,
  languages: PropTypes.element.isRequired,
  project: PropTypes.element.isRequired,
  projects: PropTypes.element.isRequired,
};

export default Project;
