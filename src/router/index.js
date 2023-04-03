const registerRoute = () => {
  const routeConfig = require.context('./', false, /\w+\/\w+\.route\.js$/);
  const files = routeConfig.keys();
  debugger;
  const routes = files.map((name) => {
    return routeConfig(name).default[0];
  });
  //   if (routes && routes.length) {
  //     router.addRoutes(routes);
  //   }

  return routes;
};

export default router = registerRoute();
