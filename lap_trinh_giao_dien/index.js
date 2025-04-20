'use strict'
const express = require('express');
const app = express();
const port = process.env.PORT || 9000

app.use(express.static(__dirname + '/public'));
//- app.use(): là phương thức của đối tượng app (ứng dụng Express), sử dụng để đăng ký middleware có tên là express.static()
//- express.static(): là một middleware tích hợp sẵn trong Express, được sử dụng để gửi các tập tin tĩnh như CSS, JavaScript, hình ảnh. Nó nhận một tham số là đường dẫn đến thư mục chứa các tập tin tĩnh.
//- __dirname: là một biến toàn cục trong Node.js, đại diện cho đường dẫn tuyệt đối đến thư mục chứa tập tin JavaScript hiện tại đang chạy (index.js).
//- /public: là đường dẫn tương đối đến thư mục public trong thư mục dự án của bạn. Thư mục public thường được sử dụng để chứa các tập tin tĩnh.
//Tóm lại, dòng mã trên sẽ trả về cho người dùng trang tĩnh (mặc định, ví dụ index.html) trong thư mục public, khi người dùng nhập đường dẫn http://localhost/9000

app.get('/', (req, res) => {
    res.send('Xin chào từ client!');
});

app.listen(port, () => {
    console.log(`Server đang chạy tại http://localhost:${port}`);
});

