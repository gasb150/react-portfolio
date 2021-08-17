import React from 'react'
import MainButton from './MainButton'
import NextPrevius from './nextPrevius'
import logo from '../assets/images/icon/favicon-32x32.png'
import '../Styles/carrousel.css'


const Project = ({ project, skills, languages, frameworks, projects }) => {

  console.log(projects)
  const { images, name, skill_id, language_id, framework_id, id, live_url, source_url } = project


  let m = 0
  let images_arr = []
  while (m < (Object.keys(images).length)) {
    images_arr.push((images[m]))
    m += 1
  }
  const alt = `image_${name}`
  console.log((Object.keys(images).length))
  console.log(images_arr.length)
  return (
    <>

      <div className="card">
        <img src={images[0]} alt={alt} className="img-fluid" />
        <div className="card-body bg-dark">
          <div className="card-title"> <h1 className="text-light">{name}</h1></div>
          <div className="row">
            <div className="col-3">
              <div className="btn btn-info">
                {skills.map(skill => (
                  skill.id === skill_id ? skill.name : ''
                ))}
              </div>
            </div>
            <div className="col-3">
              <div className="btn btn-info">
                {languages.map(language => (
                  language.id === language_id ? language.name : ''
                ))}
              </div>
            </div>
            <div className="col-3">
              <div className="btn btn-info">
                {frameworks.map(framework => (
                  framework.id === framework_id ? framework.name : ''
                ))}
              </div>
            </div>

            <div>
              <button className="btn btn-light mb-3 mt-5" href="url" data-bs-toggle="modal" data-bs-target={`#projectModal_${id}`}>
                <h3>


                  See this project
                  "arrow"


                </h3>
              </button>
              <div class="modal fade" id={`projectModal_${id}`} tabindex="-1" aria-labelledby={`projectModalLabel_${id}`} aria-hidden="true">
                <div class="modal-dialog modal-xl">
                  <div class="modal-content">
                    <div class="modal-header">
                      <div>
                        <img className="mb-4" src={logo} />
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
                                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active slide-insted" aria-current="true" aria-label="Slide 1"><img className="slide-instead" src={image} alt='ll'/></button>


                              </> : <>{index === images_arr.length + 1 ? ''
                                : <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to={index}  aria-label={`Slide ${index}`}><img className="slide-instead" src={image} alt='ll'/></button>}
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
                      descripcion
                      <MainButton url={live_url} msj='Live Demo' icon='icon' />
                      <MainButton url={source_url} msj='See Soruce' icon='icon' />


                      {project.id === projects[0].id ? <NextPrevius target={`#projectModal_${projects[1].id}`} txt='Next' /> : <>

                        {project.id === projects[(projects.length - 1)].id ? <> <NextPrevius target={`#projectModal_${projects[(projects.length - 2)].id}`} txt='Previous' /> </> :
                          <>
                            {projects.map((project_chk, index) => (
                              <>
                                {project_chk.id === project.id ?
                                  <div>

                                    <NextPrevius target={`#projectModal_${projects[(index - 1)].id}`} txt='Previous' />

                                    <NextPrevius target={`#projectModal_${projects[index + 1].id}`} txt='Next' />
                                  </div> : ''}

                              </>
                            ))}

                          </>}
                      </>}
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                      <button type="button" class="btn btn-primary">Save changes</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

    </>
  )
}

export default Project