//Sử dụng hàm callback trong các hàm hẹn giờ (ví dụ: setTimeout, setInterval).
// setTimeout(() => {
//     console.log("Đã hết 5 giây! (sau 5 giây)");
// }, 5000);

// console.log("Đang chờ");
//===========================================================================
//Sử dụng callback trong các phương thức như forEach, map, filter, reduce.
// const numbers = [1, 2, 3, 4];
// numbers.forEach(num => console.log(num * num));
//===========================================================================
//Dùng CallBack trong gọi API
// function getUser(userId, callback) {
//     fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
//         .then(response => response.json())
//         .then(data => callback(null, data)) // Thành công, gọi callback với dữ liệu
//         .catch(error => callback(error, null)); // Lỗi, gọi callback với lỗi
// }

// getUser(1, function(error, user) {
//     if (error) {
//         console.error("Lỗi:", error);
//     }
//     else {
//         console.log("Tên người dùng:", user.name);
//     }
// });
//==============================================================================
// Callback tùy chỉnh logic, cho phép người dùng truyền logic riêng vào hàm tổng quát
// function xuLyMang(arr, callback) {
//     for (let i = 0; i < arr.length; i++) {
//         arr[i] = callback(arr[i]);
//     }

//     return arr;
// }
 
// const numbers = [1, 2, 3];

// const binhPhuong = xuLyMang(numbers, x => x * x);
// console.log(binhPhuong);

//const nhan2 = xuLyMang(numbers, x => x * 2);
//console.log(nhan2);
//===================================================================================
// Ví dụ về CallBack hell
// setTimeout(() => { console.log("Bước 1 hoàn tất");
//     setTimeout(() => { console.log("Bước 2 hoàn tất");
//         setTimeout(() => { console.log("Bước 3 hoàn tất");
//         }, 1000);
//     },1000);
// }, 1000);
//====================================================================================



 

