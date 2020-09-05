export function Developer(name, degree, occupation, technologies, projects, phone, email, linkedin, github) {
	this.name = name;
	this.degree = degree;
	this.occupation = occupation;
	this.technologies = technologies;
	this.projects = projects;
	this.phone = phone;
	this.email = email;
	this.linkedin = linkedin;
	this.github = github;
}

export function Project(
	date,
	name,
	description,
	link,
	github,
	mainImg,
	mainImgMobile,
	technologies,
	features,
	descriptionExt
) {
	this.date = date;
	this.name = name;
	this.description = description;
	this.link = link;
	this.github = github;
	this.mainImg = mainImg;
	this.mainImgMobile = mainImgMobile;
	this.technologies = technologies;
	this.features = features;
	this.descriptionExt = descriptionExt;
}

export function Technology(frontend, backend, databases, languages) {
	this.frontend = frontend;
	this.backend = backend;
	this.databases = databases;
	this.languages = languages;
}

export function Feature(title, img, imgMobile, description) {
	this.title = title;
	this.img = img;
	this.imgMobile = imgMobile;
	this.description = description;
}
