const express = require('express');
const getRouter = express.Router();

const axios = require('axios');

getRouter.get('/:id', async (req, res) => {
    var articleApi = await axios.get(`http://localhost:3000/api/article/` + req.params.id);
    res.render('article', { article: articleApi.data });
})

module.exports = getRouter;