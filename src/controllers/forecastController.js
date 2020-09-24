const ControllerMain = require('./mainController');
const forecastModel = require('../models/forecastModel');

class ForecastController extends ControllerMain {

	async getForecast() {
		try {
			// TODO: Call stuff...
		} catch (err) {
			this.error(err);
		}
	}

}

module.exports = ForecastController;