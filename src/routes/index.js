import { ROUTES } from "../config";
import PAGES from "../pages";

const publicRoutes = [
  { path: ROUTES.home, component: PAGES.home },
  { path: ROUTES.following, component: PAGES.following },
  { path: ROUTES.profile, component: PAGES.profile },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
