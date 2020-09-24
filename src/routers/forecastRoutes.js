const ForecastController = require('../controllers/forecastController');
const RoutesMain = require('./mainRoutes');

class ForecastRoutes extends RoutesMain {
    constructor() {
        super(ForecastController);
    }

    getRoutes() {
        this.addRoute('/forecast/:lon/:lat', 'get', 'getForecast');
        return this.routes;
    }
}

module.exports = ForecastRoutes;