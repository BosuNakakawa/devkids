const express = require('express');
const router = express.Router();
const Article = require('../models/articleModel'); // นำเข้าโมดูลโมเดล Article

// GET /Article - ดึงข้อมูลบทความทั้งหมด
router.get('/article', (req, res) => {
    Article.find({})
        .then(articleResult => {
            res.json(articleResult);
        })
        .catch(err => {
            console.error('Error retrieving result', err);
            res.status(500).json({ error: 'Error retrieving result' });
        });
});

router.get('/article/:id', (req, res) => {
    Article.find({ id: req.params.id })
        .then(articleResult => {
            res.json(articleResult);
        })
        .catch(err => {
            console.error('Error retrieving result', err);
            res.status(500).json({ error: 'Error retrieving result' });
        });
});

module.exports = router;
