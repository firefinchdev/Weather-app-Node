const request = require('request');
geocodeAddress = (address,callback) => {
    var encodedAddress = encodeURIComponent(address);


    request({
        url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=AIzaSyAN6lSXof9KTUOxzde9k0SYFytnEum8jeU`,
        json: true
    },(error, response, body) => {
        if (error) {
            callback('Unable to connect to Server.');
        } else if(body.status === 'ZERO_RESULTS') {
            callback('Unable to locate address');
        } else if(body.status === 'OK') {
            var latlng = body.results[0].geometry.location;
            callback(undefined, {
            address:body.results[0].formatted_address,
            latitude:latlng.lat,
            longitude:latlng.lng
        });
        }
    });
}

module.exports.geocodeAddress = geocodeAddress;