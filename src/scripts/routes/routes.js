import List from '../views/pages/list.js';
import Detail from '../views/pages/detail.js';
import Favorite from '../views/pages/favorite.js';

const routes = {
  '/': List, // default page
  '/detail/:id': Detail,
  '/favorite': Favorite,
};

export default routes;
