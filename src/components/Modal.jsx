import React from 'react'
import MainButton from './MainButton'
import NextPrevius from './nextPrevius'
const Modal = ({logo, skills, languages, project, frameworks, projects}) => {
  
  const { images, name, skill_id, language_id, framework_id, id, live_url, source_url } = project
 
  let images_arr = []
  let m = 0
  while (m < (Object.keys(images).length)) {
    images_arr.push((images[m]))
    m += 1
  }
  return (
    <div class="modal fade " id={`projectModal_${id}`} tabindex="-1" aria-labelledby={`projectModalLabel_${id}`} aria-hidden="true">
                <div class="modal-dialog modal-xl">
                  <div class="modal-content border border-5 border-dark m-5 p-5">
                    <div class="modal-header">
                      <div>
                        <img className="mb-4" src={logo} alt="logo" />
                        <h5 class="modal-title" id={`projectModalLabel_${id}`}>{name}</h5>
                      </div>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                      <div className="row">
                        <div className="col-3">
                          <div className="btn btn-light">
                            {skills.map(skill => (
                              skill.id === skill_id ? skill.name : ''
                            ))}
                          </div>
                        </div>
                        <div className="col-3">
                          <div className="btn btn-light">
                            {languages.map(language => (
                              language.id === language_id ? language.name : ''
                            ))}
                          </div>
                        </div>
                        <div className="col-3">
                          <div className="btn btn-light">
                            {frameworks.map(framework => (
                              framework.id === framework_id ? framework.name : ''
                            ))}
                          </div>
                        </div>

                      </div>
                      <>

                        <div id="carouselExampleDark" class="carousel carousel-dark slide outside-pb-0" data-bs-ride="carousel">
                          <div class="carousel-indicators outside-mb-0">
                            {images_arr.map((image, index) => (<>{
                              <>{index === 0 ? <>
                                <img type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active slide-instead" aria-current="true" aria-label="Slide 1" src={image} alt='ll' />


                              </> : <>{index === images_arr.length + 1 ? ''
                                : <img type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to={index} className="slide-instead" aria-label={`Slide ${index}`} src={image} alt='ll' />}
                              </>
                              }
                              </>

                            }</>))}

                          </div>

                          <div class="carousel-inner">

                            {images_arr.map((image, index) => (
                              <>{
                                index === 0 ?
                                  <div class="carousel-item active" data-bs-interval="10000">
                                    <img src={image} class="d-block w-100" alt="..." />
                                    <div class="carousel-caption d-none d-md-block">
                                      <h5>First slide label</h5>
                                      <p>Some representative placeholder content for the first slide.</p>
                                    </div>
                                  </div> :
                                  <div class="carousel-item" data-bs-interval="10000">
                                    <img src={image} class="d-block w-100" alt="..." />
                                    <div class="carousel-caption d-none d-md-block">
                                      <h5>First slide label</h5>
                                      <p>Some representative placeholder content for the first slide.</p>
                                    </div>
                                  </div>
                              }</>
                            ))}
                          </div>

                          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                          </button>
                          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                          </button>
                        </div>

                      </>
                      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                        Blanditiis minus minima vero explicabo suscipit sit delectus maxime voluptatibus, iure accusamus. Alias corrupti quo culpa. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        Magnam consequuntur nihil minus reprehenderit tempore sunt alias quidem unde temporibus doloremque error, non quibusdam qui natus expedita quam totam! Accusantium exercitationem iusto quaerat.</p>
                      <div class="row d-flex justify-content-around">
                        <div className="col-lg-3">
                          <MainButton url={live_url} msj='Live Demo' icon='icon' />
                        </div>
                        <div className="col-lg-3">
                          <MainButton url={source_url} msj='See Soruce' icon='icon' />
                        </div>
                      </div>

                      {project.id === projects[0].id ?
                        <div className="row">
                          <div className="col-lg-3 offset-lg-9 text-end">
                            <NextPrevius target={`#projectModal_${projects[1].id}`} txt='Next' />
                          </div>
                        </div> : <>

                          {project.id === projects[(projects.length - 1)].id ?
                            <>
                              <NextPrevius target={`#projectModal_${projects[(projects.length - 2)].id}`} txt='Previous' />

                            </> :
                            <>
                              {projects.map((project_chk, index) => (
                                <>
                                  {project_chk.id === project.id ?
                                    <div className="row">
                                      <div className="col-lg-3">
                                        <NextPrevius target={`#projectModal_${projects[(index - 1)].id}`} txt='Previous' />
                                      </div>
                                      <div className="col-lg-3 offset-lg-6 text-end">
                                        <NextPrevius target={`#projectModal_${projects[index + 1].id}`} txt='Next' />
                                      </div> </div> : ''}

                                </>
                              ))}

                            </>}
                        </>}
                    </div>

                  </div>
                </div>
              </div>
            
  )


}

export default Modal