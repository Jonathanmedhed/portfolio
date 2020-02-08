import React, { useEffect, useState, Fragment, createRef } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Lightbox from './Lighbox';
import { DevObj } from '../resources/Data';

function Project({ match }) {
  const [project, setProject] = useState(null);
  const [channel, setChannel] = useState(null);
  const [openImg, setOpenImg] = useState(false);
  const [img, setImg] = useState(null);

  let screenRef = createRef();
  let contactRef = createRef();

  useEffect(() => {
    const setData = async () => {
      if (match.params.name && !channel) {
        DevObj.projects.forEach(project => {
          if (project.name === match.params.name) {
            setProject(project);
            window.scrollTo(0, screenRef.current.offsetTop);
          }
        });
      }
    };
    setData();
  }, []);

  const changeChannel = async choice => {
    window.scrollTo(0, screenRef.current.offsetTop);
    setChannel(choice);
    console.log(`Channel = ${choice}`);
  };

  const openLightBox = async name => {
    setImg(name);
    setOpenImg(!openImg);
  };

  return (
    <div>
      {openImg && <Lightbox name={img} toggle={setOpenImg} show={openImg} />}
      <Navbar
        type={'project'}
        setProject={setProject}
        setChannel={setChannel}
        contactRef={contactRef}
      />
      <div ref={screenRef}>
        {project && (
          <Fragment>
            <div className='show-sm'>
              <section
                className={`${
                  project.mainImg.includes('mobile') ||
                  (channel && channel.includes('mobile'))
                    ? 'header-project-sm-mobile'
                    : 'header-project-sm'
                }`}
              >
                <div className='dark-overlay-project'>
                  <div className='header-project-inner'>
                    <h1 className='lead'>{project.name}</h1>
                    <div
                      className={`${channel ? channel : project.mainImgMobile}`}
                    >
                      <div
                        className={`${
                          project.mainImg.includes('mobile') ||
                          (channel && channel.includes('mobile'))
                            ? 'expand-mobile-sm'
                            : 'expand-mobile'
                        }`}
                      >
                        <i
                          onClick={() =>
                            openLightBox(
                              `${channel ? channel : project.mainImgMobile}`
                            )
                          }
                          className='fas fa-expand'
                        ></i>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
            <div className='hide-sm'>
              <section
                className={`${
                  project.mainImg.includes('mobile') ||
                  (channel && channel.includes('mobile'))
                    ? 'header-mobile'
                    : 'header-project'
                }`}
              >
                <div className='dark-overlay-project'>
                  <div className='header-project-inner'>
                    <h1 className='lead'>{project.name}</h1>
                    <div className={`${channel ? channel : project.mainImg}`}>
                      <div className='expand'>
                        <i
                          onClick={() =>
                            openLightBox(
                              `${channel ? channel : project.mainImg}`
                            )
                          }
                          className='fas fa-expand'
                        ></i>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </Fragment>
        )}
      </div>
      <section className='container'>
        <h1 className='py-1 bg-primary'>Features</h1>
        <div className='cards bg-silver'>
          {project && (
            <Fragment>
              {project.features.map(feat => (
                <div className='card bg-white'>
                  <div className='card-header bg-primary'>
                    <p className='lead'>{feat.title}</p>
                  </div>
                  <div className='card-body-list'>
                    <ul className='card-list'>
                      {feat.description.map(desc => (
                        <li>
                          <i className='far fa-dot-circle'></i> {desc}
                        </li>
                      ))}
                      <li>
                        <div className='card-submit'>
                          <button
                            onClick={() => changeChannel(feat.imgMobile)}
                            className='btn btn-primary show-sm'
                          >
                            Demo
                          </button>
                          <button
                            onClick={() => changeChannel(feat.img)}
                            className='btn btn-primary hide-sm'
                          >
                            Demo
                          </button>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              ))}
            </Fragment>
          )}
        </div>
      </section>
      <section className='container bg-silver'>
        <h1 className='py-1 bg-primary'>Specs</h1>
        <div className={project === 'list-tool' ? 'cards two-items' : 'cards'}>
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
              {project && (
                <Fragment>
                  <ul className='card-list-small'>
                    {project.technologies.frontend.length === 0 ? (
                      <li>N/A</li>
                    ) : (
                      project.technologies.frontend.map(tech => (
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
                      ))
                    )}
                  </ul>
                </Fragment>
              )}
            </div>
          </div>
          {project && (
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
                {project && (
                  <Fragment>
                    <ul className='card-list-small'>
                      {project.technologies.backend.length === 0 ? (
                        <li>N/A</li>
                      ) : (
                        project.technologies.backend.map(tech => (
                          <li>
                            <i
                              className={`fab fa-${(tech === 'Node.js' &&
                                'node-js') ||
                                (tech === 'Django' && 'redhat')}`}
                            ></i>{' '}
                            {tech}
                          </li>
                        ))
                      )}
                    </ul>
                  </Fragment>
                )}
              </div>
            </div>
          )}
          <div className='card-small bg-white'>
            <div className='card-top bg-primary'>
              <i className='fas fa-database fa-5x hide-sm'></i>
              <i className='fas fa-database show-sm'></i>
              <p className='show-sm'>Database</p> <p></p>
            </div>
            <div className='card-title bg-dark hide-sm'>
              <p className='card-mid-title bg-primary'>Database</p>
            </div>
            <div className='card-body'>
              {project && (
                <Fragment>
                  {' '}
                  <ul className='card-list-small'>
                    {project.technologies.databases.length === 0 ? (
                      <li>N/A</li>
                    ) : (
                      project.technologies.databases.map(tech => (
                        <li>
                          <i
                            className={`fas fa-${(tech === 'MongoDB' &&
                              'leaf') ||
                              (tech === 'PostgreSQL' && 'republican') ||
                              (tech === 'MySQL' && 'fish')}`}
                          ></i>{' '}
                          {tech}
                        </li>
                      ))
                    )}
                  </ul>
                </Fragment>
              )}
            </div>
          </div>

          <div className='card-small bg-white'>
            <div className='card-top bg-primary'>
              <i className='fas fa-laptop-code fa-5x hide-sm'></i>
              <i className='fas fa-laptop-code show-sm'></i>
              <p className='show-sm'>Language</p> <p></p>
            </div>
            <div className='card-title bg-dark hide-sm'>
              <p className='card-mid-title bg-primary'>Language</p>
            </div>
            <div className='card-body'>
              {project && (
                <Fragment>
                  <ul className='card-list-small'>
                    {project.technologies.languages.length === 0 ? (
                      <li>N/A</li>
                    ) : (
                      project.technologies.languages.map(tech => (
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
                      ))
                    )}
                  </ul>
                </Fragment>
              )}
            </div>
          </div>
        </div>
      </section>
      <section className='container'>
        <h1 className='py-1 bg-primary'>Link</h1>
        {project && (
          <div className='link'>
            Visit at: <a href={project.link}>here</a>
          </div>
        )}
      </section>
      <div ref={contactRef}></div>
    </div>
  );
}

export default Project;
