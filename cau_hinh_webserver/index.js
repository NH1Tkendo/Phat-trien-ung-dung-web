'use strict'
const express = require('express');
const app = express();
const port = 9000;

app.get('/', (req, res) => {
    res.send('Xin chào từ client!');
});

app.listen(port, () => {
    console.log(`Server đang chạy tại http://localhost:${port}`);
});

//Giải thích toàn bộ đoạn mã trong tập tin index.js
// 'use strict'
//Strict mode giúp bạn viết mã an toàn hơn bằng cách đưa ra các lỗi khi bạn sử dụng 
//các tính năng không an toàn hoặc các thực hành không tốt

//const express = require('express')
//Triệu gọi (thư viện) module express để sử dụng trong đoạn mã của bạn

//const app = express();
//Tạo một đối tượng (instance, thể hiện) của ứng dụng Express và gán nó cho biến app. Biến
//app sẽ được sử dụng để định nghĩa các route và xử lý các request.

// const port = process.env.PORT || 9000
// Định nghĩa cổng mà ứng dụng sẽ chạy trên đó
// process.env.PORT là một biến môi trường có thể được thiết lập bởi môi trường triển khai (ví dụ: Heroku, AWS)
//  || 9000 có nghĩa là nếu process.env.PORT không được thiết lập, cổng 9000 sẽ được sử dụng.

// app.get("/", (req, res) => { res.send('Chao ban den voi ctk!');
// Định nghĩa một route cho request GET đến đường dẫn "/".
// Khi người dùng truy cập đường dẫn "/", hàm callback (req, res) => { ... } sẽ được thực thi.
// req là đối tượng request, chứa thông tin về request từ người dùng
// res là đối tượng response, được sử dụng để gửi phản hồi về cho người dùng
// res.send('Chao ban den voi ctk!'); gửi một chuỗi "Chao ban den voi ctk!" về cho người dùng.

//app.listen(port, () => { console.log(`server dang chay tren cong${port}`);});
// Khởi động web server và lắng nghe các request đến cổng được chỉ định.
// Khi server khởi động thành công, hàm callback ()=> { ... } sẽ được thực thi.
// console.log(`server dang chay tren cong ${port}`);` in ra một thông báo cho biết server đang chạy trên cổng nào.

//Tóm lại: đoạn mã trên tạo một web server đơn giản sử dụng Express. Khi người dùng truy cập đường dẫn "/" trên 
// trình duyệt, server sẽ trả về chuỗi "Chao ban den voi ctk!