// Ví dụ vê hàm ẩn danh được gán cho 1 biến
// const cong = function(a,b){
//     return a +b;
// }

// console.log(cong(2,3));
//=================================
// Ví dụ 2: dùng hàm ẩn danh như là tham số để truyền vào hàm khác (callback)
// setTimeout(function()
// {
//     console.log("Đã hết 3 giây! (sau 3 giây)");
// },3000);

// console.log("Đang chờ");
//=======================================================================
//Ví dụ 3: định nghĩa hàm ẩn danh bằng cú pháp mũi tên (arrow function)
// setTimeout(() => {
//     console.log("Đã hết 3 giây! (sau 3 giây)");
// }, 3000);

// console.log("Đang chờ");
//======================================================================
//Ví dụ 4: sử dụng trong phương thức của mảng. Hàm ẩn danh được dùng làm tham số, 
// để truyền cho phương thức của mảng.
// const numbers = [1, 2, 3, 4];
// numbers.forEach(function(num)
// {
//     console.log(num + 1);
// });
//=====================================================================
//Ví dụ 5: hàm ẩn danh có thể thực thi ngay sau khi định nghĩa. (Immediately Invoked Function Expression - IIFE).
// (function() {
//     console.log("Hàm chạy ngay sau khi định nghĩa, không cần thao tác gọi hàm!");
// })();
//=====================================================================