const superagent = require('superagent');

class GeolocationModel {
    constructor({address}) {
        this.address = address;
    }   

    async getGeolocation() {
        const mapboxUrl = "https://api.mapbox.com/geocoding/v5/mapbox.places/" + this.address + ".json?access_token=" + process.env.MAPBOX_API_TOKEN;
        let results = (async () => {
            try {
                const mapboxRes = await superagent.get(mapboxUrl);

                results = {
                    "longitude": mapboxRes.body.features[0].center[1],
                    "latitude": mapboxRes.body.features[0].center[0],
                    "location": mapboxRes.body.features[0].place_name
                };
                return results;
            } catch (err) {
                console.error(err);
            }
        })();

        return results;
    }
}

module.exports = GeolocationModel;