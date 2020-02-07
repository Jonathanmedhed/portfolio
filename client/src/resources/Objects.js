export function Developer(name, degree, occupation, technologies, projects) {
  this.name = name;
  this.degree = degree;
  this.occupation = occupation;
  this.technologies = technologies;
  this.projects = projects;
}

export function Project(
  name,
  description,
  link,
  mainImg,
  mainImgMobile,
  technologies,
  features
) {
  this.name = name;
  this.description = description;
  this.link = link;
  this.mainImg = mainImg;
  this.mainImgMobile = mainImgMobile;
  this.technologies = technologies;
  this.features = features;
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
