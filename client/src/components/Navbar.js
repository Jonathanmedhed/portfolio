import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import { DevObj } from '../resources/Data';

function Navbar({
  type,
  skillsRef,
  projectsRef,
  setProject,
  setChannel,
  contactRef
}) {
  const [showProjects, setShowProjects] = useState(false);

  const toSkills = () => {
    window.scrollTo(0, skillsRef.current.offsetTop);
    setShowProjects(!showProjects);
  };

  const toProjects = () => {
    window.scrollTo(0, projectsRef.current.offsetTop);
    setShowProjects(!showProjects);
  };

  const toContact = () => {
    window.scrollTo(0, contactRef.current.offsetTop);
    setShowProjects(!showProjects);
  };

  const selectProject = project => {
    if (setProject) {
      setProject(project);
    }
    setShowProjects(!showProjects);
    if (setChannel) {
      setChannel(null);
    }
  };

  return (
    <nav className='navbar bg-primary'>
      <h1>
        <Link to='/'>
          <i class='fas fa-terminal'></i> {DevObj.name}
        </Link>
      </h1>
      <div className='show-sm'>
        <ul>
          {!showProjects ? (
            <li className='show-sm'>
              <div
                onClick={() => setShowProjects(!showProjects)}
                className='burger'
              >
                <i class='fas fa-bars'></i>
              </div>
            </li>
          ) : (
            <li className='fixed'>
              <ul className='dropdown'>
                <li>
                  <div
                    onClick={() => setShowProjects(!showProjects)}
                    className='burger'
                  >
                    <i class='fas fa-arrow-up'></i>
                  </div>
                </li>
                {type === 'project' && (
                  <Fragment>
                    <li>
                      <button
                        onClick={() => setShowProjects(!showProjects)}
                        className='btn btn-primary'
                      >
                        <Link to={`/`}>Home</Link>
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => toContact()}
                        className='btn btn-primary'
                      >
                        <Link>Contact</Link>
                      </button>
                    </li>
                    <li className='dropdown-header'>Projects: </li>
                    {DevObj.projects.map(project => (
                      <li>
                        <button
                          onClick={() => selectProject(project)}
                          className='btn btn-primary'
                        >
                          <Link to={`/projects/${project.name}`}>
                            {project.name}
                          </Link>
                        </button>
                      </li>
                    ))}
                  </Fragment>
                )}
                {type === 'home' && (
                  <Fragment>
                    <li onClick={() => toSkills()} className='show-sm'>
                      <button className='btn btn-primary'>Skills</button>
                    </li>
                    <li onClick={() => toContact()} className='show-sm'>
                      <button className='btn btn-primary'>Contact</button>
                    </li>
                    <li onClick={() => toProjects()} className='show-sm'>
                      <button className='btn btn-primary'>Projects</button>
                    </li>
                  </Fragment>
                )}
              </ul>
            </li>
          )}
        </ul>
      </div>
      <div className='hide-sm'>
        <ul className='fixed'>
          {type === 'home' && (
            <Fragment>
              <li onClick={() => toSkills()} className='hide-sm'>
                <button className='btn btn-primary'>Skills</button>
              </li>
              <li onClick={() => toProjects()} className='hide-sm'>
                <button className='btn btn-primary'>Projects</button>
              </li>
              <li onClick={() => toContact()} className='hide-sm'>
                <button className='btn btn-primary'>Contact</button>
              </li>
            </Fragment>
          )}
          {type === 'project' && (
            <Fragment>
              <li className='hide-sm'>
                <button className='btn btn-primary'>
                  <Link to='/'>Home</Link>
                </button>
              </li>
              <li className='hide-sm'>
                <button
                  onClick={() => toContact()}
                  className='btn btn-primary'
                >
                  Contact
                </button>
              </li>
              {!showProjects ? (
                <li className='hide-sm'>
                  <button
                    onClick={() => setShowProjects(!showProjects)}
                    className='btn btn-primary'
                  >
                    Projects
                  </button>
                </li>
              ) : (
                <li>
                  <ul className='dropdown'>
                    <li>
                      <button
                        onClick={() => setShowProjects(!showProjects)}
                        className='btn btn-primary'
                      >
                        Projects
                      </button>
                    </li>
                    {DevObj.projects.map(project => (
                      <li>
                        <button
                          onClick={() => selectProject(project)}
                          className='btn btn-primary'
                        >
                          <Link to={`/projects/${project.name}`}>
                            {project.name}
                          </Link>
                        </button>
                      </li>
                    ))}
                  </ul>
                </li>
              )}
            </Fragment>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
