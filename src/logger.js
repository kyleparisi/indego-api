var logger = require('winston');

module.exports = function (data) {

	if (process.argv[2] === '-v') {
		logger.info(data);
	}

	return data;
};