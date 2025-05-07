'use strict'

const express = require('express')
const port = process.env.PORT || 9000
const app = express()
const expressHandlebars = require('express-handlebars');
const {connect,sql} = require('./db_config');
const CauHoi = require('./views/models/cauhoi');
let danhSachCauHoi = [];
let countDapAnDung = 0;
let maxcauhoi = 0;
let randomIndex = []

app.use(express.static('views')); 
app.use(express.urlencoded({ extended: true }));

// cau hinh de su dung express handlebars, dinh nghia engine
app.engine('hbs', expressHandlebars.engine({
    layoutsDir: __dirname + '/views/layouts',
    partialsDir: __dirname + '/views/partials',
    extname: 'hbs',
    defaultLayout: 'main'
}));

app.set('view engine', 'hbs');

app.get('/', async(req, res) => {
    try{
        const pool = await connect();
        const result = await pool.request().query(`
            SELECT a.ID, a.CauHoi, b.CauTraLoi, b.DapAn
            FROM CauHoi a, CauTraLoi b
            WHERE a.ID = b.IDCauHoi
        `);
        if(danhSachCauHoi.length == 0){
            danhSachCauHoi = CauHoi.fromRows(result.recordset);
        }
        res.render('index');
    }catch(err){
        res.status(500).send("Loi truy van sql");
        console.error(err);
    }
});

app.get('/favicon.ico', (req, res) => res.sendStatus(204));

app.get('/summary-test', (req, res) => {
    const index = parseInt(req.query.index) || 0;

    if (index >= danhSachCauHoi.length) {
        randomIndex = [];
        res.render('/result', countDapAnDung);
    }

    const cauHoiHienTai = danhSachCauHoi[index];
    res.render('summary-test', {
        question: cauHoiHienTai,
        currentIndex: index
    });
});

app.get('/random-option', (req, res) => {
    res.render('random-option');
});

app.get('/random-test', (req, res) => {
    const index = parseInt(req.query.index) || randomIndex[0];

    const cauHoiHienTai = danhSachCauHoi[index];
    res.render('random-test', {
        question: cauHoiHienTai,
        currentIndex: index
    });
});

app.post('/answer', (req,res) => {
    const index = parseInt(req.body.index);
    const answer = parseInt(req.body.answer);
    
    const cauHoiHienTai = danhSachCauHoi[index];
    const isCorrect = cauHoiHienTai.tracNghiem[answer].dapAn === true;
    
    if(isCorrect)
    {
        countDapAnDung += 1;
    }
        
    if(randomIndex.length == 0)
    {
        setTimeout(() => {
            const nextIndex = index + 1;
            res.redirect(`/summary-test?index=${nextIndex}`);
        }, 2000);
    }
    else{
        maxcauhoi-=1; // giảm còn lại bao nhiêu câu

        if (maxcauhoi == 0) {
            // kết thúc
            countDapAnDung == 0;
            return setTimeout(() => {
            res.render('partials/result', {dung: countDapAnDung });
            }, 2000);
        }

        setTimeout(() => {
            const nextIndex = randomIndex[maxcauhoi]; 
            res.redirect(`/random-test?index=${nextIndex}`);
        }, 2000);
    }
});

app.post('/option', (req, res) => {
    maxcauhoi = parseInt(req.body.maxquestion); 
    //Random index của câu hỏi
    const allIndex = Array.from({ length: danhSachCauHoi.length }, (_, i) => i);
    allIndex.sort(() => Math.random() - 0.5);
    randomIndex = allIndex.slice(0, maxcauhoi);
    //===========================
    res.redirect("/random-test");
});

app.listen(port, () => {
    console.log(`Server đang chạy tại http://localhost:${port}`);
});