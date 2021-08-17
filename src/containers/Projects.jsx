import { useEffect, useState } from 'react';
import portfolio from '../api/portfolio';
import Project from '../components/Project';
import '../Styles/rotating.css';
import imagen from '../assets/images/desing/image-geometry_2.png';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [skills, setSkills] = useState([]);
  const [languages, setLanguages] = useState([]);
  const [frameworks, setFrameworks] = useState([]);

  const onLoaded = async () => {
    const response = await portfolio.get('/proyects.json');
    setProjects(response.data);

    const response2 = await portfolio.get('/skills.json');
    setSkills(response2.data);

    const response3 = await portfolio.get('/languages.json');
    setLanguages(response3.data);

    const response4 = await portfolio.get('/frameworks.json');
    setFrameworks(response4.data);
  };

  useEffect(() => {
    onLoaded();
  }, []);

  const projectsSize = projects.length % 2;

  return (
    <>
      <div id="portfolio" className="row my-5 py-5">
        {projects.map((p, index) => (
          <>
            {index === 0
              ? (
                <>

                  <div key={`${p.id}_div_title}`} className="col-lg-4 m-auto">
                    <div className="align-middle">
                      <h4 key={`${p.id_title}`} className="rotated h-xbig">
                        Projects
                      </h4>
                    </div>
                  </div>
                  <div className="col-lg-8 " key={`${p.id}_div_project}`}>
                    <Project
                      key={p.id}
                      project={p}
                      skills={skills}
                      languages={languages}
                      frameworks={frameworks}
                      projects={projects}
                    />
                  </div>

                </>
              )
              : (
                <>
                  {projectsSize === 0

                    ? (
                      <>
                        {index === projects.length - 1
                          ? (
                            <>
                              <div key={`${p.id}_div_imagen}`} className="col-lg-6 d-flex align-items-end mt-2 ">
                                <img src={imagen} alt="geometry_2" />
                              </div>
                              <div key={`${p.id}_div_project}`} className="col-md-6 mt-2">
                                <Project
                                  key={p.id}
                                  project={p}
                                  skills={skills}
                                  languages={languages}
                                  frameworks={frameworks}
                                  projects={projects}
                                />
                              </div>
                            </>
                          )
                          : (
                            <div key={`${p.id}_div_project}`} className="col-md-6 mt-2">
                              <Project
                                key={p.id}
                                project={p}
                                skills={skills}
                                languages={languages}
                                frameworks={frameworks}
                                projects={projects}
                              />
                            </div>
                          )}
                      </>
                    )
                    : (
                      <>

                        {index === projects.length - 1
                          ? (
                            <>
                              <div className="col-md-6">
                                <Project
                                  key={p.id}
                                  project={p}
                                  skills={skills}
                                  languages={languages}
                                  frameworks={frameworks}
                                  projects={projects}
                                />
                              </div>
                              <div className="col-lg-6 d-flex align-items-end"><img src={imagen} alt="geometry_2" /></div>
                            </>
                          )
                          : (
                            <div className="col-md-6">
                              <Project
                                key={p.id}
                                project={p}
                                skills={skills}
                                languages={languages}
                                frameworks={frameworks}
                                projects={projects}
                              />
                            </div>
                          )}
                      </>
                    )}
                </>
              )}

          </>
        ))}
      </div>

    </>
  );
};

export default Projects;
