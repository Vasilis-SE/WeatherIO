const ControllerMain = require('./mainController');
const GeoModel = require('../models/geolocationModel');

class GeolocationController extends ControllerMain {

	async getGeolocation() {
		try {
			// TODO: Call stuff...
		} catch (err) {
			this.error(err);
		}
	}

}

module.exports = GeolocationController;