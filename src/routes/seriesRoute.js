const express = require('express');
const route = express.Router();
const controller = require('../controller/seriesController');

route.get('/series', controller.getAllSeries);

route.get('/series/title', controller.getAllTitle);

route.get('/series/creation', controller.getAllCreator);

route.get('/series/serie/:id', controller.getById);

route.get('/series/title/:title', controller.getByTitle);

route.get('/series/year/:year', controller.getByYear)

module.exports = route;