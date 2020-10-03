const express = require('express');
const route = express.Router();
const controller = require('../controller/influencersController.js');

route.get('/influencers', controller.getAllInfluencers);

route.get('/influencers/persons', controller.getAllPersons);

route.get('/influencers/instagram', controller.getAllPages);

route.get('/influencers/influencer/:id', controller.getInfluencerById);

route.get('/influencers/persons/:name', controller.getPersonsByName);

route.get('/influencers/instagram/:instagram', controller.getPageByInstagram);

module.exports = route;