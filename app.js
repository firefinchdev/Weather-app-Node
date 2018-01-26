const yargs = require('yargs');
const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');

const argv = yargs
    .options({
        address: {
            demand: true,
            alias: 'a',
            describe: 'Address to fetch weather for',
            string: true
        }
    }).help()
    .alias('help','h')
    .argv;

var address = argv.address;

var encodedAddress = encodeURIComponent(argv.address);

geocode.geocodeAddress(argv.address,(errorMessage,results) => {
    if (errorMessage) {
        console.log(errorMessage);
    } else {
        var finalResults = results;
        weather.getWeather(results.latitude,results.longitude,(error,temperature) => {
            if (error) {
                console.log(error);
            } else {
                finalResults.temperature = temperature;
                console.log(JSON.stringify(finalResults,undefined, 2));
            }
        })

    }
});

//d623447086333271139294962a227b91
//https://api.darksky.net/forecast/d623447086333271139294962a227b91/37.8267,-122.4233