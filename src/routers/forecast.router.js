const express = require("express");
const request = require("request");

const router = new express.Router();

router.get('/forecast', (req, res) => {
    let longitude = req.body.longitude;
    let latitude = req.body.latitude;

    const darkskyUrl = "https://api.darksky.net/forecast/" + process.env.DARKSKY_API_TOKEN + "/" + longitude + "," + latitude + "?units=si";
	request({url: darkskyUrl, json: true}, (error, {body, statusCode}) => {
		if(error) {
			callback(`Could not connect with the weather forecast dark-sky API service!`, undefined);
		} else if(statusCode != 200) {
			callback(`Error occurred, error code: ${statusCode} Error: ${error}`);
		} else if(typeof body.currently === "undefined") {
			callback(`Error on weather forecast data!`);
		} else {
			const data = body;
			callback(undefined, {
				temperature: data.currently.temperature,
				rainPerc: data.currently.precipProbability
			});
		}
	});
});




module.exports = router;