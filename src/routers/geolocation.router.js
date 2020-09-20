const express = require("express");
const request = require("request");

const router = new express.Router();

router.get('/geolocation', (req, res) => {
    const address = req.body.address;
    const mapboxUrl = "https://api.mapbox.com/geocoding/v5/mapbox.places/" + address + ".json?access_token=" + process.env.MAPBOX_API_TOKEN;
	
	request({url: mapboxUrl, json: true}, (error, {body, statusCode}) => {
		if(error) {
			callback("Unable to connect to service!", undefined);
		} else if(body.features.length === 0) {
			callback("Unable to find location! Try another location...", undefined);
		} else if(statusCode != 200) {
			callback("Something went wrong! " + error, undefined);
		} else {
			const data = body;
			callback(undefined, {
				longitude: data.features[0].center[1],
				latitude: data.features[0].center[0],
				location: data.features[0].place_name
			});
		}
	});	
});

module.exports = router;