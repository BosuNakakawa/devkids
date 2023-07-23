const express = require('express');
const getRouter = express.Router();

const axios = require('axios');

getRouter.get('/', async (req, res) => {
    var articleApi = await axios.get(`http://localhost:3000/api/article`);
    res.render('home', { article: articleApi.data });
})

module.exports = getRouter;