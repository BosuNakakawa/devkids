const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/devkids');

// กำหนดโครงสร้างข้อมูล
const articleSchema = new mongoose.Schema({
    _id: String,
    id: String,
    title: String,
    desc: String,
    thumb_url: String,
    html: String
}, {
    collection: 'article'
});

// สร้างโมเดล (Model) จากโครงสร้างข้อมูล
const Article = mongoose.model('Article', articleSchema);

module.exports = Article;