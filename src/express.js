const express = require('express');
const bodyParser = require('body-parser');
const App = require('./app');

class Express extends App {
	constructor(router) {
		super(router);
		this.port = process.env.PORT;
		this.express = express();
		this.express.use(bodyParser.urlencoded({ extended: true }));
		this.express.use(bodyParser.json());
		this.expressRouter = express.Router();
	}

	_registerRoute(uri, httpMethod, boundAction) {
		this.expressRouter.route(uri)[httpMethod](boundAction);
	}

	run() {
		// The the App`s run method that will register all routes.
		super.run();

		// Prepend the /api/v1 before every route
		this.express.use('/api/v1', this.expressRouter);

		// If the uri used does not exist the return a 404
		this.express.use((req, res) => {
			res.status(404).send({ url: `${req.originalUrl} not found` });
		});

		// Start server
		this.express.listen(this.port, this.host);
		console.log(`Server started on port: ${this.port}`);
	}
}

module.exports = Express;