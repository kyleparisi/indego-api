// reduce api response to the keys of interest
const logger = require('./logger');
const keys = [
	'addressStreet',
	'bikesAvailable',
	'docksAvailable',
	'kioskId',
	'totalDocks',
	'addressZipCode',
	'name'
];
const removeExtraniousData = function (msg) {
	logger('----- Remove extra data -----');

	const stations = msg.features;
	
	const data = stations.reduce((prev, curr) => {
		const properties = curr.properties;
		const station = {};
		
		keys.map(sel => {
			station[sel] = properties[sel]
		});
		
		prev.push(station);
		
		return prev;
	
	}, []);
	
	logger('-----');
	return data;
}

module.exports = removeExtraniousData;
