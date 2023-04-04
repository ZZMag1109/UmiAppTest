const registerRoute = () => {
  const routeConfig = require.context('./', false, /\.route\.js$/);
  const files = routeConfig.keys();
  const routes = files.map((name) => {
    return routeConfig(name).default[0];
  });
  return routes;
};

export default routers = registerRoute();
