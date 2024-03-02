import coresRoutes from './cores.routes.js';
import pluginsRoutes from './plugins.routes.js';
import sitesRoutes from './sites.routes.js';
import themesRoutes from './themes.routes.js';

const routes = [
  {
    route: coresRoutes,
    path: '/cores',
  },
  {
    route: pluginsRoutes,
    path: '/plugins',
  },
  {
    route: sitesRoutes,
    path: '/sites',
  },
  {
    route: themesRoutes,
    path: '/themes',
  },

];

export default routes
