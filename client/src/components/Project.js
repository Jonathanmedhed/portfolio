import React, { useEffect, useState, Fragment, createRef } from 'react';
import Navbar from './Navbar';
import Lightbox from './Lighbox';
import Totem from './_Totem';
import Loading from './_Loading';

function Project({ setCurrentProject, currentProject, inceptionLevel, setInceptionLevel, goDeeper }) {
	// Project to show
	const [project, setProject] = useState(null);
	// To show features
	const [channel, setChannel] = useState(null);
	// To open img in lightbox
	const [openImg, setOpenImg] = useState(false);
	// To set img to be show in lightbox
	const [img, setImg] = useState(null);
	// To show loading
	const [loading, setLoading] = useState(false);

	// Change background picture and dimension(Desktop)
	const [background, setBackground] = useState(
		inceptionLevel === 0
			? 'header-project-0'
			: inceptionLevel === 1
			? 'header-project-1'
			: inceptionLevel === 2
			? 'header-project-2'
			: inceptionLevel === 3
			? 'header-project-3'
			: 'header-project'
	);
	// Change background picture and dimension mobile stype img(Desktop)
	const [backgroundMobile, setBackgroundMobile] = useState(
		inceptionLevel === 0
			? 'header-mobile-0'
			: inceptionLevel === 1
			? 'header-mobile-1'
			: inceptionLevel === 2
			? 'header-mobile-2'
			: inceptionLevel === 3
			? 'header-mobile-3'
			: 'header-mobile'
	);

	// Change background picture and dimension(Mobile)
	const [backgroundSm, setBackgroundSm] = useState(
		inceptionLevel === 0
			? 'header-project-sm-0'
			: inceptionLevel === 1
			? 'header-project-sm-1'
			: inceptionLevel === 2
			? 'header-project-sm-2'
			: inceptionLevel === 3
			? 'header-project-sm-3'
			: 'header-project-sm'
	);

	// Change background picture and dimension mobile stype img(Mobile)
	const [backgroundMobileSm, setBackgroundMobileSm] = useState(
		inceptionLevel === 0
			? 'header-project-sm-mobile-0'
			: inceptionLevel === 1
			? 'header-project-sm-mobile-1'
			: inceptionLevel === 2
			? 'header-project-sm-mobile-2'
			: inceptionLevel === 3
			? 'header-project-sm-mobile-3'
			: 'header-project-sm-mobile'
	);

	// References to go to the showcase screen or to the bottom
	let screenRef = createRef();
	let contactRef = createRef();

	// Set project and go back to top
	useEffect(() => {
		const setData = async () => {
			if (!channel) {
				setProject(currentProject);
				window.scrollTo(0, screenRef.current.offsetTop);
			}
		};
		setData();
	}, []);

	// Change feature channel
	const changeChannel = async (choice) => {
		window.scrollTo(0, screenRef.current.offsetTop);
		setChannel(choice);
	};

	// Open img in lightbox
	const openLightBox = async (name) => {
		setImg(name);
		setOpenImg(!openImg);
	};

	return (
		<div>
			{/** Lightbox */}
			{openImg && <Lightbox name={img} toggle={setOpenImg} show={openImg} />}
			<Navbar
				type={'project'}
				setProject={setProject}
				setCurrentProject={setCurrentProject}
				setChannel={setChannel}
				contactRef={contactRef}
				setInceptionLevel={setInceptionLevel}
			/>
			<div ref={screenRef}>
				{!project || loading ? (
					<Loading />
				) : (
					<Fragment>
						{/** Jumbo 'screen' for mobile */}
						<div className="show-sm">
							<section
								// Change dimentions if mobile style img
								className={`${
									project.mainImg.includes('mobile') || (channel && channel.includes('mobile'))
										? backgroundMobileSm
										: backgroundSm
								}`}
							>
								<div className="dark-overlay-project">
									<div className="header-project-inner">
										<h1 className="lead">{project.name}</h1>
										{/** Show channel or main img */}
										<div className={`${channel ? channel : project.mainImgMobile}`}>
											<div className="relative">
												<img
													className={`${
														channel && channel.includes('mobile')
															? 'screen-showcase-mobile'
															: 'screen-showcase'
													}`}
													src={require(`../img/${channel ? channel : project.mainImg}`)}
												></img>
												{/** Expand img button */}
												<div className="expand">
													<i
														onClick={() =>
															openLightBox(`${channel ? channel : project.mainImgMobile}`)
														}
														className="fas fa-expand"
													></i>
												</div>
											</div>
										</div>
									</div>
								</div>
							</section>
						</div>
						{/** Jumbo 'screen' for desktop */}
						<div className="hide-sm">
							<section
								// Change dimentions if mobile style img
								className={`${
									project.mainImg.includes('mobile') || (channel && channel.includes('mobile'))
										? backgroundMobile
										: background
								}`}
							>
								<div className="dark-overlay-project">
									<div className="header-project-inner">
										<h1 className="lead">{project.name}</h1>
										<div className="relative">
											{/** Show channel or main img */}
											<img
												className={`${
													channel && channel.includes('mobile')
														? 'screen-showcase-mobile'
														: 'screen-showcase'
												}`}
												src={require(`../img/${channel ? channel : project.mainImg}`)}
											></img>
											{/** Expand img button */}
											<div className="expand">
												<i
													onClick={() =>
														openLightBox(`${channel ? channel : project.mainImg}`)
													}
													className="fas fa-expand"
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
			{/** Project features */}
			<section className="container">
				<h1 className="py-1 bg-primary">Features</h1>
				<div className="cards bg-silver">
					{project && (
						<Fragment>
							{project.features.map((feat) => (
								<div className="card bg-white">
									<div className="card-header bg-primary">
										<p className="lead">{feat.title}</p>
									</div>
									<div className="card-body-list">
										<ul className="card-list">
											{feat.description.map((desc) => (
												<li>
													<i className="far fa-dot-circle"></i> {desc}
												</li>
											))}
											<li>
												<div className="card-submit">
													<button
														onClick={() => changeChannel(feat.imgMobile)}
														className="btn btn-primary show-sm"
													>
														Demo
													</button>
													<button
														onClick={() => changeChannel(feat.img)}
														className="btn btn-primary hide-sm"
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
			{/** Project Specs */}
			<section className="container bg-silver">
				<h1 className="py-1 bg-primary">Specs</h1>
				<div className={project === 'list-tool' ? 'cards two-items' : 'cards'}>
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
							{project && (
								<Fragment>
									{/** Front end tech or N/A */}
									<ul className="card-list-small">
										{project.technologies.frontend.length === 0 ? (
											<li>N/A</li>
										) : (
											project.technologies.frontend.map((tech) => (
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
											))
										)}
									</ul>
								</Fragment>
							)}
						</div>
					</div>
					{project && (
						<div className="card-small bg-white">
							<div className="card-top bg-primary">
								<i className="fas fa-network-wired fa-5x hide-sm"></i>
								<i className="fas fa-network-wired show-sm"></i>
								<p className="show-sm">Back End</p> <p></p>
							</div>
							<div className="card-title bg-dark hide-sm">
								<p className="card-mid-title bg-primary">Back End</p>
							</div>
							<div className="card-body">
								{project && (
									<Fragment>
										{/** Back end tech or N/A */}
										<ul className="card-list-small">
											{project.technologies.backend.length === 0 ? (
												<li>N/A</li>
											) : (
												project.technologies.backend.map((tech) => (
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
												))
											)}
										</ul>
									</Fragment>
								)}
							</div>
						</div>
					)}
					<div className="card-small bg-white">
						<div className="card-top bg-primary">
							<i className="fas fa-database fa-5x hide-sm"></i>
							<i className="fas fa-database show-sm"></i>
							<p className="show-sm">Database</p> <p></p>
						</div>
						<div className="card-title bg-dark hide-sm">
							<p className="card-mid-title bg-primary">Database</p>
						</div>
						<div className="card-body">
							{project && (
								<Fragment>
									{/** Database tech or N/A */}
									<ul className="card-list-small">
										{project.technologies.databases.length === 0 ? (
											<li>N/A</li>
										) : (
											project.technologies.databases.map((tech) => (
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
											))
										)}
									</ul>
								</Fragment>
							)}
						</div>
					</div>

					<div className="card-small bg-white">
						<div className="card-top bg-primary">
							<i className="fas fa-laptop-code fa-5x hide-sm"></i>
							<i className="fas fa-laptop-code show-sm"></i>
							<p className="show-sm">Language</p> <p></p>
						</div>
						<div className="card-title bg-dark hide-sm">
							<p className="card-mid-title bg-primary">Language</p>
						</div>
						<div className="card-body">
							{project && (
								<Fragment>
									{/** Language or N/A */}
									<ul className="card-list-small">
										{project.technologies.languages.length === 0 ? (
											<li>N/A</li>
										) : (
											project.technologies.languages.map((tech) => (
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
											))
										)}
									</ul>
								</Fragment>
							)}
						</div>
					</div>
				</div>
			</section>
			{/** Links to open website or see code */}
			<section className="container">
				<h1 className="py-1 bg-primary">Links</h1>
				{project && (
					<div className="link">
						<div>
							{project.name === 'My Portfolio' ? (
								<div className="meme-container">
									Visit: <a onClick={() => goDeeper()}>here</a>
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
							) : (
								<div>
									Visit:{' '}
									<a onClick={() => setLoading(true)} href={project.link}>
										here
									</a>
								</div>
							)}
						</div>
						<div>
							Code: <a href={project.github}>here</a>
						</div>
					</div>
				)}
			</section>
			{/** Totem component (Only for My portfolio project) */}
			<div ref={contactRef}></div>
			{project && project.name === 'My Portfolio' && (
				<div className="spinner-container">
					<Totem inceptionLevel={inceptionLevel} />
				</div>
			)}
		</div>
	);
}

export default Project;
