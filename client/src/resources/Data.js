import { Developer, Project, Feature, Technology } from './Objects';

/**
 * My Components Project Object
 */

const componentsTech = new Technology(['React', 'HTML', 'Css'], [], [], ['JavaScript']);

const componentsfeatMain = new Feature('Showcase react components', 'Components-feat.gif', 'Components-feat.gif', [
	'List of buttons, inputs, forms, etc...',
]);

export const MyComponents = new Project(
	'April 2020',
	'My Components',
	'React Components Showcase',
	'https://react-components-vzla.herokuapp.com/',
	'https://github.com/Jonathanmedhed/ReactComponents',
	'Components-main.gif',
	'Components-main.gif',
	componentsTech,
	[componentsfeatMain],
	'Webapp to showcase react components i have used in the past and for future use'
);

/**
 * My Portfolio Project Object
 */

const porfolioTech = new Technology(['React', 'HTML', 'Css'], [], [], ['JavaScript']);

const portfoliofeatMain = new Feature(
	"Showcase Developer's skills and projects",
	'myportfolio-main.gif',
	'myportfolio-main.gif',
	['List front and back-end technologies', 'List projects and contact info']
);

const portfoliofeatProject = new Feature(
	"Showcase Project's specs and features",
	'myportfolio-project.gif',
	'myportfolio-project.gif',
	['List front and back-end technologies and features', 'Links to visit website and view source code']
);

export const MyPortfolio = new Project(
	'February 2020',
	'My Portfolio',
	'Web developer portfolio',
	'https://portfolio-jonathanvzla.herokuapp.com/',
	'https://github.com/Jonathanmedhed/portfolio',
	'myportfolio-main.gif',
	'myportfolio-main.gif',
	porfolioTech,
	[portfoliofeatMain, portfoliofeatProject],
	'Webapp to showcase my development projects'
);

/**
 * My Online Shop Project Object
 */

const shopTech = new Technology(['React', 'HTML', 'Css'], ['Node.js'], ['MongoDB'], ['JavaScript']);

const shopfeatCreate = new Feature('Create Online Shop', 'myshop-create.gif', 'myshop-create.gif', [
	'Simple and quick steps',
	'Shop layout Customization',
]);

const shopfeatStatistics = new Feature('Statistics', 'myshop-statistics.gif', 'myshop-statistics.gif', [
	"Monitor the shop's visits, sales and income",
]);

const shopfeatOrders = new Feature('Order Management', 'myshop-orders.gif', 'myshop-orders.gif', [
	'Monitor the orders received',
]);

export const MyOnlineShop = new Project(
	'August 2020',
	'My Online Shop',
	'Online Shop Creation Website',
	'https://myonlineshopvzla.herokuapp.com/',
	'https://github.com/Jonathanmedhed/myonlineshop',
	'myshop-main.gif',
	'myshop-main.gif',
	shopTech,
	[shopfeatStatistics, shopfeatOrders, shopfeatCreate],
	'Webapp that allows users to create an online shop with only a few clicks'
);

/**
 * Easy Peasy Project Object
 */

const easyTech = new Technology(['React', 'HTML', 'Css'], ['Node.js'], ['MongoDB'], ['JavaScript']);

const easyfeatLayout = new Feature('Responsive Layout', 'easy-mobile.gif', 'easy-mobile.gif', [
	'Layout automatically changes for smaller screens',
]);

const easyfeatCreate = new Feature('Useful Tools', 'easy-create-order.gif', 'easy-create-order.gif', [
	'Create emails for many suppliers from one products list',
]);

const easyfeatFav = new Feature('Order Management', 'easy-fav.gif', 'easy-fav.gif', [
	'Save orders to favorites for re-use',
	'Edit orders to remove or add products',
]);

export const EasyPeasy = new Project(
	'December 2019',
	'EasyPeasy',
	'Ordering WebApp',
	'https://easy-peasy-v2.herokuapp.com',
	'https://github.com/Jonathanmedhed/easy-peasy-v2',
	'easy-main.gif',
	'easy-main.gif',
	easyTech,
	[easyfeatFav, easyfeatLayout, easyfeatCreate],
	'My final project for college, a webapp that allows users to order products from different suppliers at the same time with only a few clicks'
);

/**
 * CarShop Project Object
 */

const carTech = new Technology(['HTML', 'Css'], ['Django'], ['MongoDB'], ['Python']);

const carFeatLayout = new Feature('Beautyful Layout', 'screen-carshop-layout', 'screen-carshop-layout-sm', [
	'High definition background pictures for each section',
	'Carrousel to show highlited listings',
]);

const carFeatMedia = new Feature('Media Submition', 'screen-carshop-media', 'screen-carshop-media-sm', [
	'Upload pictures for listings',
]);

const carFeatAdmin = new Feature('Admin Page', 'screen-carshop-admin', 'screen-carshop-admin-sm', [
	"Page for Admin to Monitor, Add, Modify, Delete website's data",
]);

const carFeatResponsive = new Feature('Responsive Layout', 'screen-carshop-mobile', 'screen-carshop-mobile-sm', [
	'Layout automatically changes for smaller screens',
]);

export const CarShop = new Project(
	'CarShop',
	'Vehicle Sale Website',
	'http://167.99.95.246',
	'screen-carshop',
	'screen-carshop-sm',
	carTech,
	[carFeatLayout, carFeatMedia, carFeatAdmin, carFeatResponsive]
);

/**
 * ListTool Project Object
 */

const listTech = new Technology(['Java Swing'], [], [], ['Java']);

const listFeatSeparate = new Feature(
	"Separate List's Items",
	'screen-listool-mobile-separate',
	'screen-listool-mobile-separate-sm',
	['Separate items by comma, dot, space, line, etc']
);

const listFeatAdd = new Feature(
	'Add characters or words',
	'screen-listool-mobile-add',
	'screen-listool-mobile-add-sm',
	[
		'Sorround with quotes, double quotes etc...',
		'Add prefixes like exclamation mark, question mark, dash, etc...',
		'Add suffixes with full stop, comma, hypen, dash...',
	]
);

const listFeatCustom = new Feature(
	'Add custom words',
	'screen-listool-mobile-custom',
	'screen-listool-mobile-custom-sm',
	['Sorround or add prefixes/suffixes such as divs, li, ul, etc...']
);

export const ListTool = new Project(
	'ListTool',
	'List Modifier Tool',
	'https://drive.google.com/file/d/1gUd5igq7RZ3KPKg4J0JkN7v2dSrPLTBV/view?usp=sharing',
	'screen',
	'screen-mobile-sm',
	listTech,
	[listFeatSeparate, listFeatAdd, listFeatCustom]
);

/**
 * Developer Object
 */

const devTech = new Technology(
	['React', 'HTML', 'Css', 'Bootstrap', 'Sass'],
	['Node.js', 'Django'],
	['MongoDB', 'PostgreSQL', 'MySQL'],
	['JavaScript', 'Java', 'TypeScript', 'Python']
);

export const DevObj = new Developer(
	'Jonathan Medina',
	'Bsc Computer Science',
	'Full Stack Developer(Entry Level)',
	devTech,
	[MyOnlineShop, MyComponents, MyPortfolio, EasyPeasy],
	'+584126289924',
	'jonathanmedhed@gmail.com',
	'https://www.linkedin.com/in/jonathanmedhed/',
	'https://github.com/Jonathanmedhed'
);
