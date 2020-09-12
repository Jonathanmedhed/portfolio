import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import { DevObj } from '../resources/Data';
import { CopyToClipboard } from 'react-copy-to-clipboard';

function Navbar({
	type,
	skillsRef,
	projectsRef,
	setProject,
	setCurrentProject,
	setChannel,
	contactRef,
	setInceptionLevel,
}) {
	// To show dropdown mobile menu
	const [showMenu, setShowMenu] = useState(false);
	// To show contact dropdown choices
	const [showContact, setShowContact] = useState(false);
	// To show project dropdown choices
	const [showProjects, setShowProjects] = useState(false);
	// For clipboard
	const [copied, setCopied] = useState(false);
	const [value, setValue] = useState('');

	// Close product and show landing
	const toHome = () => {
		setShowMenu(!showMenu);
		setCurrentProject(null);
		setInceptionLevel(0);
	};

	// Go to skills in landing
	const toSkills = () => {
		window.scrollTo(0, skillsRef.current.offsetTop);
		setShowMenu(!showMenu);
	};

	// Go to projects in landing
	const toProjects = () => {
		window.scrollTo(0, projectsRef.current.offsetTop);
		setShowMenu(!showMenu);
	};

	// Change the project to see
	const selectProject = (project) => {
		if (setProject) {
			setProject(project);
			setCurrentProject(project);
		}
		setShowMenu(!showMenu);
		if (setChannel) {
			setChannel(null);
		}
	};

	// Contact info component
	const contactComponent = () => {
		return (
			<Fragment>
				{!showContact ? (
					<li>
						<button onClick={() => setShowContact(!showContact)} className="btn btn-primary">
							Contact
						</button>
					</li>
				) : (
					<li>
						<ul className="dropdown">
							<button onClick={() => setShowContact(!showContact)} className="btn btn-primary">
								Contact:
							</button>
							<li className="item-dropdown">
								<div className="content">
									<i class="fas fa-envelope-square fa-2x"></i>
									<div>{DevObj.email}</div>
								</div>
								{/** Options to copy link or go to it */}
								<div className="options">
									<CopyToClipboard text={DevObj.email} onCopy={() => setCopied(true)}>
										<i class="far fa-copy"></i>
									</CopyToClipboard>
									<a href={`mailto:${DevObj.email}`}>
										<i class="fas fa-external-link-alt"></i>
									</a>
								</div>
							</li>
							<li className="item-dropdown">
								<div className="content">
									<i class="fab fa-linkedin fa-2x"></i>
									<div>{DevObj.linkedin.substring('https://www.'.length)}</div>
								</div>
								{/** Options to copy link or go to it */}
								<div className="options">
									<CopyToClipboard text={DevObj.linkedin} onCopy={() => setCopied(true)}>
										<i class="far fa-copy"></i>
									</CopyToClipboard>
									<a href={DevObj.linkedin}>
										<i class="fas fa-external-link-alt"></i>
									</a>
								</div>
							</li>
							<li className="item-dropdown">
								<div className="content">
									<i class="fab fa-github-square fa-2x"></i>
									<div>{DevObj.github.substring('https://'.length)}</div>
								</div>
								{/** Options to copy link or go to it */}
								<div className="options">
									<CopyToClipboard text={DevObj.github} onCopy={() => setCopied(true)}>
										<i class="far fa-copy"></i>
									</CopyToClipboard>
									<a href={DevObj.github}>
										<i class="fas fa-external-link-alt"></i>
									</a>
								</div>
							</li>
							<li className="item-dropdown">
								<div className="content">
									<i class="fas fa-phone-square fa-2x"></i>
									<div>{DevObj.phone}</div>
								</div>
								{/** Options to copy link or go to it */}
								<div className="options">
									<CopyToClipboard text={DevObj.phone} onCopy={() => setCopied(true)}>
										<i class="far fa-copy"></i>
									</CopyToClipboard>
									<a href={`tel:${DevObj.phone}`}>
										<i class="fas fa-external-link-alt"></i>
									</a>
								</div>
							</li>
						</ul>
					</li>
				)}
			</Fragment>
		);
	};

	return (
		<nav className="navbar bg-primary">
			<h1 onClick={() => toHome()}>
				<i class="fas fa-terminal"></i> {DevObj.name.split(' ', 1) + "'s Portfolio"}
			</h1>
			{/** Mobile dropdown menu */}
			<div className="show-sm">
				<ul className="mobile-dropdown">
					{/** Burger button */}
					{!showMenu ? (
						<li className="show-sm">
							<div onClick={() => setShowMenu(!showMenu)} className="burger">
								<i class="fas fa-bars"></i>
							</div>
						</li>
					) : (
						<li className="fixed">
							<ul className="dropdown">
								{/** Close dropdown menu button */}
								<li>
									<div onClick={() => setShowMenu(!showMenu)} className="burger">
										<i class="fas fa-arrow-right"></i>
									</div>
								</li>
								<Fragment>
									{/** Return to landing option */}
									{type === 'project' && (
										<li>
											<button onClick={() => toHome()} className="btn btn-primary">
												Home
											</button>
										</li>
									)}
									{/** Go to skills or projects in landing */}
									{type === 'home' && (
										<Fragment>
											<li onClick={() => toSkills()} className="show-sm">
												<button className="btn btn-primary">
													<Link>Skills</Link>
												</button>
											</li>
											<li onClick={() => toProjects()} className="show-sm">
												<button className="btn btn-primary">
													<Link>Projects</Link>
												</button>
											</li>
										</Fragment>
									)}
									{/** Contact info */}
									{contactComponent()}
									{/** Open project list for project page */}
									{!showProjects && type === 'project' ? (
										<li>
											<button
												onClick={() => setShowProjects(!showProjects)}
												className="btn btn-primary"
											>
												Projects
											</button>
										</li>
									) : (
										showProjects &&
										type === 'project' && (
											<li>
												<ul className="dropdown">
													<button
														onClick={() => setShowProjects(!showProjects)}
														className="btn btn-primary"
													>
														Projects:
													</button>
													{DevObj.projects.map((project) => (
														<li>
															<button
																onClick={() => selectProject(project)}
																className="btn btn-primary"
															>
																{project.name}
															</button>
														</li>
													))}
												</ul>
											</li>
										)
									)}
								</Fragment>
							</ul>
						</li>
					)}
				</ul>
			</div>
			{/** Desktop Menu */}
			<div className="hide-sm">
				<ul className="fixed">
					{/** Options to show skills or project in landing */}
					{type === 'home' && (
						<Fragment>
							<li onClick={() => toSkills()} className="hide-sm">
								<button className="btn btn-primary">Skills</button>
							</li>
							<li onClick={() => toProjects()} className="hide-sm">
								<button className="btn btn-primary">Projects</button>
							</li>
						</Fragment>
					)}
					{/** Options to close project and show other projects */}
					{type === 'project' && (
						<Fragment>
							<li>
								<button onClick={() => toHome()} className="btn btn-primary">
									Home
								</button>
							</li>
							{!showMenu ? (
								<li>
									<button onClick={() => setShowMenu(!showMenu)} className="btn btn-primary">
										Projects
									</button>
								</li>
							) : (
								<li>
									<ul className="dropdown">
										<li>
											<button onClick={() => setShowMenu(!showMenu)} className="btn btn-primary">
												Projects
											</button>
										</li>
										{DevObj.projects.map((project) => (
											<li>
												<button
													onClick={() => selectProject(project)}
													className="btn btn-primary"
												>
													{project.name}
												</button>
											</li>
										))}
									</ul>
								</li>
							)}
						</Fragment>
					)}
					{contactComponent()}
				</ul>
			</div>
		</nav>
	);
}

export default Navbar;
