const superagent = require('superagent');

class ForecastModel {
    constructor(address) {
        this.address = address;
    }   

    async getForecast() {
        const darkskyUrl = "https://api.darksky.net/forecast/" + process.env.DARKSKY_API_TOKEN + "/" + latitude + "," + longitude + "?units=si";
       
        const results = (async () => {
            try {
                results.darkskyRes = await superagent.get(darkskyUrl);
               
                return darkskyRes.body.currently;
            } catch (err) {
                console.error(err);
            }
        })();

        return results;
    }
}

module.exports = ForecastModel;