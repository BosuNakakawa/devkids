const express = require('express');
const app = express();

const articleRouter = require('./src/routes/articleRouter'); // นำเข้าเส้นทาง article
const getRouter = require('./src/middlewares/getArticle');

const readController = require('./src/controllers/readController');


app.use('/public', express.static(__dirname + '/public'));

app.set('view engine', 'ejs');
app.set('views', './src/views');

app.use('/', getRouter);
app.use('/article', readController);

// MongoDB API //

app.use('/api', articleRouter);

// end MongoDB API //

app.listen(3000, () => {

})