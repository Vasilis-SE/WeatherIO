const GeolocationController = require('../controllers/geolocationController');
const RoutesMain = require('./mainRoutes');

class GeolocationRoutes extends RoutesMain {
    constructor() {
        super(GeolocationController);
    }

    getRoutes() {
        this.addRoute('/geolocation/:address', 'get', 'getGeolocation');
        return this.routes;
    }
}

module.exports = GeolocationRoutes;