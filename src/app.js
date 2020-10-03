const express = require('express');
const app = express();

const influencers = require('./routes/seriesRoute');

const cors = require('cors');
app.use(cors());
app.use(express.static('public'));
app.use('/', influencers);

app.get('/', (req, res) => {
    res.status(200).sendFile('./views/index.html', { root: __dirname })
});
app.get('*', (req, res) => {
    res.status(404).sendFile('./views/404.html', { root: __dirname })
});

module.exports = app;