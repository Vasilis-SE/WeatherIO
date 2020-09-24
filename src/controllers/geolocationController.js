const ControllerMain = require('./mainController');
const GeoModel = require('../models/geolocationModel');

class GeolocationController extends ControllerMain {

	async getGeolocation() {
		try {
			const geo = new GeoModel(this.params);
			const response = await geo.getGeolocation();
			this.success( response );
		} catch (err) {
			this.error(err);
		}
	}

}

module.exports = GeolocationController;