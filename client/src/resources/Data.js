import { Developer, Project, Feature, Technology } from './Objects';

/**
 * Easy Peasy Project Object
 */

const easyTech = new Technology(
  ['React', 'HTML', 'Css'],
  ['Node.js'],
  ['MongoDB'],
  ['JavaScript']
);

const easyfeatLayout = new Feature(
  'Responsive Layout',
  'screen-easy-mobile',
  'screen-easy-mobile-sm',
  ['Layout automatically changes for smaller screens']
);

const easyfeatCreate = new Feature(
  'Useful Tools',
  'screen-easy-create-order',
  'screen-easy-create-order-sm',
  ['Create emails for many suppliers from one products list']
);

const easyfeatFav = new Feature(
  'Order Management',
  'screen-easy-fav',
  'screen-easy-fav-sm',
  [
    'Save orders to favorites for re-use',
    'Edit orders to remove or add products'
  ]
);

export const EasyPeasy = new Project(
  'EasyPeasy',
  'Ordering WebApp',
  'https://easy-peasy-v2.herokuapp.com',
  'screen-easy-main',
  'screen-easy-main-sm',
  easyTech,
  [easyfeatFav, easyfeatLayout, easyfeatCreate]
);

/**
 * CarShop Project Object
 */

const carTech = new Technology(
  ['HTML', 'Css'],
  ['Django'],
  ['MongoDB'],
  ['Python']
);

const carFeatLayout = new Feature(
  'Beautyful Layout',
  'screen-carshop-layout',
  'screen-carshop-layout-sm',
  [
    'High definition background pictures for each section',
    'Carrousel to show highlited listings'
  ]
);

const carFeatMedia = new Feature(
  'Media Submition',
  'screen-carshop-media',
  'screen-carshop-media-sm',
  ['Upload pictures for listings']
);

const carFeatAdmin = new Feature(
  'Admin Page',
  'screen-carshop-admin',
  'screen-carshop-admin-sm',
  ["Page for Admin to Monitor, Add, Modify, Delete website's data"]
);

const carFeatResponsive = new Feature(
  'Responsive Layout',
  'screen-carshop-mobile',
  'screen-carshop-mobile-sm',
  ['Layout automatically changes for smaller screens']
);

export const CarShop = new Project(
  'CarShop',
  'Vehicle Sale Website',
  'http://carshopjonathan.xyz',
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
    'Add suffixes with full stop, comma, hypen, dash...'
  ]
);

const listFeatCustom = new Feature(
  'Add custom words',
  'screen-listool-mobile-custom',
  'screen-listool-mobile-custom-sm',
  ['Sorround or add prefixes/suffixes such as divs, li, ul, etc...']
);

export const ListTool = new Project(
  'ListTool App',
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
  ['React', 'HTML', 'Css', 'Bootstrap'],
  ['Node.js', 'Django'],
  ['MongoDB', 'PostgreSQL', 'MySQL'],
  ['JavaScript', 'Java', 'TypeScript', 'Python']
);

export const DevObj = new Developer(
  'Jonathan Medina',
  'Bsc Computer Science',
  'Full Stack Developer(Entry Level)',
  devTech,
  [EasyPeasy, CarShop, ListTool]
);
