const series = require('../models/series.json');

const getAllSeries = (req, res) => {
    res.status(200).send(series)
};

const getById = (req, res) => {
    const id = req.params.id
    const seriesFind = series.find((serieId) => serieId.id == id)
    res.status(200).send(seriesFind)
};

const getAllTitle = (req, res) => {
    const allSeriesTitle = series.map((seriesList) => seriesList.title)
    res.status(200).send(allSeriesTitle)
};

const getByTitle = (req, res) => {
    const seriesFound = req.params.title
    const seriesFilter = series.filter((titleFound) => titleFound.title == seriesFound)
    res.status(200).send(seriesFilter)
};

const getAllCreator = (req, res) => {
    const allCreator = series.map((creatorList) => creatorList.creation)
    res.status(200).send(allCreator)
};

const getByYear = (req, res) => {
    const yearFound = req.params.firstEpisode;
    const yearFilter = series.filter((serieYear) => serieYear.firstEpisode = yearFound)
    res.status(200).send(yearFilter)
};

module.exports = {
    getAllSeries,
    getById,
    getAllTitle,
    getAllCreator,
    getByTitle,
    getByYear
};