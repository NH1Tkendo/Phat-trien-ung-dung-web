'use strict'
const express = require('express')
const app = express();
const port = process.env.PORT || 9000

app.get("/", (req,res) =>
{
    const id = req.query.id;
    const name = req.query.name;
    const gpa = req.query.gpa;
    
    res.send(`Mã sinh viên ${id} Tên ${name} GPA ${gpa}`);
});

app.listen(port,() => {
    console.log(`server dang chay tren cong http://localhost:${port}`);
});