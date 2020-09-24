class GeolocationModel {
    constructor(address) {
        this.address = address;
    }   

    async getGeolocation() {
        const results = {};

        const mapboxUrl = "https://api.mapbox.com/geocoding/v5/mapbox.places/" + this.address + ".json?access_token=" + process.env.MAPBOX_API_TOKEN;
        (async () => {
            try {
                const mapboxRes = await superagent.get(mapboxUrl);
    
                results.longitude = mapboxRes.features[0].center[1];
                results.latitude = mapboxRes.features[0].center[0];
                results.location = mapboxRes.features[0].place_name;		
            } catch (err) {
                console.error(err);
            }
        })();

        return results;
    }

}