class App {
	constructor(router) {
		this.router = router;
		this._registerRoute = this._registerRoute.bind(this);
		this._createRouteBoundAction = this._createRouteBoundAction.bind(this);
	}

	_registerRoute(uri, httpMethod, boundAction) {
		throw new Error('Not implemented any _registerRoute on express application.');
	}

	_createRouteBoundAction(controllerClass, method) {
		const result = [
			(req, res) => {
				this._buildControllerInstance(controllerClass, req, res)[method]();
			}
		];

		return result;
	}

	_buildControllerInstance(ControllerClass, req, res) {
		return new ControllerClass(
			{
				params: req.params,
				query: req.query,
				body: req.body,
				send: (statusCode, resource, location) => {
					if (location) {
						res.location(location);
					}
					
					res.status(statusCode).send(resource);
				}
			},
		);
	}

	run() {
		this.router.registerRoutes(this._registerRoute, this._createRouteBoundAction);
	}
}

module.exports = App;