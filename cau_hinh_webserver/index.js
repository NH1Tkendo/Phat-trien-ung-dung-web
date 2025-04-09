const express = require('express');
const app = express();
const port = 9000;

app.get('/', (req, res) => {
    res.send('Xin chào từ server!');
});

app.listen(port, () => {
    console.log(`Server đang chạy tại http://localhost:${port}`);
});
