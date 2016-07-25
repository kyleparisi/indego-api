const logger = require('./logger');

const filterOn = function (where) {
	logger('----- Filter on ' + where + ' -----');
	
	return function (data) {

		var selected;
	
		// selections based on zip
		if (parseInt(where) !== NaN && where.length === 5) {
			selected = data.reduce((prev, curr) => {
				if (where === curr.addressZipCode) {
					prev.push(curr);
				}
				return prev;
			}, []);			
			return selected;
		}
		
		// selections based on name or address
		selected = data.reduce((prev, curr) => {
			const reg = new RegExp(where, 'i');
			if (reg.test(curr.name) || reg.test(curr.addressStreet)) {
				prev.push(curr);
			}
			
			return prev;
			
		}, []);
		
		// return selected or all
		selected = (selected.length > 0) ? selected : data;
		
		logger('-----');
		return selected;
	};
};

module.exports = filterOn;
