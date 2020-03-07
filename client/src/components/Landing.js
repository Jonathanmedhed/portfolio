import React, { Fragment, createRef } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import { DevObj } from '../resources/Data';

const Landing = () => {
  let skillsRef = createRef();
  let projectsRef = createRef();
  let contactRef = createRef();

  return (
    <Fragment>
      <Navbar
        type={'home'}
        skillsRef={skillsRef}
        projectsRef={projectsRef}
        contactRef={contactRef}
      />
      <section className='header'>
        <div className='dark-overlay'>
          <div className='header-inner'>
            <h1 className='x-large'>{DevObj.name}</h1>
            <p className='lead'>{DevObj.degree}</p>
            <p className='lead'>{DevObj.occupation}</p>
          </div>
        </div>
      </section>
      <section ref={skillsRef} className='container bg-silver'>
        <h1 className='py-1 bg-primary'>Skills</h1>
        <div className='cards'>
          <div className='card-small bg-white'>
            <div className='card-top bg-primary'>
              <i className='fas fa-desktop fa-5x hide-sm'></i>
              <i className='fas fa-desktop show-sm'></i>
              <p className='show-sm'>Front End</p> <p></p>
            </div>
            <div className='card-title bg-dark hide-sm'>
              <p className='card-mid-title bg-primary'> Front End</p>
            </div>
            <div className='card-body'>
              <div className='show-sm'>
                <ul className='card-list-small'>
                  {DevObj.technologies.frontend.map(tech => (
                    <li>
                      <i
                        className={`fab fa-${(tech === 'React' && 'react') ||
                          (tech === 'HTML' && 'html5') ||
                          (tech === 'Css' && 'css3-alt') ||
                          (tech === 'Bootstrap' && 'bootstrap') ||
                          (tech === 'Sass' && 'sass')}`}
                      ></i>{' '}
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
              <div className='hide-sm'>
                <ul className='card-list-small'>
                  {DevObj.technologies.frontend.map(tech => (
                    <li>
                      <i
                        className={`fab fa-${(tech === 'React' && 'react') ||
                          (tech === 'HTML' && 'html5') ||
                          (tech === 'Css' && 'css3-alt') ||
                          (tech === 'Bootstrap' && 'bootstrap') ||
                          (tech === 'Sass' && 'sass')}`}
                      ></i>{' '}
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className='card-small bg-white'>
            <div className='card-top bg-primary'>
              <i className='fas fa-network-wired fa-5x hide-sm'></i>
              <i className='fas fa-network-wired show-sm'></i>
              <p className='show-sm'>Back End</p> <p></p>
            </div>
            <div className='card-title bg-dark hide-sm'>
              <p className='card-mid-title bg-primary'>Back End</p>
            </div>
            <div className='card-body'>
              <ul className='card-list-small'>
                {DevObj.technologies.backend.map(tech => (
                  <li>
                    <i
                      className={`fab fa-${(tech === 'Node.js' && 'node-js') ||
                        (tech === 'Django' && 'redhat')}`}
                    ></i>{' '}
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className='card-small bg-white'>
            <div className='card-top bg-primary'>
              <i className='fas fa-database fa-5x hide-sm'></i>
              <i className='fas fa-database show-sm'></i>
              <p className='show-sm'>Databases</p> <p></p>
            </div>
            <div className='card-title bg-dark hide-sm'>
              <p className='card-mid-title bg-primary'>Databases</p>
            </div>
            <div className='card-body'>
              <div className='hide-sm'>
                <ul className='card-list-small'>
                  {DevObj.technologies.databases.map(tech => (
                    <li>
                      <i
                        className={`fas fa-${(tech === 'MongoDB' && 'leaf') ||
                          (tech === 'PostgreSQL' && 'republican') ||
                          (tech === 'MySQL' && 'fish')}`}
                      ></i>{' '}
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
              <div className='show-sm'>
                <ul className='card-list-small'>
                  {DevObj.technologies.databases.map(tech => (
                    <li>
                      <i
                        className={`fas fa-${(tech === 'MongoDB' && 'leaf') ||
                          (tech === 'PostgreSQL' && 'republican') ||
                          (tech === 'MySQL' && 'fish')}`}
                      ></i>{' '}
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className='card-small bg-white'>
            <div className='card-top bg-primary'>
              <i className='fas fa-laptop-code fa-5x hide-sm'></i>
              <i className='fas fa-laptop-code show-sm'></i>
              <p className='show-sm'>Languages</p> <p></p>
            </div>
            <div className='card-title bg-dark hide-sm'>
              <p className='card-mid-title bg-primary'>Languages</p>
            </div>
            <div className='card-body'>
              <div className='hide-sm'>
                <ul className='card-list-small'>
                  {DevObj.technologies.languages.map(tech => (
                    <li>
                      <i
                        className={`fab fa-${(tech === 'JavaScript' && 'js') ||
                          (tech === 'Java' && 'java') ||
                          (tech === 'TypeScript' && 'codepen') ||
                          (tech === 'Python' && 'python')}`}
                      ></i>{' '}
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
              <div className='show-sm'>
                <ul className='card-list-small'>
                  {DevObj.technologies.languages.map(tech => (
                    <li>
                      <i
                        className={`fab fa-${(tech === 'JavaScript' && 'js') ||
                          (tech === 'Java' && 'java') ||
                          (tech === 'TypeScript' && 'codepen') ||
                          (tech === 'Python' && 'python')}`}
                      ></i>{' '}
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section ref={projectsRef} className='container'>
        <h1 className='py-1 bg-primary'>Projects</h1>
        <div className='cards bg-silver'>
          {DevObj.projects.map(project => (
            <div className='card bg-white'>
              <div className='card-header bg-primary'>
                <p className='lead'>{project.name}</p>
              </div>
              <div className='hide-sm'>
                <h3>{project.description}</h3>
                <div className='card-body'>
                  <ul className='card-body-items'>
                    <ul className='card-items'>
                      {project.technologies.frontend.map(tech => (
                        <li>
                          <i
                            className={`fab fa-${(tech === 'React' &&
                              'react') ||
                              (tech === 'HTML' && 'html5') ||
                              (tech === 'Css' && 'css3-alt') ||
                              (tech === 'Bootstrap' && 'bootstrap') ||
                              (tech === 'Java Swing' && 'java')}`}
                          ></i>{' '}
                          {tech}
                        </li>
                      ))}
                      {project.technologies.backend.map(tech => (
                        <li>
                          <i
                            className={`fab fa-${(tech === 'Node.js' &&
                              'node-js') ||
                              (tech === 'Django' && 'redhat')}`}
                          ></i>{' '}
                          {tech}
                        </li>
                      ))}
                      {project.technologies.databases.map(tech => (
                        <li>
                          <i
                            className={`fas fa-${(tech === 'MongoDB' &&
                              'leaf') ||
                              (tech === 'PostgreSQL' && 'republican') ||
                              (tech === 'MySQL' && 'fish')}`}
                          ></i>{' '}
                          {tech}
                        </li>
                      ))}
                      {project.technologies.languages.map(tech => (
                        <li>
                          <i
                            className={`fab fa-${(tech === 'JavaScript' &&
                              'js') ||
                              (tech === 'Java' && 'java') ||
                              (tech === 'TypeScript' && 'codepen') ||
                              (tech === 'Python' && 'python')}`}
                          ></i>{' '}
                          {tech}
                        </li>
                      ))}
                    </ul>
                  </ul>
                </div>
              </div>
              <div className='show-sm'>
                <div className='card-body-mobile'>
                  <h3>{project.description}</h3>
                  <ul className='card-body-items'>
                    <ul className='card-items-small'>
                      {project.technologies.frontend.map(tech => (
                        <li>
                          <i
                            className={`fab fa-${(tech === 'React' &&
                              'react') ||
                              (tech === 'HTML' && 'html5') ||
                              (tech === 'Css' && 'css3-alt') ||
                              (tech === 'Bootstrap' && 'bootstrap')}`}
                          ></i>{' '}
                          {tech}
                        </li>
                      ))}
                      {project.technologies.backend.map(tech => (
                        <li>
                          <i
                            className={`fab fa-${(tech === 'Node.js' &&
                              'node-js') ||
                              (tech === 'Django' && 'redhat')}`}
                          ></i>{' '}
                          {tech}
                        </li>
                      ))}
                      {project.technologies.databases.map(tech => (
                        <li>
                          <i
                            className={`fas fa-${(tech === 'MongoDB' &&
                              'leaf') ||
                              (tech === 'PostgreSQL' && 'republican') ||
                              (tech === 'MySQL' && 'fish')}`}
                          ></i>{' '}
                          {tech}
                        </li>
                      ))}
                      {project.technologies.languages.map(tech => (
                        <li>
                          <i
                            className={`fab fa-${(tech === 'JavaScript' &&
                              'js') ||
                              (tech === 'Java' && 'java') ||
                              (tech === 'TypeScript' && 'codepen') ||
                              (tech === 'Python' && 'python')}`}
                          ></i>{' '}
                          {tech}
                        </li>
                      ))}
                    </ul>
                  </ul>
                </div>
              </div>
              <div className='card-bottom'>
                <Link to={`/projects/${project.name}`}>
                  <button className='btn btn-primary'>Demo</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
      <div ref={contactRef}></div>
    </Fragment>
  );
};

export default Landing;
