const request = require('request');

var darkSkyApiKey = 'd623447086333271139294962a227b91';

getWeather = (latitude,longitude,callback) => {
    request({
        url:`https://api.darksky.net/forecast/${darkSkyApiKey}/${latitude},${longitude}?units=si`,
        json:true
    },(error, response, body) => {
        if(!error && response.statusCode === 200) {
            callback(undefined,{
                temperature : body.currently.temperature,
                apparentTemperature: body.currently.apparentTemperature
            });
        } else {
            callback('Can\'t Fetch Weather');
        }
    })
};

module.exports.getWeather = getWeather;
