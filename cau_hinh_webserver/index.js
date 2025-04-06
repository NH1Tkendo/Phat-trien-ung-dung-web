'use strict'
const express = require('express')
const app = express();
const port = process.env.PORT || 9000
// xu ly khi nguoi dung gui request toi web server
app.get("/", (req, res) => {
    res.send('Chao ban den voi TeoShop!!');
})
// khoi dong web server
app.listen(port, () => {
    console.log(`server dang chay tren cong ${port}`);
})