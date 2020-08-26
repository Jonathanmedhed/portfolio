import React, { Fragment, createRef, useState, useEffect } from 'react';
import Navbar from './Navbar';
import { DevObj } from '../resources/Data';
import Project from './Project';
import Totem from './_Totem';

const Landing = () => {
	// References
	let topRef = createRef();
	let skillsRef = createRef();
	let projectsRef = createRef();
	let contactRef = createRef();

	// To showproject selected
	const [project, setProject] = useState(null);

	// To determine background and totem effects
	const [inceptionLevel, setInceptionLevel] = useState(0);

	// Increase inception level, if max reached set to 0
	// Close project if there is one
	const goDeeper = (project) => {
		if (inceptionLevel === 3) {
			setInceptionLevel(0);
		} else {
			setInceptionLevel(inceptionLevel + 1);
		}
		if (project) {
			setProject(project);
		} else {
			window.scrollTo(0, topRef.current.offsetTop);
			setProject(null);
		}
	};

	return (
		<Fragment>
			{/** Reference to return screen to top */}
			<div ref={topRef}></div>
			{/** Show project or landing page */}
			{project ? (
				<Project
					currentProject={project}
					setCurrentProject={setProject}
					inceptionLevel={inceptionLevel}
					setInceptionLevel={setInceptionLevel}
					goDeeper={goDeeper}
				/>
			) : (
				<Fragment>
					<Navbar
						type={'home'}
						skillsRef={skillsRef}
						projectsRef={projectsRef}
						contactRef={contactRef}
						setCurrentProject={setProject}
						setInceptionLevel={setInceptionLevel}
					/>
					<section
						ref={topRef}
						// Change header background depending on inception level
						className={
							inceptionLevel === 0
								? 'header-0'
								: inceptionLevel === 1
								? 'header-1'
								: inceptionLevel === 2
								? 'header-2'
								: inceptionLevel === 3
								? 'header-3'
								: 'header'
						}
					>
						<div className="dark-overlay">
							<div className="header-inner">
								<h1 className="x-large">{DevObj.name}</h1>
								<p className="lead">{DevObj.degree}</p>
								<p className="lead">{DevObj.occupation}</p>
							</div>
						</div>
					</section>
					<section ref={skillsRef} className="container bg-silver">
						<h1 className="py-1 bg-primary">Skills</h1>
						<div className="cards">
							<div className="card-small bg-white">
								<div className="card-top bg-primary">
									<i className="fas fa-desktop fa-5x hide-sm"></i>
									<i className="fas fa-desktop show-sm"></i>
									<p className="show-sm">Front End</p> <p></p>
								</div>
								<div className="card-title bg-dark hide-sm">
									<p className="card-mid-title bg-primary"> Front End</p>
								</div>
								<div className="card-body">
									{/** Front end technologies for mobile view */}
									<div className="show-sm">
										<ul className="card-list-small">
											{DevObj.technologies.frontend.map((tech) => (
												<li>
													<i
														// Show corresponding icon for technology
														className={`fab fa-${
															(tech === 'React' && 'react') ||
															(tech === 'HTML' && 'html5') ||
															(tech === 'Css' && 'css3-alt') ||
															(tech === 'Bootstrap' && 'bootstrap') ||
															(tech === 'Sass' && 'sass')
														}`}
													></i>{' '}
													{tech}
												</li>
											))}
										</ul>
									</div>
									{/** Front end technologies for desktop view */}
									<div className="hide-sm">
										<ul className="card-list-small">
											{DevObj.technologies.frontend.map((tech) => (
												<li>
													<i
														// Show corresponding icon for technology
														className={`fab fa-${
															(tech === 'React' && 'react') ||
															(tech === 'HTML' && 'html5') ||
															(tech === 'Css' && 'css3-alt') ||
															(tech === 'Bootstrap' && 'bootstrap') ||
															(tech === 'Sass' && 'sass')
														}`}
													></i>{' '}
													{tech}
												</li>
											))}
										</ul>
									</div>
								</div>
							</div>
							<div className="card-small bg-white">
								<div className="card-top bg-primary">
									<i className="fas fa-network-wired fa-5x hide-sm"></i>
									<i className="fas fa-network-wired show-sm"></i>
									<p className="show-sm">Back End</p> <p></p>
								</div>
								<div className="card-title bg-dark hide-sm">
									<p className="card-mid-title bg-primary">Back End</p>
								</div>
								{/** Back end technologies */}
								<div className="card-body">
									<ul className="card-list-small">
										{DevObj.technologies.backend.map((tech) => (
											<li>
												<i
													// Show corresponding icon for technology
													className={`fab fa-${
														(tech === 'Node.js' && 'node-js') ||
														(tech === 'Django' && 'redhat')
													}`}
												></i>{' '}
												{tech}
											</li>
										))}
									</ul>
								</div>
							</div>
							<div className="card-small bg-white">
								<div className="card-top bg-primary">
									<i className="fas fa-database fa-5x hide-sm"></i>
									<i className="fas fa-database show-sm"></i>
									<p className="show-sm">Databases</p> <p></p>
								</div>
								<div className="card-title bg-dark hide-sm">
									<p className="card-mid-title bg-primary">Databases</p>
								</div>
								<div className="card-body">
									{/** Database types for dektop view */}
									<div className="hide-sm">
										<ul className="card-list-small">
											{DevObj.technologies.databases.map((tech) => (
												<li>
													<i
														// Show corresponding icon for technology
														className={`fas fa-${
															(tech === 'MongoDB' && 'leaf') ||
															(tech === 'PostgreSQL' && 'republican') ||
															(tech === 'MySQL' && 'fish')
														}`}
													></i>{' '}
													{tech}
												</li>
											))}
										</ul>
									</div>
									{/** Database types for mobile view */}
									<div className="show-sm">
										<ul className="card-list-small">
											{DevObj.technologies.databases.map((tech) => (
												<li>
													<i
														// Show corresponding icon for technology
														className={`fas fa-${
															(tech === 'MongoDB' && 'leaf') ||
															(tech === 'PostgreSQL' && 'republican') ||
															(tech === 'MySQL' && 'fish')
														}`}
													></i>{' '}
													{tech}
												</li>
											))}
										</ul>
									</div>
								</div>
							</div>
							<div className="card-small bg-white">
								<div className="card-top bg-primary">
									<i className="fas fa-laptop-code fa-5x hide-sm"></i>
									<i className="fas fa-laptop-code show-sm"></i>
									<p className="show-sm">Languages</p> <p></p>
								</div>
								<div className="card-title bg-dark hide-sm">
									<p className="card-mid-title bg-primary">Languages</p>
								</div>
								<div className="card-body">
									{/** Language types for dektop view */}
									<div className="hide-sm">
										<ul className="card-list-small">
											{DevObj.technologies.languages.map((tech) => (
												<li>
													<i
														// Show corresponding icon for technology
														className={`fab fa-${
															(tech === 'JavaScript' && 'js') ||
															(tech === 'Java' && 'java') ||
															(tech === 'TypeScript' && 'codepen') ||
															(tech === 'Python' && 'python')
														}`}
													></i>{' '}
													{tech}
												</li>
											))}
										</ul>
									</div>
									{/** Language types for mobile view */}
									<div className="show-sm">
										<ul className="card-list-small">
											{DevObj.technologies.languages.map((tech) => (
												<li>
													<i
														// Show corresponding icon for technology
														className={`fab fa-${
															(tech === 'JavaScript' && 'js') ||
															(tech === 'Java' && 'java') ||
															(tech === 'TypeScript' && 'codepen') ||
															(tech === 'Python' && 'python')
														}`}
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
					<section ref={projectsRef} className="container">
						<h1 className="py-1 bg-primary">Projects</h1>
						<div className="cards bg-silver">
							{DevObj.projects.map((project) => (
								<div className="card bg-white">
									<div className="card-header bg-primary">
										<p className="title">{project.name}</p>
										<p className="date">{project.date}</p>
									</div>
									{/** Project card body desktop view */}
									<div className="hide-sm">
										<h3>{project.description}</h3>
										<div className="card-body">
											<ul className="card-body-items">
												<ul className="card-items">
													{project.technologies.frontend.map((tech) => (
														<li>
															<i
																// Show corresponding icon for technology
																className={`fab fa-${
																	(tech === 'React' && 'react') ||
																	(tech === 'HTML' && 'html5') ||
																	(tech === 'Css' && 'css3-alt') ||
																	(tech === 'Bootstrap' && 'bootstrap') ||
																	(tech === 'Java Swing' && 'java')
																}`}
															></i>{' '}
															{tech}
														</li>
													))}
													{project.technologies.backend.map((tech) => (
														<li>
															<i
																// Show corresponding icon for technology
																className={`fab fa-${
																	(tech === 'Node.js' && 'node-js') ||
																	(tech === 'Django' && 'redhat')
																}`}
															></i>{' '}
															{tech}
														</li>
													))}
													{project.technologies.databases.map((tech) => (
														<li>
															<i
																// Show corresponding icon for technology
																className={`fas fa-${
																	(tech === 'MongoDB' && 'leaf') ||
																	(tech === 'PostgreSQL' && 'republican') ||
																	(tech === 'MySQL' && 'fish')
																}`}
															></i>{' '}
															{tech}
														</li>
													))}
													{project.technologies.languages.map((tech) => (
														<li>
															<i
																// Show corresponding icon for technology
																className={`fab fa-${
																	(tech === 'JavaScript' && 'js') ||
																	(tech === 'Java' && 'java') ||
																	(tech === 'TypeScript' && 'codepen') ||
																	(tech === 'Python' && 'python')
																}`}
															></i>{' '}
															{tech}
														</li>
													))}
												</ul>
											</ul>
										</div>
									</div>
									{/** Project card body mobile view */}
									<div className="show-sm">
										<div className="card-body-mobile">
											<h3>{project.description}</h3>
											<ul className="card-body-items">
												<ul className="card-items-small">
													{project.technologies.frontend.map((tech) => (
														<li>
															<i
																// Show corresponding icon for technology
																className={`fab fa-${
																	(tech === 'React' && 'react') ||
																	(tech === 'HTML' && 'html5') ||
																	(tech === 'Css' && 'css3-alt') ||
																	(tech === 'Bootstrap' && 'bootstrap')
																}`}
															></i>{' '}
															{tech}
														</li>
													))}
													{project.technologies.backend.map((tech) => (
														<li>
															<i
																// Show corresponding icon for technology
																className={`fab fa-${
																	(tech === 'Node.js' && 'node-js') ||
																	(tech === 'Django' && 'redhat')
																}`}
															></i>{' '}
															{tech}
														</li>
													))}
													{project.technologies.databases.map((tech) => (
														<li>
															<i
																// Show corresponding icon for technology
																className={`fas fa-${
																	(tech === 'MongoDB' && 'leaf') ||
																	(tech === 'PostgreSQL' && 'republican') ||
																	(tech === 'MySQL' && 'fish')
																}`}
															></i>{' '}
															{tech}
														</li>
													))}
													{project.technologies.languages.map((tech) => (
														<li>
															<i
																// Show corresponding icon for technology
																className={`fab fa-${
																	(tech === 'JavaScript' && 'js') ||
																	(tech === 'Java' && 'java') ||
																	(tech === 'TypeScript' && 'codepen') ||
																	(tech === 'Python' && 'python')
																}`}
															></i>{' '}
															{tech}
														</li>
													))}
												</ul>
											</ul>
										</div>
									</div>
									{/** Project bottom part */}
									<div className="card-bottom">
										{project.name === 'My Portfolio' ? (
											<div onClick={() => goDeeper(project)}>
												<div className="meme-container">
													<button className="btn btn-primary">View</button>
													<img
														src={
															inceptionLevel === 0
																? require(`../img/meme.png`)
																: inceptionLevel === 1
																? require(`../img/meme2.gif`)
																: inceptionLevel === 2
																? require(`../img/meme3.gif`)
																: inceptionLevel === 3 && require(`../img/meme4.gif`)
														}
													></img>
												</div>
											</div>
										) : (
											<button onClick={() => setProject(project)} className="btn btn-primary">
												View
											</button>
										)}
									</div>
								</div>
							))}
						</div>
					</section>
					{/** Totem */}
					<div className="spinner-container">
						<Totem inceptionLevel={inceptionLevel} />
					</div>
					<div ref={contactRef}></div>
				</Fragment>
			)}
		</Fragment>
	);
};

export default Landing;
