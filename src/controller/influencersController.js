const influencers = require('../models/influencers-negras.json');

const getAllInfluencers = (req, res) => {
    res.status(200).send(influencers)
};

const getInfluencerById = (req, res) => {
    const id = req.params.id
    const influencersFind = influencers.find((person) => person.id == id)
    res.status(200).send(influencersFind)
};

const getAllPersons = (req, res) => {
    const influencersList = influencers.map((namesList) => namesList.name)
    res.status(200).send(influencersList)
};

const getPersonsByName = (req, res) => {
    const nameInfluencer = req.params.name
    const nameInfluencerFilter = influencers.filter((nameFound) => nameFound.name == nameInfluencer)
    res.status(200).send(nameInfluencerFilter)
};

const getAllPages = (req, res) => {
    const allPages = influencers.map((pages) => pages.instagram)
    res.status(200).send(allPages)
}

const getPageByInstagram = (req, res) => {
    const pageInfluencer = req.params.instagram
    const pageInfluencerFilter= influencers.filter((pageInsta) => pageInsta.instagram == pageInfluencer)
    res.status(200).send(pageInfluencerFilter)
}

module.exports = {
    getAllInfluencers,
    getInfluencerById,
    getAllPersons,
    getPersonsByName,
    getAllPages,
    getPageByInstagram
}