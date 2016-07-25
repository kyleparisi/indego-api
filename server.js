const express = require('express');
const app = express();
const main = require('./src/main');
const logger = require('./src/logger');

app.get('/', function (req, res) {
	const where = (req.query.where) ? req.query.where : '';
	res.set('Content-Type', 'application/json');

	main(where).then(data => res.send(data));
});

app.listen(3000, function () {
	logger('App listening on port 3000!');
});
