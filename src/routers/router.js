const RoutesCollection = require('./routesCollection');

class Router {
	constructor(routes) {
		this.routes = routes;
	}

	registerRoutes(registerRouteCallback, createRouteBoundActionCallback) {
		this.routes.forEach((builder) => {
			const routes = builder.getRoutes();
			routes.forEach((routeData) => {
				RoutesCollection.addRouteData(
					routeData.controllerClass, 
					routeData.action,
					{ uri: routeData.uri, httpMethod: routeData.httpMethod }
				);
				
				const boundAction = createRouteBoundActionCallback(routeData.controllerClass, routeData.action);
				registerRouteCallback(routeData.uri, routeData.httpMethod, boundAction);
			});
		});
	}
}

module.exports = Router;