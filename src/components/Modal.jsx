import React from 'react';
import PropTypes from 'prop-types';
import MainButton from './MainButton';
import NextPrevius from './nextPrevius';

const Modal = ({
  logo, skills, languages, project, frameworks, projects,
}) => {
  const {
    images, name, skillId, languageId, frameworkId, id, liveUrl, sourceUrl,
  } = project;

  const imagesArr = [];
  let m = 0;
  while (m < (Object.keys(images).length)) {
    imagesArr.push((images[m]));
    m += 1;
  }
  return (
    <div className="modal fade " id={`projectModal_${id}`} tabIndex="-1" aria-labelledby={`projectModalLabel_${id}`} aria-hidden="true">
      <div className="modal-dialog modal-xl">
        <div className="modal-content border border-5 border-dark m-5 p-5">
          <div className="modal-header">
            <div>
              <img className="mb-4" src={logo} alt="logo" />
              <h5 className="modal-title" id={`projectModalLabel_${id}`}>{name}</h5>
            </div>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
          </div>
          <div className="modal-body">
            <div className="row">
              <div className="col-3">
                <div className="btn btn-light">
                  {skills.map((skill) => (
                    skill.id === skillId ? skill.name : ''
                  ))}
                </div>
              </div>
              <div className="col-3">
                <div className="btn btn-light">
                  {languages.map((language) => (
                    language.id === languageId ? language.name : ''
                  ))}
                </div>
              </div>
              <div className="col-3">
                <div className="btn btn-light">
                  {frameworks.map((framework) => (
                    framework.id === frameworkId ? framework.name : ''
                  ))}
                </div>
              </div>

            </div>
            <>

              <div id="carouselExampleDark" className="carousel carousel-dark slide outside-pb-0" data-bs-ride="carousel">
                <div className="carousel-indicators outside-mb-0">
                  {imagesArr.map((image, index) => (
                    <>
                      <>
                        {index === 0 ? (
                          <>
                            <img type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active slide-instead" aria-current="true" aria-label="Slide 1" src={image} alt="ll" />

                          </>
                        ) : (
                          <>
                            {index === imagesArr.length + 1 ? ''
                              : <img type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to={index} className="slide-instead" aria-label={`Slide ${index}`} src={image} alt="ll" />}
                          </>
                        )}
                      </>
                    </>
                  ))}

                </div>

                <div className="carousel-inner">

                  {imagesArr.map((image, index) => (
                    <>
                      {
                                index === 0
                                  ? (
                                    <div className="carousel-item active" data-bs-interval="10000">
                                      <img src={image} className="d-block w-100" alt="..." />
                                      <div className="carousel-caption d-none d-md-block">
                                        <h5>First slide label</h5>
                                        <p>
                                          Some representative placeholder content
                                          for the first slide.
                                        </p>
                                      </div>
                                    </div>
                                  )
                                  : (
                                    <div className="carousel-item" data-bs-interval="10000">
                                      <img src={image} className="d-block w-100" alt="..." />
                                      <div className="carousel-caption d-none d-md-block">
                                        <h5>First slide label</h5>
                                        <p>
                                          Some representative placeholder
                                          content for the first slide.
                                        </p>
                                      </div>
                                    </div>
                                  )
                              }
                    </>
                  ))}
                </div>

                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true" />
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true" />
                  <span className="visually-hidden">Next</span>
                </button>
              </div>

            </>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Blanditiis minus minima vero explicabo suscipit sit delectus
              maxime voluptatibus, iure accusamus. Alias corrupti quo culpa.
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.

              Magnam consequuntur nihil minus reprehenderit tempore sunt alias
              quidem unde temporibus doloremque error, non quibusdam qui natus
              expedita quam totam! Accusantium exercitationem iusto quaerat.
            </p>
            <div className="row d-flex justify-content-around">
              <div className="col-lg-3">
                <MainButton url={liveUrl} msj="Live Demo" icon="icon" />
              </div>
              <div className="col-lg-3">
                <MainButton url={sourceUrl} msj="See Soruce" icon="icon" />
              </div>
            </div>

            {project.id === projects[0].id
              ? (
                <div className="row">
                  <div className="col-lg-3 offset-lg-9 text-end">
                    <NextPrevius target={`#projectModal_${projects[1].id}`} txt="Next" />
                  </div>
                </div>
              ) : (
                <>

                  {project.id === projects[(projects.length - 1)].id
                    ? (
                      <>
                        <NextPrevius target={`#projectModal_${projects[(projects.length - 2)].id}`} txt="Previous" />

                      </>
                    )
                    : (
                      <>
                        {projects.map((projectChk, index) => (
                          <>
                            {projectChk.id === project.id
                              ? (
                                <div className="row">
                                  <div className="col-lg-3">
                                    <NextPrevius target={`#projectModal_${projects[(index - 1)].id}`} txt="Previous" />
                                  </div>
                                  <div className="col-lg-3 offset-lg-6 text-end">
                                    <NextPrevius target={`#projectModal_${projects[index + 1].id}`} txt="Next" />
                                  </div>
                                  {' '}

                                </div>
                              ) : ''}

                          </>
                        ))}

                      </>
                    )}
                </>
              )}
          </div>

        </div>
      </div>
    </div>

  );
};

Modal.propTypes = {
  logo: PropTypes.element.isRequired,
  skills: PropTypes.element.isRequired,
  frameworks: PropTypes.element.isRequired,
  languages: PropTypes.element.isRequired,
  project: PropTypes.element.isRequired,
  projects: PropTypes.element.isRequired,
};

export default Modal;
