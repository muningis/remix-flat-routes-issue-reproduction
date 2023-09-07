const { flatRoutes } = require("remix-flat-routes");

// const BASE_PATH = "";
const BASE_PATH = "/test";

/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  ignoredRouteFiles: ["**/.*"],
  publicPath: `${BASE_PATH || "/"}build`,
  routes: (defineRoutes) => {
    return flatRoutes("routes", defineRoutes, {
      basePath: BASE_PATH,
    });
  },
  serverModuleFormat: "cjs",
  future: {
    v2_meta: true,
    v2_normalizeFormMethod: true,
    v2_errorBoundary: true,
    v2_routeConvention: true,
  },
};
