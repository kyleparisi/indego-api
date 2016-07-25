const request = require('request-promise');
const removeExtraniousData = require('./removeExtraniousData');
const filterOn = require('./filterOn');
const logger = require('./logger');

const options = {
	url: 'https://www.rideindego.com/stations/json/',
	headers: {
		'User-Agent': 'Indego Nodejs API Library - https://github.com/kyleparisi/indego-api'
	},
	json: true
};

const main = function (where) {
	const filter = filterOn(where)

	return request(options)
		.then(removeExtraniousData)
		.then(logger)
		.then(filter)
		.then(logger)
		.then(data => JSON.stringify(data));
}

module.exports = main;
