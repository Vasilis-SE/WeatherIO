const request = require("request");

const forecast = (lon, lat, callback) => {
	const darksky_url = "https://api.darksky.net/forecast/" + process.env.DARKSKY_API_TOKEN + "/" + lon + "," + lat + "?units=si";
	request({url: darksky_url, json: true}, (error, {body, statusCode}) => {
		if(error) {
			callback("Could not connect with the weather forecast dark-sky API service!", undefined);
		} else if(statusCode != 200) {
			callback("Error occurred, error code: "+statusCode+" Error: "+error);
		} else if(typeof body.currently === "undefined") {
			callback("Error on weather forecast data!");
		} else {
			const data = body;
			callback(undefined, {
				temperature: data.currently.temperature,
				rain_perc: data.currently.precipProbability
			});
		}
	});
};

module.exports = forecast;
