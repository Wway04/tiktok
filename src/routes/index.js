import { ROUTES } from "../config";
import PAGES from "../pages";

const publicRoutes = [
  { path: ROUTES.routes.home, component: PAGES.home },
  { path: ROUTES.routes.following, component: PAGES.following },
  { path: ROUTES.routes.profile, component: PAGES.profile },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
