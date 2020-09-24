const express = require("express");
const superagent = require('superagent');

const router = new express.Router();

router.get('/forecast/:lon/:lat', (req, res) => {
    let longitude = req.params.lon;
    let latitude = req.params.lat;

	const darkskyUrl = "https://api.darksky.net/forecast/" + process.env.DARKSKY_API_TOKEN + "/" + latitude + "," + longitude + "?units=si";
	(async () => {
		try {
			const darkskyRes = await superagent.get(darkskyUrl);
			const tempRes = darkskyRes.body.currently;
		} catch (err) {
		  	console.error(err);
		}
	})();
});

module.exports = router;