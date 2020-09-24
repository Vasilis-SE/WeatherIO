const superagent = require('superagent');

class ForecastModel {
    constructor(address) {
        this.address = address;
    }   

    async getForecast() {
        const results = {};

        const darkskyUrl = "https://api.darksky.net/forecast/" + process.env.DARKSKY_API_TOKEN + "/" + latitude + "," + longitude + "?units=si";
        (async () => {
            try {
                results.darkskyRes = await superagent.get(darkskyUrl);
                results.tempRes = darkskyRes.body.currently;
            } catch (err) {
                  console.error(err);
            }
        })();

        return results;
    }

}