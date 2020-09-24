const ControllerMain = require('./mainController');
const forecastModel = require('../models/forecastModel');

class ForecastController extends ControllerMain {

	async getForecast() {
		try {
			const forecast = new forecastModel(this.params);
			const response = await forecast.getForecast();
			this.success( response );
		} catch (err) {
			this.error(err);
		}
	}

}

module.exports = ForecastController;