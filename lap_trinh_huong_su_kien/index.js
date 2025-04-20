'use strict'

const express = require('express')
const app = express();
const port = process.env.PORT || 9000

// gọi module events
const events = require('events');

// tạo ra một EventEmitter
const eventEmitter = new events.EventEmitter();

// đăng ký tên sự kiện, gắn với hàm lắng nghe và
// xử lý sự kiện tương ứng - xuLythongBao là event handler
// eventEmitter.on('hetGio', xuLyThongBao);

// // định nghĩa hàm xuLyThongBao
// function xuLyThongBao(tb) {
//     console.log(tb);
// }

// // phát ra sự kiện, kèm theo thông điệp
// setTimeout(()=> {
//     eventEmitter.emit('hetGio','Hết giờ học rồi, về thôi!!!!!!!')
// }, 2000);

//Cách 2: sử dụng hàm mũi tên
// eventEmitter.on('hetGio', (thongBao) => {
//     console.log(thongBao);
// });

// // phát ra sự kiện, kèm theo thông điệp
// setTimeout(()=> {
//     eventEmitter.emit('hetGio','Hết giờ học rồi, về thôi!!!!!!!')
// }, 2000);

eventEmitter.on('vaoLop', (tb) => {
    console.log(tb);
});

setTimeout(() => {
    eventEmitter.emit('vaoLop',"Vào lớp !!!!!!")
});
// khoi dong web server
app.listen(port, () => {
    console.log(`server dang chay tren cong ${port}`);
});
