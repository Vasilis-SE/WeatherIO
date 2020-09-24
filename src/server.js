const Express = require('./express');
const Router = require('./routers/router');
const forecastRoutes = require('./routers/forecastRoutes');
const geolocationRoutes = require('./routers/geolocationRoutes');

const express = new Express(
	new Router([
		new forecastRoutes(),
		new geolocationRoutes(),
	])
);

express.run();