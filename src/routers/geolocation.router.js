const express = require("express");
const superagent = require('superagent');

const router = new express.Router();

router.get('/geolocation/:address', (req, res) => {
    const address = req.params.address;
	
	const mapboxUrl = "https://api.mapbox.com/geocoding/v5/mapbox.places/" + address + ".json?access_token=" + process.env.MAPBOX_API_TOKEN;
	console.log(mapboxUrl);
	(async () => {
		try {
			const mapboxRes = await superagent.get(mapboxUrl);

			const longitude = mapboxRes.features[0].center[1];
			const latitude = mapboxRes.features[0].center[0];
			const location = mapboxRes.features[0].place_name;		
		} catch (err) {
		  	console.error(err);
		}
	})();
});

module.exports = router;