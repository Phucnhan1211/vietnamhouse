import config from '~/config';

// Layouts

// Pages
import Home from '~/components/pages/Home';
import Blog from '~/components/pages/Blog';
import UsefulInformation from '~/components/pages/UsefulInformation';
import ForOwners from '~/components/pages/ForOwners';
import AboutISN from '~/components/pages/AboutISN';
import History from '~/components/pages/History';
import Favourites from '~/components/pages/Favourites';

// Public routes

const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.blog, component: Blog },
    { path: config.routes.usefulinformation, component: UsefulInformation },
    { path: config.routes.forowners, component: ForOwners },
    { path: config.routes.aboutisn, component: AboutISN },
    { path: config.routes.favourites, component: Favourites },
    { path: config.routes.history, component: History },
    { path: config.routes.residence, component: Home },
    { path: config.routes.office, component: Home },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
