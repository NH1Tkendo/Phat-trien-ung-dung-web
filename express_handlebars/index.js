'use strict'

const express = require('express');
const port = process.env.PORT || 9000
const app = express();
const expressHandlebars = require('express-handlebars');

app.use(express.static('views')); 

// cau hinh de su dung express handlebars, dinh nghia engine
app.engine('hbs', expressHandlebars.engine({
    // thu muc chua cac layout
    layoutsDir: __dirname + '/views/layouts',
    // thu muc chua cac template con
    partialsDir: __dirname + '/views/partials',
    // duoi cua tap tin layout
    extname: 'hbs',
    // tap tin layout chinh la
    defaultLayout: 'main'
}));

// khai bao de su dung engine da dinh nghia
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.render('index'); // se lay index.hbs do vao {{{ body }}} trong main.hbs
});

app.get('/:page', (req, res) => {
    res.render(req.params.page);
});

app.listen(port, () => {
    console.log(`Server đang chạy tại http://localhost:${port}`);
});