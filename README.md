# Self note dành cho môn Phát triển ứng dụng web
## Giảng viên hướng dẫn: 
* Thầy Lê Gia Công
## Tác giả
* Ngô Bá Tài
## Chương 1: Web back-end
### 1.1 Một số khái niệm cơ bản
* **Web:** Web hay WWW là từ viết tắt của World Wide Web là mạng lưới thông tin toàn cầu. Web bao gồm rất nhiều các trang web kết nối lại với nhau, với thông tin đa dạng như văn bản, 
  hình ảnh, âm thanh, video và nhiều loại dữ liệu khác
* **Trang web(web page):** là một trang tài liệu trên hệ thống web. Trang web có thể chứa văn bản, hình ảnh, âm thanh, video, và các nội dung đa phương tiện khác.
  * Trang web được tạo ra bằng HTML, CSS, JavaScript và một trong các ngôn ngữ lập trình phía server(Python, JavaScript, C#, PHP, Go, Java, Ruby...)
  * Mã nguồn của trang web được lưu trên máy chủ (máy web server)
  * Mỗi trang web có một địa chỉ URL duy nhất. URL là một chuỗi ký tự, xác định vị trí của một trang web trên Internet
  * Trang web có thể được dùng để: cung cấp thông tin, bán hàng, chia sẻ ý kiến, kết nối mọi người, giáo dục, quản lý, giải trí
* **Website:** Website là một tập hợp nhiều trang web có liên quan đến nhau, có một địa chỉ URL duy nhất
![image](md_assets/website.png)
* **Ứng dụng web (web application hay web app):** là một loại ứng dụng mà người dùng có thể truy cập và sử dụng thông qua Internet hoặc mạng nội bộ (hoặc trên máy cục bộ) bằng trình 
  duyệt web. Ví dụ: Google Drive
  * Một số đặc điểm:
      * Mã nguồn của ứng dụng web được để trên máy server, giao diện ứng dụng web được hiển thị trên trình duyệt
      * Ứng dụng web hoạt động dựa trên mô hình client-server
      * Không có sự phân biệt rõ ràng giữa website và ứng dụng web
  * Điểm khác nhau giữa Website và Ứng dụng web:
    
  ![image](md_assets/diff_website_webapp.png)
### 1.2 Phát triển ứng dụng web là gì?
Phát triển ứng dụng web là quá trình tạo ra ứng dụng web

Tạo ra ứng dụng web cũng là quá trình tạo ra ứng dụng máy tính hay phần mềm nói chung, vì vậy nó cũng cần trải qua các giai đoạn cơ bản như:
- Lập dự án

- Xác định yêu cầu

- Phân tích

- Thiết kế

- Lập trình

- Triển khai

- Bảo trì và cập nhật

![image](md_assets/DuAn.png)
#### 1.2.1 Một số cách để tạo ra ứng dụng web
- Sử dụng hệ quản trị nội dung

- Sử dụng framework và thư viện hỗ trợ

- Viết thuần bằng ngôn ngữ lập trình mà không sử dụng framework và thư viện hỗ trợ

![image](md_assets/taoUngDungWeb.png)

* Hệ quản trị nội dung (Content Management System - CMS) là một phần mềm hoặc một tập hợp các phần mềm được sử dụng để tạo, quản lý và sửa đổi nội dung trên một trang web mà 
  không cần đến các kiến thức chuyên sâu về lập trình. Ví dụ: WordPress, Wix, Joomla, Drupal, Magento, Shopify, WordPress, Blogger...
  * Các chức năng chính của một CMS:
    - Tạo và quản lý nội dung: cho phép người dùng dễ dàng tạo, chỉnh sửa, xóa và sắp xếp nội dung (văn bản, hình ảnh, video) trên trang web

    - Quản lý người dùng: cho phép phân quyền truy cập và quản lý các tài khoản người dùng khác nhau, ví dụ: quản trị viên, nhân viên, biên tập viên, tác giả.

    - Quản lý giao diện: cho phép tùy chỉnh giao diện của trang web thông qua các mẫu giao diện (template), các kho giao diện (theme)

    - Quản lý các mô-đun, các tiện ích bổ sung: cho phép mở rộng chức năng của trang web thông qua việc cài đặt các mô-đun (module) hoặc các tiện ích bổ sung (plugin)

    - Tối ưu hóa SEO: hỗ trợ các công cụ và tính năng để tối ưu hóa công cụ tìm kiếm (SEO) cho trang web, giúp trang web dễ dàng được tìm thấy trên các công cụ tìm kiếm như Google
  * Ưu điểm của CMS:
    - Dễ sử dụng, dễ quản lý, tiết kiệm thời gian

    - Không cần kiến thức lập trình chuyên sâu

    - Linh hoạt trong việc lựa chọn giao diện, các mô-đun chức năng

    - Tối ưu SEO

    - Chi phí phát triển ứng dụng thấp
  * Nhược điểm của CMS:
    - Vấn đề bảo mật, tấn công hệ thống

    - Hiệu suất, tốc độ thực thi có thể chậm nếu không được tối ưu đúng cách; mã nguồn lớn, dư thừa

    - Khả năng tùy chỉnh chức năng thấp

    - Phụ thuộc hạ tầng, công nghệ, chức năng vào nhà cung cấp
* Frameword và thư viện hỗ trợ:
  - Frontend: jQuery, Bootstrap, D3, React, Angular, Vue, Svelte 

  - Backend: Express.js (Nodejs), Django, Flask (Python), ASP.NET (C#), Spring Boot (Java), Laravel (PHP), Ruby on Rails (Ruby), Gin, Echo (Go, Golang)
    
  - Ưu điểm khi sử dụng framework và thư viện:
      - Tăng tốc độ phát triển
      - Cải thiện chất lượng viết mã
      - Tăng cường bảo mật
      - Dễ dàng bảo trì và mở rộng
      - Cộng đồng hỗ trợ lớn
  - Nhược điểm của việc sử dụng framework:
    - Để sử dụng một framework hiệu quả, bạn cần phải dành thời gian để học và làm quen với nó

    - Một số framework có thể làm tăng kích thước của ứng dụng, các ứng dụng quá đơn giản thì không nhất thiết phải dùng framework

    - Một số framework có thể hạn chế khả năng tùy chỉnh của bạn
* Viết thuần: Việc phát triển ứng dụng web bằng cách tự viết mã từ đầu (hay còn gọi là "viết thuần”, “viết tay") cũng là một cách bạn có thể sử dụng để tạo ra ứng dụng web. Bạn sẽ không 
  sử dụng bất kì framework hay thư viện hỗ trợ nào. Các ngôn ngữ bạn sẽ sử dụng:
  - Frontend: HTML, CSS, JavaScript
  - Backend: một trong các ngôn ngữ lập trình: JavaScript, Python, C#, PHP, Java, Go, Ruby
  - Ưu điểm:
    - Toàn quyền kiểm soát và tùy chỉnh mã nguồn, không bị bất kì ràng buộc hay giới hạn nào

    - Tối ưu hóa mã nguồn để ứng dụng chạy nhanh và hiệu quả nhất

    - Hiểu rất sâu và nắm vững các ngôn ngữ lập trình, kỹ thuật lập trình, kỹ thuật bảo mật, công nghệ web

    - Tư duy logic và giải quyết vấn đề tố
  - Nhược điểm:
    - Tốn thời gian, công sức

    - Khối lượng công việc rất lớn

    - Yêu cần kiến thức chuyên môn cao, toàn diện

    - Khó bảo trì và mở rộng

    - Chi phí cao
### 1.3 Web Server
Web server (máy chủ web) là một máy tính (hoặc một phần mềm), được sử dụng để lưu trữ và cung cấp toàn bộ nội dung cho một website/ứng dụng web (tạm gọi chung là ứng dụng web).
Một số chức năng chính của web server
- Lưu trữ các tập tin của ứng dụng web: web server lưu trữ tất cả các tập tin và dữ liệu tạo nên ứng dụng web, ví dụ các tập tin HTML, hình ảnh và video.

- Nhận yêu cầu (request): khi người dùng truy cập một ứng dụng web, trình duyệt web của họ sẽ gửi một request tới web server. Web server sẽ tiếp nhận request này.

- Xử lý request: sau khi nhận được request, web server sẽ thực hiện xử lý request. Việc xử lý request có thể là: đọc nội dung các tập tin, thực thi các đoạn mã nguồn, kết nối và làm việc với cơ sở dữ liệu.

- Gửi phản hồi (response): sau khi xử lý xong request, web server sẽ gửi response cho trình duyệt của người dùng, sau đó, trình duyệt sẽ hiển thị kết quả response cho người dùng

* Một số phần mềm web server phổ biến: Apache, Nginx, NodeJS, IIS, Tom cat, Lighttpd
* Kiến trúc của 1 web server
  
![image](md_assets/webserver_kientruc.png)

* Một máy web server có các đặc điểm sau:

  - Phần cứng là một máy server chuyên dụng, cấu hình mạnh, khả năng chịu lỗi cao, chạy liên tục

  - Hệ điều hành dành cho máy chủ

  - Có cài đặt phần mềm web server (HTTP server - Apache, Nginx, IIS), có thể có hệ quản trị cơ sở dữ liệu (Database), trình dịch và thực thi mã nguồn (Scripting Language)
#### 1.3.1 Nginx
Nginx là phần mềm web server mã nguồn mở
* Một số lệnh quan trọng của nginx
- start nginx: khởi chạy Nginx 

- nginx -s stop: tắt Nginx ngay lập tức

- nginx -s quit: không chấp nhận kết nối mới, chờ các client hoàn thành tác vụ dang dở rồi mới tắt Nginx

- nginx -s reload: thay đổi cấu hình, khởi chạy lại worker process với cấu hình mới

- nginx -s reopen: mở lại các tập tin log
### 1.4 NodeJS và NPM
#### 1.4.1 NodeJS là gì?
Nodejs là một môi trường để chạy mã nguồn JavaScript đa nền tảng, mã nguồn mở, miễn phí. Bạn có thể dùng Nodejs để tạo server (web server), ứng dụng web, các công cụ dòng lệnh và các ứng dụng khác.

Là một lập trình viên, bạn sẽ lập trình một ứng dụng bằng ngôn ngữ JavaScript thuần hoặc dùng một JavaScript framework (ví dụ Express), sau đó chuyển mã nguồn cho Nodejs dịch mã, thực thi chương trình, xuất kết quả

![image](md_assets/node.png)
#### 1.4.2 Các thành phần của NodeJS
![image](md_assets/cac thanh phan cua node.png)

- V8 để dịch và thực thi mã JavaScript

- HTTP module để tạo web server (hay còn gọi là HTTP server)

- Chương trình để quản lý gói và các thư viện có tên là NPM

- Các module, thư viện để lập trình ứng dụng web
#### 1.4.3 NPM
Vì số lượng các thư viện cần tải trong quá trình phát triển web là rất nhiều nên không thể quản lý thủ công mà cần tới phần mềm để quản lý. NPM chính là công cụ để quản lý các thư viện mà chúng ta sử dụng khi làm ứng dụng web.

NPM (Node Package Manager) là công cụ đi kèm với Nodejs, được sử dụng để quản lý các thư viện dùng trong ứng dụng web.

NPM gồm 3 thành phần

- Website: địa chỉ là https://www.npmjs.com/, bạn vào trang này để tìm kiếm các gói thư viện cần dùng

- Công cụ dòng lệnh (Command Line Interface - CLI): lập trình viên sử dụng công cụ này để tương tác với npm, để cài đặt, sử dụng và quản lý các thư viện

- Registry: là kho lưu trữ các thư viện
### 1.5 Cấu hình web server trong NodeJS
#### 1.5.1 Package.json
Trong một ứng dụng viết trên Nodejs, tập tin package.json cũng đóng vai trò như một cuốn sổ tay, là “sổ tay ứng dụng”, cũng có thể gọi là “hồ sơ ứng dụng” (manifest)
Tập tin package.json chứa thông tin sau:
  - Thông tin mô tả về ứng dụng

  - Quản lý các phụ thuộc (quản lý các thư viện sử dụng trong ứng dụng)

  - Các lệnh chạy (scripts), định nghĩa ngắn gọn các lệnh để điều khiển ứng dụng

  - Đầu vào (entry point, main) của dự án, cho biết tập tin đầu tiên được triệu gọi

Dùng NPM để tạo ra file package.json (sử dụng terminal của vs code cho tiện)
  * B1: Mở terminal của vscode và trỏ tới thư mục dự án
  * B2: Chạy lệnh npm init -y (Nếu có kết quả như ảnh thì là đúng)
![image](md_assets/package_success.png)
* Lệnh npm init -y: được sử dụng để khởi tạo một dự án Node.js mới với file package.json mà không cần phải trả lời các câu hỏi cấu hình thủ công. Nếu không có tham số -y thì sẽ hiện một 
  loạt các câu hỏi về thông tin dự án (như tên dự án, phiên bản, mô tả, tác giả...). Tùy chọn -y là viết tắt của yes, khi có tùy chọn này thì npm sẽ tự động điền các giá trị mặc định 
  cho tất cả các câu hỏi này và tạo ngay tập tin package.json mà không yêu cầu sự can thiệp của bạn.
#### 1.5.2 Cài đặt PNPM, Express, Web server, Nodemon
* Cài đặt PNPM(Performant Node Package Manager):
  Gõ lệnh: ```npm install -g pnpm@latest-10```
  - npm install: lệnh của npm, dùng để cài đặt các gói, thư viện, công cụ
  
  - g: tham số global (cài đặt ở phạm vi toàn cục)
    
  - pnpm: tên công cụ cần cài đặt
    
  - @latest-10: phiên bản mới nhất của bản 10-x
* Cài đặt Express:
  Gõ lệnh trong terminal của vscode: ```pnpm i -s express```
  - i có nghĩa là cài đặt (install)
    
  - s là viết tắt của --save, với tùy chọn này, thông tin của Express sẽ được thêm vào phần dependencies trong package.json, thư viện Express sẽ được lưu trong thư mục node_modules của 
  dự án.

  - Sau khi cài được Express, mở tập tin package.json, sẽ thấy thông tin của Express được lưu trong phần dependencies. Trong thư mục dự án cũng xuất hiện thêm thư mục 
  node_modules. Thư mục node_modules này dùng để lưu trữ các gói mà dự án sẽ sử dụng. Như vậy, Express cũng được lưu trong node_modules.
![image](md_assets/express.png)
* Tạo file index.js và khai báo như sau để tạo web server:
```
'use strict'
const express = require('express')
const app = express();
const port =
process.env.PORT || 9000
// xu ly khi nguoi dung gui request toi web server
app.get("/", (req, res) => {
    res.send('Chao ban den voi TeoShop!!');
})
// khoi dong web server
app.listen(port, () => {
    console.log(`server dang chay tren cong ${port}`);
})
```
Sau đó sử dụng lệnh node index.js để khởi chạy web server, để tắt web server, chuyển dấu nhắc chuột vào cửa sổ dòng lệnh, dùng tổ hợp phím Ctrl + C.
* Cài đặt Nodemon:
Trong quá trình làm việc với web server, mỗi lần thay đổi mã nguồn của tập tin (index.js), chúng ta đều phải tắt web server (Ctrl + C), và chạy lại. Mục đích để web server cập nhật lại mã nguồn. Điều này khá bất tiện.

Sử dụng câu lệnh để cài đặt: ```npm install --g nodemon```

Vào terminal gõ: ```nodemon``` (Thay vì dùng lệnh node index.js thì gõ nodemon mỗi lần chạy web server)
### 1.5.3 Thông tin thêm
* Vậy package.json và node_modules khác nhau như nào?
  * package.json là một file mô tả dự án với mục đích chính là lưu thông tin về project, thư viện và ứng dụng
  * node_modules là một thư mục chứa code thư viện (Nơi chứa mã nguồn của các package đã cài qua npm)
* Làm sao biết được một gói cài đặt ở chế độ cục bộ (locally) hay toàn cục (globally)? Khi cài đặt các gói (package) ở chế độ cục bộ và toàn cục (globally) thì các gói sẽ được lưu ở 
  đâu?
  * Làm sao biết được một gói cài đặt ở chế độ cục bộ (locally) hay toàn cục (globally): Trong câu lệnh cài đặt có quy ước -g (Cài đặt global) còn nếu không có thì mặc định là local
  * Khi cài đặt các gói (package) ở chế độ cục bộ và toàn cục (globally) thì các gói sẽ được lưu ở đâu: Cài đặt cục bộ thì sẽ lưu trong node_modules còn cài đặt toàn cục thì lưu trong     thư mục golbal của npm
### 1.6 Local và Global, Dependencies và devDependencies
#### 1.6.1 Local và Global
* Cài đặt gói kiểu cục bộ
  Sử dụng cú pháp '''npm install <package_name>'''
  
  Sau khi cài đặt xong thì thông tin về gói này sẽ được ghi lại trong tập tin package.json, mục dependencies

  Khi một gói được cài đặt theo kiểu cục bộ, mã nguồn của gói sẽ được lưu trong dự án, tại thư mục node_modules.
* Gỡ bỏ một gói cục bộ
  Dùng lệnh ```npm uninstall <package_name>``` để gỡ cài đặt 1 gói cục bộ

  Sau khi gỡ bỏ gói, mục dependencies trong package.json cũng được cập nhật lại.
* Cài đặt một gói kiểu toàn cục (global)
  Dùng lệnh ```npm install <package_name> -g``` -g là viết tắt của global
* Vị trí lưu trữ gói toàn cục
  Dùng lệnh ```npm root -g``` để biết được vị trí lưu trữ các gói toàn cục

  Dùng lệnh ```npm ls -g --depth 0``` để xem được các gói toàn cục đã cài đặt
  - npm ls: để liệt kê các gói đã được cài đặt trên máy, ls là viết tắt của list

  - -g là cờ báo, để chỉ hiển thị các gói kiểu toàn cục (global)

  -  --depth 0: chỉ hiển thị các gói toàn cục cấp cao nhất
  (top-level), không hiển thị các gói là con-cháu (sub-dependencies) của gói cấp cao nhất
* Nên cài đặt gói theo kiểu cục bộ hay toàn cục
  * Các trường hợp nên cài gói cục bộ:
  - Khi gói chỉ cần thiết cho một dự án cụ thể và không cần sử dụng ở phạm vi rộng hơn

  - Khi bạn muốn các phụ thuộc (dependencies) của dự án được quản lý chặt chẽ trong tập tin package.json, giúp dễ dàng tái tạo môi trường phát triển ở máy khác (ví dụ: khi chia sẻ mã       nguồn hoặc triển khai)
  
  - Khi gói là một phần của ứng dụng hoặc thư viện mà bạn đang phát triển (ví dụ: express)
  * Các trường hợp nên cài gói toàn cục:
  - Khi gói là công cụ dòng lệnh (CLI) hoặc tiện ích mà bạn muốn sử dụng ở bất kỳ đâu trong hệ thống, không phụ thuộc vào dự án cụ thể (ví dụ: nodemon)

  - Khi bạn cần chạy gói như một lệnh độc lập từ cửa sổ dòng lệnh mà không cần viết script trong package.json

  * Một số lưu ý
  * Ưu tiên cài cục bộ khi có thể: ngay cả với các công cụ dòng lệnh như eslint hay prettier, bạn vẫn có thể cài cục bộ và chạy chúng thông qua script trong package.json. Điều này giúp     đảm bảo mọi thành viên trong nhóm hoặc môi trường CI/CD sử dụng cùng phiên bản
  * Khi nào cần cả hai? Đôi khi bạn muốn cài toàn cục để tiện sử dụng cá nhân, nhưng vẫn cài cục bộ cho dự án để đảm bảo tính nhất quán
  * Tránh lạm dụng cài toàn cục: chỉ nên cài toàn cục cho các công cụ thực sự cần thiết ở phạm vi hệ thống. Việc cài quá nhiều gói toàn cục có thể dẫn đến khó quản lý và xung đột phiên    bản.
#### 1.6.2 Dependencies và devDependencies
Chỉ có các gói được cài đặt theo kiểu **cục bộ (trong dự án)**, thì mới được cập nhật thông tin trong package.json, trong mục dependencies và devDependencies.

Như vậy, dependencies và devDependencies là hai phần trong tập tin package.json, dùng để quản lý các gói mà dự án của bạn phụ thuộc vào. Sự khác biệt giữa chúng nằm ở mục đích sử dụng và giai đoạn mà chúng được yêu cầu trong vòng đời của dự án

##### a) Các gói nằm trong mục dependencies
Là các gói cần thiết để ứng dụng của bạn chạy trơn tru trong môi trường sản xuất, triển khai (production). Đây là những phụ thuộc "cốt lõi" mà mã nguồn của bạn trực tiếp sử dụng để hoạt động.

- Là một phần không thể thiếu trong xử lý logic của ứng dụng, ví dụ: framework express, thư viện xử lý HTTP, truy vấn cơ sở dữ liệu

- Khi người khác cài đặt dự án của bạn bằng lệnh npm install, các gói trong dependencies sẽ được tải về, vì chúng cần thiết để chạy ứng dụng

**Cách cài đặt một gói là dependencies**
Dùng lệnh ```npm install <package-name>```
##### b) Các gói nằm trong mục devDependencies
- Là các gói chỉ cần thiết trong quá trình phát triển ứng dụng (development) hoặc kiểm thử (testing), không cần thiết khi ứng dụng chạy ở môi trường sản xuất, triển khai (production)

- Khi gói là công cụ hỗ trợ lập trình viên, như công cụ kiểm tra cú pháp (linter), trình biên dịch (transpiler), framework kiểm thử (testing framework), hoặc công cụ khởi động server trong lúc thử nghiệm (nodemon)

- Khi cài đặt ứng dụng lên môi trường triển khai (production), các gói trong devDependencies sẽ không được cài đặt, giúp giảm dung lượng và tăng hiệu suất

**Cách cài đặt một gói là devDependencies**
Dùng lệnh ```npm install <package-name> --save-dev```
### 1.7 Một số chủ đề JavaScript
#### 1.7.1 Lập trình đồng bộ trong JavaScript
Lập trình đồng bộ (synchronous programming) là kỹ thuật lập trình mà các lệnh (statements) được thực thi tuần tự, theo thứ tự từ trên xuống dưới. Mỗi lệnh phải hoàn thành trước khi lệnh tiếp theo được thực thi

* Đặc điểm:
  - Thứ tự thực thi rõ ràng: các lệnh chạy theo thứ tự được viết trong mã nguồn

  - Chặn luồng (blocking): một lệnh chưa xong thì lệnh tiếp theo không thể chạy

  - Phù hợp với tác vụ đơn giản: các tác vụ không cần chờ đợi (như tính toán cơ bản) thường được xử lý đồng bộ
* Ưu điểm:
  - Dễ hiểu và dễ debug
  - Phù hợp với tác vụ nhanh
* Nhược điểm:
  - Gây chặn luồng (blocking)
  - Không hiệu quả cho các tác vụ I/O
  - Không tận dụng được khả năng xử lý song song
  - Không thích hợp cho ứng dụng lớn hoặc real time
#### 1.7.2 Hàm ẩn danh
Hàm ẩn danh (anonymous function) là một hàm không có tên (không được đặt tên) khi định nghĩa. Thay vì khai báo với từ khóa function đi kèm với tên như hàm thông thường, hàm ẩn danh thường được gán trực tiếp vào biến, truyền làm tham số, hoặc thực thi ngay lập tức mà không cần gọi hàm.

* Đặc điểm:
  - Không có tên: được định nghĩa mà không cần đặt tên sau từ khóa function

  - Tính linh hoạt: thường được dùng ngay tại nơi khai báo hoặc gán vào biến

  - Phạm vi: có thể truy cập biến trong phạm vi bao quanh (closure)
    
  - Không hoisting: không được "nâng lên" (hoisted) như hàm khai báo (function declaration)
* Cú pháp
  Hàm ẩn danh thông thường
  ```
  function() {
    // thân hàm
  }
  ```
  Hàm ẩn danh kiểu mũi tên
  ```
  () => {
    // thân hàm
  }
  ```
* Ví dụ: **nằm trong file dongbo.js**
* Hạn chế:
  - Khó gỡ lỗi (debug); vì không có tên, việc xác định lỗi trong stack trace có thể khó khăn hơn.
  - Không tái sử dụng được: nếu cần dùng lại, bạn phải gán nó cho một biến hoặc đặt tên
#### 1.7.3 Hàm mũi tên
Hàm mũi tên là một tính năng quan trọng được giới thiệu trong ES6 (ECMAScript 2015). Đây là cách viết hàm ngắn gọn và hiện đại trong JavaScript, thường được dùng trong lập trình bất đồng bộ và các tình huống khác.

* Đặc điểm:
  - Cú pháp ngắn gọn: do loại bỏ từ khóa function, dấu {} và lệnh return trong một số trường hợp

  - Không có this (ngữ cảnh) riêng: this trong hàm mũi tên được kế thừa từ phạm vi bên ngoài (lexical scoping), không bị ràng buộc (bound) như hàm thông thường

  - Không có arguments: không tự động tạo biến arguments để truy cập danh sách tham số

  - Không thể dùng làm hàm tạo (constructor): không thể gọi với từ khóa new để tạo đối tượng
* Cú pháp:
  - Không tham số: () => { ... }

  - Một tham số: x => { ... } (không cần dấu ngoặc cho một tham số)

  - Nhiều tham số: (x, y) => { ... }
* Ví dụ: **Trong file hammuiten.js**
* Từ khóa this trong hàm mũi tên
Hàm mũi tên không tạo this (biến ngữ cảnh) riêng, mà lấy this từ phạm vi bao quanh.
```
function Person() {
    this.age = 0;
    setInterval(() => {
        this.age++; // 'this' tham chiếu đến đối tượng Person
        console.log(this.age);
    }, 1000);
}

const p = new Person(); // Kết quả: 1, 2, 3, ... (tăng mỗi giây)
```
#### 1.7.4 Lập trình bất đồng bộ
Trong JavaScript, lập trình bất đồng bộ (asynchronous programming) là một mô hình lập trình cho phép chương trình thực hiện nhiều tác vụ cùng lúc mà không cần chờ đợi tác vụ trước đó hoàn thành. Điều này đặc biệt hữu ích khi xử lý các tác vụ tốn thời gian như yêu cầu xử lý qua mạng (gọi API, giao tiếp client-server), đọc/ghi tập tin hoặc tương tác với cơ sở dữ liệu

* Các kỹ thuật lập trình bất đồng bộ:
  * Callback:
    - Đây là cách tiếp cận truyền thống để xử lý bất đồng bộ trong JavaScript.
    - Một callback là một hàm được truyền vào một hàm khác và được thực thi khi tác vụ bất đồng bộ hoàn thành.
    - Tuy nhiên, sử dụng quá nhiều callback có thể dẫn đến "callback hell", khiến mã nguồn trở nên khó đọc và khó bảo trì.
  * Promises:
    - Promises là một đối tượng đại diện cho kết quả cuối cùng của một tác vụ bất đồng bộ.
    - Chúng cung cấp một cách viết mã bất đồng bộ rõ ràng và dễ bảo trì hơn so với callback.
    - then() được sử dụng khi thực hiện thành công, catch() được sử dụng khi gặp lỗi.
  * Async/await:
    - Async/await là một cú pháp mới hơn để viết mã bất đồng bộ, được giới thiệu trong ES2017.

    - Nó cho phép bạn viết mã bất đồng bộ trông giống như mã đồng bộ, giúp mã trở nên dễ đọc và dễ hiểu hơn.

    - async được đặt trước function, await được đặt trước các lời gọi hàm bất đồng bộ.
### 1.8 Callback
Hàm callback là một hàm được truyền vào một hàm khác như một tham số, và sẽ được thực thi sau khi hàm "cha" hoàn thành một tác vụ nào đó. Nói một cách đơn giản, nó là một cách để đảm bảo một đoạn mã được thực thi sau khi một đoạn mã khác hoàn thành.
* Các đặc điểm của hàm callback:
  - Truyền như tham số: callback là một hàm được truyền vào hàm khác để thực thi sau khi một điều kiện hoặc tác vụ hoàn tất.
  - Thực thi bất đồng bộ: thường dùng để xử lý các tác vụ không chặn luồng chính (non-blocking), như truy cập thiết bị (đọc/ghi tập tin), gọi API, hoặc trong các hàm hẹn giờ (timer).
  - Tính linh hoạt: có thể là hàm ẩn danh (anonymous function), hàm mũi tên (arrow function), hoặc hàm đã được định nghĩa trước (function expression).
  - "Callback Hell": nếu lồng quá nhiều callback, mã nguồn có thể trở nên khó đọc và bảo trì. Callback hell thường được giải quyết bằng Promise hoặc async/await.
* Một số tình huống có thể sử dụng hàm Callback:
  - Xử lý sự kiện (event handling): gắn hàm callback để phản hồi hành động của người dùng (ví dụ: click, hover, submit).
  - Tác vụ bất đồng bộ: gọi API, đọc/ghi tập tin, hoặc sử dụng trong các hàm hẹn giờ (ví dụ: setTimeout, setInterval).
  - Xử lý mảng: sử dụng trong các phương thức như forEach, map, filter, reduce.
  - Hoàn thành tác vụ: đảm bảo một đoạn mã chạy sau khi tác vụ khác hoàn tất (ví dụ: tải dữ liệu từ server rồi hiển thị lên giao diện).
  - Tùy chỉnh logic: cho phép người dùng truyền logic riêng vào hàm tổng quát.
* Ví dụ: **Trong file HamCallBack.js**
* Nhược điểm của hàm callback
  - Callback Hell: lồng quá nhiều callback dẫn đến mã khó đọc.
  - Xử lý lỗi phức tạp: cần kiểm tra lỗi thủ công trong mỗi callback.
  - Không trực quan: với các luồng phức tạp, khó theo dõi thứ tự thực thi.
### 1.9 Lập trình giao diện
* Các bước xử lý trên github:
  * B1 (Tùy chọn): ```git status``` để xem thử các file chưa được git theo dõi
  * B2: ```git add``` để đưa các file chưa được git theo dõi vào khu tạm
  * B3 (Tùy chọn): ```git status``` lại lần nữa để xem các file đã được đưa vào khu tạm
  * B4: ```git commit -m""``` để đưa các file trong khu tạm vào kho chứa cục bộ
#### 1.9.1 Sử dụng Free HTML template
Free HTML Template là các mẫu giao diện web được thiết kế sẵn, bao gồm HTML, CSS, và đôi khi JavaScript, được cung cấp miễn phí từ các nguồn như ThemeForest (miễn phí giới hạn), BootstrapMade, FreeHTML5.co, htmlcodex, hoặc GitHub. Chúng thường có giao diện đẹp, cấu trúc cơ bản (header, footer, sidebar), và phù hợp cho nhiều loại dự án như blog, portfolio, hoặc trang doanh nghiệp nhỏ.

**Khi nào nên sử dụng Free HTML Template trong dự án**
- Dự án nhỏ, thời gian gấp: template giúp tiết kiệm thời gian thiết kế giao diện từ đầu.
- Khách hàng cần prototype nhanh: dùng để trình bày ý tưởng ban đầu.
- Ngân sách thấp: phù hợp khi khách hàng không đủ chi phí thuê thiết kế riêng.
**Cách sử dụng**
- Tải về: chọn template từ nguồn uy tín, kiểm tra giấy phép (thường là Creative Commons hoặc MIT).
- Tùy chỉnh: điều chỉnh CSS, thay đổi nội dung (văn bản, hình ảnh), tích hợp back-end (như Node.js, PHP).
- Tối ưu: nén CSS/JS, kiểm tra responsive, đảm bảo tốc độ tải trang.
**Ưu điểm khi dùng template**
- Tiết kiệm thời gian.
- Giao diện chuyên nghiệp: template thường được thiết kế bởi chuyên gia, đảm bảo thẩm mỹ (ví dụ: bố cục gọn gàng, màu sắc hài hòa).
- Học hỏi: phân tích mã nguồn của template để học các kỹ thuật thiết kế.
**Nhược điểm**
- Giới hạn tùy chỉnh: sẽ bị thiếu một số tính năng, vì mỗi dự án của bạn sẽ có những đặc thù riêng.
- Mã nguồn dư thừa: template thường có CSS/JS không cần thiết, làm chậm trang.
- Không độc đáo: dùng template miễn phí dễ trùng lặp với web khác, gây khó cho khách hàng nếu họ muốn tạo thương hiệu riêng.
#### 1.9.2 Static file
Trong Express, static files (tập tin tĩnh) là các tập tin không thay đổi nội dung hoặc không cần xử lý logic phía server, như HTML, CSS, JavaScript, hình ảnh, font. Chúng được gửi trực tiếp cho client thông qua middleware express.static.

Các tập tin tĩnh được chứa trong một thư mục riêng (ví dụ: public).

**Mục đích static files:**
- Tối ưu hóa hiệu suất: việc gửi trực tiếp tập tin tĩnh từ máy chủ giúp giảm tải cho ứng dụng Express, cải thiện tốc độ tải trang.
- Tổ chức dự án: giúp cấu trúc dự án rõ ràng, dễ quản lý hơn.
- Bảo mật: chỉ cho phép truy cập các tập tin được công khai, bảo vệ các tập tin quan trọng khác.

Bài tập ví dụ trong thư mục ```lap_trinh_giao_dien```
### 1.10 Ứng dụng client-server
#### 1.10.1 Ứng dụng kiểu cục bộ
Trước khi tìm hiểu về ứng dụng kiểu client-server, chúng ta cùng tìm hiểu về ứng dụng kiểu cục bộ (gọi tắt là ứng dụng cục bộ).

Ứng dụng cục bộ (local application) là các ứng dụng chạy trực tiếp trên thiết bị của người dùng, như máy tính cá nhân, điện thoại hoặc máy tính bảng, mà không cần kết nối liên tục với máy chủ ở xa.

**Một số đặc điểm của ứng dụng cục bộ:**
- Chạy độc lập: ứng dụng cục bộ được cài đặt và chạy trực tiếp trên thiết bị của người dùng, không phụ thuộc vào kết nối internet để thực hiện các chức năng cơ bản.
- Truy cập tài nguyên thiết bị: ứng dụng cục bộ có thể truy cập trực tiếp vào các tài nguyên của thiết bị, chẳng hạn như hệ thống tập tin, phần cứng và các ứng dụng khác.
- Hiệu suất cao: do chạy trực tiếp trên thiết bị, ứng dụng cục bộ thường có hiệu suất cao hơn so với các ứng dụng web hoặc ứng dụng dựa trên đám mây.
- Khả năng ngoại tuyến: nhiều ứng dụng cục bộ có thể hoạt động mà không cần kết nối Internet, cho phép người dùng làm việc khi không có mạng.
- Bảo mật: dữ liệu của ứng dụng cục bộ thường được lưu trữ trên thiết bị của người dùng, giúp tăng cường bảo mật và quyền riêng tư.
**Lập trình ứng dụng cục bộ**
Dù bạn lập trình theo kiểu hướng cấu trúc hay hướng đối tượng thì cấu trúc của một chương trình thường là: 
- Có một điểm vào chương trình (entry point) là hàm main().
- Khi chạy hàm main() sẽ xuất ra một menu, hoặc một màn hình chính (main window).
- Chờ các tương tác của người dùng để xử lý, thực thi các xử lý logic, đọc dữ liệu, xuất kết quả.
- Sử dụng một trình dịch (trình thông dịch hoặc biên dịch) trên máy cục bộ để chuyển từ mã nguồn thành mã thực thi.
- Sử dụng các bộ thư viện cục bộ, truy cập cơ sở dữ liệu trên máy cục bộ.
#### 1.10.2 Ứng dụng kiểu client-server
Ứng dụng kiểu client-server (gọi tắt là ứng dụng client-server) là một ứng dụng, trong đó công việc được phân chia giữa hai thành phần chính là client và server.
- Client (máy khách): gửi yêu cầu (request) để truy cập dịch vụ hoặc tài nguyên. Client là giao diện người dùng (UI) trên máy tính, điện thoại, hoặc trình duyệt.
- Server (máy chủ): nhận yêu cầu, xử lý, và gửi phản hồi (response) về client. Server lưu trữ dữ liệu, thực hiện xử lý logic, và cung cấp dịch vụ.
- Giao tiếp giữa client và server được thực hiện qua mạng (thường dùng giao thức HTTP, TCP/IP). Client và server chạy trên các thiết bị khác nhau. Tuy nhiên, trong giai đoạn phát triển phần mềm, client và server có thể chạy trên cùng một máy tính.

**Đặc điểm của một ứng dụng client-server:**
- Phân vai trò: client tập trung hiển thị, server tập trung xử lý logic, xử lý dữ liệu.
- Kết nối mạng: yêu cầu giao tiếp qua giao thức mạng như HTTP, WebSocket, TCP/IP.
Một số ứng dụng client-server: ứng dụng web, ứng dụng email, trò chơi trực tuyến, hệ quản trị cơ sở dữ liệu.
#### 1.10.3 Ứng dụng web dưới góc nhìn của lập trình viên
Ứng dụng web dưới góc nhìn của lập trình viên:
- Là ứng dụng kiểu client-server. Client là trình duyệt web, server là web server.
- Giao diện của ứng dụng được hiển thị trên trình duyệt web.
- Hầu hết các xử lý logic, xử lý dữ liệu được thực hiện tại server.
- Để lập trình phía client (client-side) cần các ngôn ngữ HTML, CSS, JavaScript, các thư viện và framework. Lập trình phía client được gọi là lập trình front-end. Người làm mảng công việc này được gọi là lập trình viên front-end (front-end developer).
- Để lập trình phía server (server-side) cần một trong các ngôn ngữ lập trình phía back-end (C#, Java, Python, Ruby, PHP, Go, JavaScript), SQL, các thư viện, và framework. Lập trình
phía server được gọi là lập trình back-end. Người làm mảng này được gọi là lập trình viên back-end (back-end developer)
- Người làm được cả front-end và back-end được gọi là full-stack developer.
- Tùy theo khả năng, một lập trình viên có thể chọn làm ở mảng front-end, hoặc back-end hoặc cả hai (full-stack). Dù làm ở mảng front-end thì bạn cũng phải biết căn bản về mảng
back-end và ngược lại.
![image](md_assets/fullstack.jpg)

### 1.11 Lập trình client-server
#### 1.11.1 Gửi request tới web server
Phần này, chúng ta sẽ tìm hiểu chi tiết hơn về lập trình giao tiếp giữa client và server.

Như đã đề cập, các bước xử lý ở web server gồm 7 bước, như hình sau:
![image](md_assets/webserver.png)
[1] nhận request
[2] phân tích request, gửi tới ứng dụng web để xử lý
[3] đọc dữ liệu từ cơ sở dữ liệu
[4] đổ dữ liệu vào trang HTML (các template HTML)
[5] gửi trang HTML (đã bao gồm dữ liệu) (response) về trình duyệt người dùng
[6] trình duyệt người dùng hiển thị nội dung response
[7] trình duyệt gửi riêng một request khác để lấy các nội dung tĩnh của ứng dụng web (HTML, CSS, JavaScript, hình ảnh, và các tài nguyên khác)

Để đơn giản, chúng ta sẽ lập trình theo tình huống sau:
- Bước 1: web server luôn ở trạng thái đang hoạt động, sẵn sàng chờ client gửi yêu cầu (request) tới.
- Bước 2: một người dùng bất kỳ, sử dụng trình duyệt web, gửi request tới web server.
- Bước 3: web server nhận request
- Bước 4: web server phân tích, xử lý request
- Bước 5: web server gửi response về client
- Bước 6: client (trình duyệt) nhận response, hiển thị thông tin lên trình duyệt.

**Bước 1: web server luôn ở trạng thái đang hoạt động, sẵn sàng chờ client gửi yêu cầu (request) tới**
Mở tập tin index.js nhập đoạn mã sau:
```
'use strict'
const express = require('express')
const app = express();
const port = process.env.PORT || 9000
// khoi dong web server
app.listen(port, () => {
    console.log(`server dang chay tren cong ${port}`);
});
```
Dòng mã app.listen() luôn được đặt ở **cuối** tập tin index.js. Dòng mã này sẽ khởi chạy web server, mở cổng có số hiệu là port (ví dụ 9000) để chờ đón các request từ client; đồng thời xuất một dòng thông báo server dang chay tren cong ${port}. 

**Bước 2: một người dùng bất kỳ, sử dụng trình duyệt web, gửi request tới web server**
Khi web server đang chạy, và sẵn sàng nhận request. Chúng ta sẽ sử dụng trình duyệt để gửi các request về web server.

Để gửi request về web server, bạn có thể sử dụng thanh địa chỉ của trình duyệt, web form, hoặc dùng hàm JavaScript (AJAX, fetch). Để đơn giản, chúng ta sẽ sử dụng thanh địa chỉ của trình duyệt.

Mở trình duyệt web (tuy nhiên, bạn phải hiểu là mở trình duyệt trên máy tính của người dùng, vì đang trong giai đoạn phát triển phần mềm, nên máy web server và máy người dùng sẽ  chạy chung trên một máy), gõ vào thanh địa chỉ URL sau: ```http://localhost:9000/```

Bấm Enter, bạn sẽ nhận được thông báo trên trình duyệt là:

```Cannot GET /```

Lý do có thông báo trên: client gửi request về web server, tuy nhiên, server mới chỉ mở cổng (9000) để lắng nghe request, nhận request, nhưng chưa có xử lý request và gửi trả lời (response) cho client. Nó giống như kiot đã mở bán, nhưng bên trong chưa có sản phẩm, chưa có người bán (kiot trống).

Xem phần 4.5 để hiểu hơn về URL

Như vậy, URL http://localhost:9000/
- Client sử dụng giao thức http để gửi request tới web server
- Web server có địa chỉ là localhost
- Gửi request vào cổng 9000 của web server
- Gửi request
  
Ngoài việc dùng thanh địa chỉ của trình duyệt để gửi request, chúng ta còn có 2 cách khác để gửi request là web form và hàm JavaScript (AJAX, fetch). Chúng ta sẽ tìm hiểu về web form, AJAX, fetch ở các phần sau.
#### 1.11.2 Gửi response về client
**Bước 3: web server nhận request, Bước [4] phân tích, xử lý request, Bước [5] gửi kết quả (response) về cho client**

Tại web server, chúng ta sử dụng phương thức GET của Express để nhận và xử lý các HTTP request kiểu GET (request gửi bằng giao thức HTTP) do client gửi tới.

Cú pháp ```app.get(path, callback)```
Trong đó:
- path: luồng dùng để xử lý các request kiểu GET (GET request). 
- callback: hàm sẽ được thực thi khi có GET request đến luồng tương ứng. Hàm này thường có dạng (req, res) => { ... }, trong đó: 
  + req (request): đối tượng chứa thông tin request từ client.
  + res (response): đối tượng dùng để gửi response về client.

Chúng ta sẽ viết đoạn mã xử lý như sau:

[index.js]

```
'use strict'
const express = require('express')
const app = express();
const port = process.env.PORT || 9000
//xử lý khi người dùng gửi
//request kiểu GET tới thư mục gốc (/)
app.get("/", (req,res) =>
{
    //dùng phương thức query của req để lấy thông tin
    //của GET request
    const product = req.query.name;
    const size = req.query.size;
    //dùng hàm send() của đối tượng res
    //để gửi dữ liệu về client
    res.send(`Bạn muốn mua ${product} cỡ ${size}`);
});
//khoi dong web server
app.listen(port,() => {
    console.log(`server dang chay tren cong ${port}`);
});
Lưu lại mã nguồn, khởi động lại web server (nếu dùng Nodemon thì không cần).
```
Ví dụ nằm trong file ```lap_trinh_client_server```
**Bước 6: client (trình duyệt) nhận response, hiển thị thông tin lên trình duyệt**
Bây giờ trên trình duyệt sẽ xuất hiện dòng chữ: ```Bạn muốn mua shoes cỡ 40```
### 1.12 Lập trình hướng sự kiện
Lập trình hướng sự kiện (event-driven) là một mô hình lập trình mà luồng thực thi của chương trình được quyết định bởi các sự kiện (events). Các sự kiện này có thể là:
- Hành động của người dùng (nhấp chuột, gõ phím).
- Các thông điệp từ các chương trình khác.
- Các sự kiện do hệ thống tạo ra (nhận được request, thao tác đọc/ghi tập tin).
Thay vì chạy theo thứ tự mã nguồn từ trên xuống dưới, chương trình sẽ chờ đợi các sự kiện xảy ra và thực thi các hàm xử lý sự kiện (event handler) tương ứng.

#### 1.12.1 Lập trình hướng sự kiện trong Nodejs
Nodejs là một môi trường được xây dựng dựa trên mô hình lập trình hướng sự kiện. Đây là một trong những đặc điểm cốt lõi giúp Node.js hoạt động hiệu quả và có khả năng xử lý nhiều kết nối đồng thời, đặc biệt phù hợp với các ứng dụng thời gian thực, các ứng dụng chuyên về I/O như ứng dụng web, API, hoặc ứng dụng mạng.

Ứng dụng chuyên về I/O (I/O-intensive application) là các ứng dụng mà phần lớn thời gian xử lý hoặc tài nguyên được dành cho các hoạt động nhập/xuất (Input/Output), tức là các tác vụ liên quan đến việc đọc/ghi dữ liệu từ hoặc đến các nguồn bên ngoài như tập tin, cơ sở dữ liệu, mạng, hoặc thiết bị phần cứng, thay vì tập trung nhiều vào tính toán (CPU-intensive)

**Các thành phần của Mô hình lập trình hướng sự kiện**
Mô hình lập trình hướng sự kiện trong Nodejs gồm các thành phần:
- Event: sự kiện
- Event Emitter: bộ quản lý sự kiện
- Event loop: vòng lặp sự kiện
- Event handler: hàm xử lý sự kiện
Xem hình minh họa:
![image](md_assets/event-driven.jpg)

Mô tả cách hoạt động của mô hình:

[1] EventEmitter

Trong hệ thống sẽ có một thành phần điều khiển, nó quản lý việc phát ra sự kiện của các đối tượng và gửi sự kiện tới nơi cần nghe (các đối tượng đang lắng nghe sự kiện tương ứng). Thành phần này được gọi là EventEmitter - Bộ quản lý sự kiện). 

Các phương thức chính của EventEmitter:
- on(eventName, listener): khai báo một tên sự kiện (eventName) sẽ phát ra, và đăng ký một hàm lắng nghe và xử lý đi kèm.
- emit(eventName, [arguments...]): phát ra một sự kiện, có tên là eventName, và các tham số đi kèm (nếu có).

[2] Event

Event là một hành động hoặc sự thay đổi trạng thái xảy ra trong ứng dụng, gọi chung là sự kiện (Event). Ví dụ:
- Yêu cầu HTTP đến máy chủ (GET request, POST request).
- Hoàn thành việc đọc/ghi tập tin.
- Hết thời gian chờ (timeout).
- Sự kiện lỗi.

[3] Event Loop (Vòng lặp sự kiện)
- Event Loop là cơ chế cốt lõi của Nodejs, cho phép nó xử lý các sự kiện không đồng bộ một cách hiệu quả.
- Event Loop liên tục kiểm tra hàng đợi sự kiện (event queue) và thực thi các hàm callback khi có sự kiện xảy ra.
- Điều này cho phép Nodejs xử lý nhiều yêu cầu đồng thời mà không bị chặn (blocking).

[4] Event Handler (Hàm xử lý sự kiện)
- Event handler là một hàm được gọi khi một sự kiện xảy ra. 
- Event handler thường được đăng ký với một EventEmitter bằng phương thức on().
#### 1.12.2 Thực hành lập trình hướng sự kiện
Chúng ta sẽ viết một chương trình đơn giản như sau:
- Sử dụng module events của Nodejs để lập trình hướng sự kiện
- Tạo một bộ quản lý sự kiện (EventEmitter)
- Sử dụng EventEmitter để khai báo một sự kiện, và đăng ký hàm xử lý đi kèm
- Phát sinh sự kiện (đã khai báo), để kiểm tra hoạt động của các thành phần
  
**[1] Viết theo kiểu hàm thông thường**

[index.js]
```
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
eventEmitter.on('hetGio', xuLyThongBao);
// định nghĩa hàm xuLyThongBao
function xuLyThongBao(tb) {
    console.log(tb);
}
// phát ra sự kiện, kèm theo thông điệp
setTimeout(()=> {
    eventEmitter.emit('hetGio','Hết giờ học rồi, về thôi!!!!!!!')
}, 2000);
// khoi dong web server
app.listen(port, () => {
    console.log(`server dang chay tren cong ${port}`);
});
```
**[2] Viết theo kiểu hàm mũi tên**

[index.js]
```
'use strict'
const express = require('express')
const app = express();
const port = process.env.PORT || 9000

// gọi module events
const events = require('events');

// tạo ra một EventEmitter
const eventEmitter = new events.EventEmitter();

// đăng ký tên sự kiện, gắn với hàm lắng nghe và
// xử lý sự kiện tương ứng
eventEmitter.on('hetGio', (thongBao) => {
    console.log(thongBao);
});

// phát ra sự kiện, kèm theo thông điệp
setTimeout(()=> {
    eventEmitter.emit('hetGio','Hết giờ học rồi, về thôi!!!!!!!')
}, 2000);

// khoi dong web server
app.listen(port, () => {
    console.log(`server dang chay tren cong ${port}`);
});
```
### 1.13 Event-driven, Route handler và Middleware trong Express
#### 1.13.1 Lập trình hướng sự kiện trong Express
Express là một framework, xây dựng trên nền tảng Nodejs. Express sử dụng mô hình lập trình hướng sự kiện để xử lý các HTTP request, đọc/ghi tập tin, làm việc với cơ sở dữ liệu, websocket, stream.

Trong mô hình này:
- Mỗi request từ client (như GET, POST, PUT, DELETE) được xem là một sự kiện (Event).
- Các module http, fs, stream là các Bộ quản lý sự kiện (Event Emitter) của Express.
- Express sử dụng Vòng lặp sự kiện (Event Loop) của Node.js để lắng nghe và xử lý các sự kiện theo kiểu bất đồng bộ (asynchronous), không chặn luồng (non-blocking).
- Các route handler và middleware đóng vai trò như các Hàm xử lý sự kiện (Event Handler), được gọi khi sự kiện tương ứng xảy ra.

#### 1.13.2 Thực hành với GET request
Để hiểu rõ hơn về lập trình hướng sự kiện trong Express, chúng ta cùng thực hành với GET request.

Tình huống cụ thể như sau:
- Client gửi GET request tới web server
- Web server phát hiện sự kiện GET request và chuyển nó đến Express.
- Express kiểm tra URL và method (GET) để tìm route handler phù hợp.
- Hàm callback (route handler) được gọi để xử lý sự kiện, trả về response cho client.

[index.js]
```
'use strict'
const express = require('express')
const app = express();
const port = process.env.PORT || 9000
// Express lắng nghe sự kiện GET request, tại route /
// nếu có sự kiện, gọi hàm callback (route handler) tương ứng
app.get('/', (req, res) =>
{
    const name = req.query.name;
    res.send(`Web server chào bạn ${name}`);
});
// khoi dong web server
app.listen(port, () => {
    console.log(`server dang chay tren cong ${port}`);
});
```
**Sử dụng Middleware cho GET request**
```
'use strict'
const express = require('express')
const app = express();
const port = process.env.PORT || 9000
// Middleware: ghi log mỗi khi có GET request
app.use((req, res, next) =>
{
    console.log(`[${new Date().toISOString()}] nhận GET request tại ${req.url}`)
    // Chuyển tiếp sự kiện đến route handler
    next();
});
// Express lắng nghe sự kiện GET request, tại route /
// nếu có sự kiện, gọi hàm callback (route handler) tương ứng
app.get('/', (req, res) =>
{
    const name = req.query.name;
    res.send(`Web server chào bạn ${name}`);
});
// khoi dong web server
app.listen(port, () => {
    console.log(`server dang chay tren cong ${port}`);
});
```
#### 1.13.3 Route handler và Middleware trong Express
**Route handler**
Route handler là các hàm xử lý được gắn với một luồng (route) cụ thể trong ứng dụng Express. Chúng được gọi khi một HTTP request (như GET, POST, PUT, DELETE) từ client khớp với route và method tương ứng. Route handler đóng vai trò như Event handler trong lập trình hướng sự kiện, xử lý logic chính cho request và trả về response.

**Route handler nhận 3 tham số chính:**
- req (request): đối tượng chứa thông tin về request từ client (URL, headers, body).
- res (response): đối tượng dùng để gửi response về client.
- next (optional): hàm gọi để chuyển tiếp request sang middleware hoặc handler tiếp theo (nếu có).

Cú pháp: ```app.METHOD(path, callback);```
- Trong đó METHOD là HTTP method (get, post, put, delete), path là luồng, và callback là Route handler.

Ví dụ:
```
// Express lắng nghe sự kiện GET request, tại route /
// nếu có sự kiện, gọi hàm callback (route handler) tương ứng
app.get('/', (req, res) =>
{
    const name = req.query.name;
    res.send(`Web server chào bạn ${name}`);
});
```

**Đặc điểm của Route handler:**
- Cụ thể cho route và method: mỗi Route handler chỉ được gọi khi request khớp (match) với route và HTTP method đã định nghĩa.
- Xử lý logic chính: thường chứa logic nghiệp vụ như truy vấn cơ sở dữ liệu, xử lý dữ liệu, hoặc trả về kết quả.
- Có thể nối tiếp: nhiều Route handler có thể được gắn vào cùng một route bằng cách truyền nhiều callback hoặc dùng next().

Ví dụ nối tiếp Route handler:
[index.js]
```
'use strict'
const express = require('express')
const app = express();
const port = process.env.PORT || 9000
// Nối tiếp Route handler
app.get('/profile', (req, res, next) =>
{
      console.log('Kiểm tra quyền truy cập...');
      req.user = { name: "Tai"}; // Giả lập thêm dữ liệu
      next(); // Chuyển tiếp
    },
    (req, res) => { 
res.send(`Chào bạn: ${req.user.name}`);
    }
  );
// khoi dong web server
app.listen(port, () => {
    console.log(`server dang chay tren cong ${port}`);
});
```

**Middleware** là các hàm được thực thi trong quá trình xử lý một HTTP request, trước hoặc sau Route handler. Chúng có thể:
- Xử lý request (như xác thực, ghi log).
- Sửa đổi đối tượng req hoặc res.
- Chuyển tiếp request bằng next() hoặc dừng luồng xử lý bằng cách gửi response.

Middleware hoạt động như một "lớp trung gian" trong pipeline (dây chuyền, đường ống) xử lý request, giúp tách biệt logic chung khỏi Route handler.

Cấu trúc cơ bản
- Middleware cũng nhận 3 tham số: req, res, và next.
- Được đăng ký bằng app.use() (áp dụng cho tất cả route) hoặc gắn vào route cụ thể.

Cú pháp: ```app.use(middlewareFunction);```
Ví dụ: 
```
// Middleware: ghi log mỗi khi có GET request
app.use((req, res, next) =>
{
    console.log(`[${new Date().toISOString()}] nhận GET request tại ${req.url}`)
    // Chuyển tiếp sự kiện đến route handler
    next();
});
```
Minh họa:
![image](md_assets/middleware.jpg)

**Các loại Middleware**
[1] Application-level middleware: áp dụng cho toàn bộ ứng dụng với app.use()
```
// middleware mức ứng dụng
app.use((req, res, next) =>
{
    req.timestamp = new Date();
    next();
});
app.get('/',(req, res) => {
    res.send(`Khach truy cap web ap luc ${req.timestamp.toISOString()}`);
});
```
[2] Router-level middleware: áp dụng cho một nhóm route cụ thể bằng express.Router()

[3] Error-handling middleware: xử lý lỗi, nhận thêm tham số err.

[4] Built-in middleware: các middleware do Express cung cấp sẵn như express.json(), express.static().

[5] Third-party middleware: middleware của các nhà cung cấp khác, ví dụ body-parser, cors, morgan.
### 1.14 Lập trình trang web động
#### 1.14.1 Trang web động
Trang web tĩnh là trang web có nội dung cố định, không thay đổi trừ khi bạn chỉnh sửa mã nguồn (HTML/CSS). Ví dụ trang giới thiệu công ty đơn giản.

Trang web động là trang web mà nội dung hoặc giao diện có thể thay đổi dựa trên dữ liệu, hành động của người dùng, hoặc các yếu tố khác, thay vì chỉ hiển thị nội dung tĩnh cố định. Một trang web động có thể:
- Hiển thị dữ liệu khác nhau cho từng người dùng (ví dụ: tên người dùng, danh sách sản phẩm).
- Cập nhật giao diện mà không cần tải lại toàn bộ trang (ví dụ: thêm sản phẩm vào giỏ hàng).
- Tương tác với người dùng theo thời gian thực (ví dụ: chat, thông báo).

Dữ liệu có thể do người dùng cung cấp, có thể lấy từ server, hoặc lấy từ các hệ thống khác. Khi đã có dữ liệu, chúng ta sẽ kết hợp dữ liệu với HTML/CSS để tạo ra giao diện. Để tiện trình bày, chúng ta sẽ gọi giao diện động là giao diện.

**Các công cụ, kỹ thuật tạo trang web động**

Có 3 cách để tạo ra giao diện cho trang web:
- [1] Tạo giao diện tại phía server
- [2] Tạo giao diện tại phía client
- [3] Tạo giao diện hỗn hợp, gồm cả ở phía server và phía client

#### 1.14.2 Tạo giao diện phía server
Tạo giao diện tại phía server (server-side rendering - SSR) là kỹ thuật tạo ra nội dung trang web (rendering) bằng cách xử lý logic và tạo ra mã HTML hoàn chỉnh trên máy chủ (server side) trước khi gửi về cho trình duyệt (client).

![image](md_assets/SSR1.png)

**Ưu điểm của SSR:**
- Tối ưu hóa SEO (search engine optimization): các công cụ tìm kiếm có thể thu thập dữ liệu và lập chỉ mục nội dung trang web dễ dàng hơn vì nội dung đã có đầy đủ trong mã HTML.
- Tăng tốc độ tải trang ban đầu: người dùng có thể nhìn thấy nội dung trang web nhanh hơn, đặc biệt là trên các thiết bị di động hoặc kết nối mạng chậm.
- Hỗ trợ tốt cho các thiết bị có cấu hình phần cứng yếu: các thiết bị sẽ không phải thực thi quá nhiều Javascript, giảm tải cho thiết bị.
**Nhược điểm của SSR:**
- Tăng tải cho máy chủ: máy chủ phải xử lý nhiều yêu cầu hơn để tạo ra mã HTML cho mỗi trang, dẫn đến tăng tải và yêu cầu tài nguyên máy chủ cao hơn.
- Phức tạp hơn trong việc phát triển: yêu cầu lập trình viên phải có kiến thức về cả phía máy chủ (backend) và phía trình duyệt (frontend).
- Khả năng tương tác hạn chế: các tương tác “động” trên trang web có thể bị chậm, vì mỗi tương tác sẽ cần phải gửi một request đến máy chủ.

**Các công cụ sử dụng SSR:**
- Next.js (React)
- Nuxt.js (Vue.js)
- Angular Universal (Angular)
- Server-side template engines
- Nestjs
#### 1.14.3 Tạo giao diện tại phía client
Tạo giao diện tại phía client (client-side rendering - CSR) là kỹ thuật tạo ra nội dung trang web bằng cách xử lý và tạo ra mã HTML hoàn chỉnh trên trình duyệt (client) bằng Javascript. Khi người dùng truy cập một ứng dụng web sử dụng CSR, máy chủ chỉ gửi về một tập tin HTML rỗng và một tập tin Javascript. Trình duyệt sẽ nhận tập tin Javascript và thực thi mã JavaScript để tạo ra nội dung trang web.

**Ưu điểm của CSR:**
- Tăng tốc độ hiển thị “các trang sau”: sau khi trang web được tải lần đầu tiên, các trang tiếp theo sẽ được hiển thị nhanh hơn vì trình duyệt chỉ cần tải dữ liệu từ máy chủ mà không cần tải lại toàn bộ
mã HTML.
- Tương tác người dùng tốt hơn: CSR cho phép tạo ra các trang web tương tác cao, với các hiệu ứng động và cập nhật nội dung mà không cần tải lại trang.
- Giảm tải cho máy chủ: máy chủ chỉ cần gửi về tập tin HTML rỗng và tập tin Javascript, giúp giảm tải cho máy chủ.

**Nhược điểm của CSR:**
- SEO không tốt: các công cụ tìm kiếm có thể gặp khó khăn trong việc thu thập dữ liệu và lập chỉ mục nội dung trang web vì nội dung được tạo ra bằng Javascript.
- Tốc độ tải trang ban đầu chậm: người dùng phải chờ trình duyệt tải và thực thi tập tin Javascript trước khi nhìn thấy nội dung trang web.
- Yêu cầu thiết bị người dùng phải mạnh: CSR yêu cầu trình duyệt của người dùng phải có khả năng xử lý Javascript tốt.

**Các công cụ sử dụng CSR:**
- React
- Angular
- Vue
![image](md_assets/CSR1.png)

#### 1.14.4 Tạo giao diện hỗn hợp, gồm cả ở phía server và phía client
Tạo giao diện hỗn hợp là phương pháp tạo giao diện bằng cách kết hợp SSR và CSR. Mục tiêu là tận dụng ưu điểm của cả hai kỹ thuật để tạo ra các trang web có hiệu suất cao, tối ưu hóa SEO và trải nghiệm người dùng tốt.

Cách thức sử dụng:
- Tạo trang web ban đầu trên máy chủ (SSR), khi người dùng truy cập lần đầu tiên. Mã HTML hoàn chỉnh được gửi về cho trình duyệt, giúp hiển thị nội dung nhanh chóng và tối ưu hóa SEO.
- Sau khi trang web được tải, các tương tác của người dùng sẽ được xử lý bằng JavaScript trên trình duyệt (CSR). Điều này cho phép tạo ra các trang web tương tác cao, với các hiệu ứng động và cập nhật nội dung mà không cần tải lại trang.

### 1.15 Express-handlebars
#### 1.15.1 Server-side template engine
Server-side template engine là công cụ phần mềm được sử dụng trên server để tạo ra giao diện web (HTML động) bằng cách kết hợp dữ liệu (data) với các mẫu giao diện (templates). Với các thành phần và cách hoạt động như sau:
- Mẫu giao diện (template): một tập tin chứa mã HTML, kết hợp với cú pháp đặc biệt (placeholder, vòng lặp, điều kiện) để chèn dữ liệu.
- Dữ liệu: được cung cấp từ server (từ cơ sở dữ liệu, API, hoặc xử lý logic tại backend).
- Kết xuất (rendering): template engine xử lý các template, thay thế các placeholder bằng dữ liệu thực tế, tạo ra HTML hoàn chỉnh.
- Trả về client: server gửi HTML hoàn chỉnh về trình duyệt để hiển thị.

**Một ví dụ đơn giản khi sử dụng template:**
- Template: ```<h1>Hello {{name}}</h1>```
- Dữ liệu: ```{ name: "Ngô Bá Tài" }```
- Kết quả HTML hoàn chỉnh: ```<h1>Hello Ngô Bá Tài</h1>```

**Ưu điểm khi sử dụng template engine:**
- Tạo giao diện động: hiển thị nội dung thay đổi dựa trên dữ liệu (danh sách sản phẩm, thông tin người dùng).
- Tách biệt logic xử lý và giao diện: backend xử lý dữ liệu, template engine xử lý hiển thị.
- Hỗ trợ SEO: với HTML hoàn chỉnh sẽ tốt cho công cụ tìm kiếm.
- Dễ sử dụng
- Tải nhanh lần đầu
**Nhược điểm**
- Không phù hợp với ứng dụng nặng về tương tác (SPA), vì cần tải lại trang khi thay đổi nội dung.
#### 1.15.2 Express-handlebars
Express-handlebars là một server-side template engine được tích hợp vào framework Express để tạo ra “HTML động” từ phía server. Express-handlebars dựa trên cú pháp Mustache, cho phép bạn tạo các template với các placeholder ```({{variable}})``` và các cấu trúc điều khiển như vòng lặp ```({{#each}})``` hoặc điều kiện ```({{#if}}).```

**Thực hiện cài đặt**
E:\TeoShop>pnpm i -s express-handlebars
- Lệnh trên sẽ tải express-handlebars từ npm registry về máy và cài đặt
- Nếu không có thông báo lỗi, nghĩa là việc cài đặt đã thành công
- Mở tập tin package.json trong dự án, mục dependencies sẽ thấy có thông tin của
![image](md_assets/Handlebar.png)
#### 1.15.3 Sử dụng Express-handlebars trong Express
**Khai báo để sử dụng gói express-handlebars**
```const expressHandlebars = require(expressHandlebars);```

**Tổ chức thư mục, tập tin**
```
express_handlebars/
├── views/
│   ├── layouts/ 
│   │   └── main.hbs 
│   ├── partials/
│   │   ├── header.hbs
│   │   └── footer.hbs
│   ├── index.hbs
│   └── cart.hbs
└── index.js
```
- Thư mục views: là thư mục chứa tất cả các template của ứng dụng. Express sẽ tìm kiếm các template trong thư mục này khi bạn gọi phương thức res.render().

- Thư mục layouts: chứa các layout chính (main layout - main.hbs) của ứng dụng. Main layout là một template HTML chung, là bộ khung thống nhất cho các giao diện có bố cục tương tự nhau. Ví dụ: main.hbs có thể chứa cấu trúc HTML cơ bản, header, footer. Việc sử dụng layout giúp bạn tránh việc lặp lại mã HTML trên nhiều trang.

- Thư mục partials: chứa các template con. Partial nghĩa là các thành phần con. Partials là các đoạn mã HTML có thể tái sử dụng, được nhúng vào các “view” hoặc “layout”. Ví dụ: bạn có thể tạo một partial cho header, footer, hoặc một form đăng nhập. Việc sử dụng partials giúp bạn chia nhỏ giao diện thành các thành phần nhỏ hơn, dễ quản lý hơn.

Việc tổ chức thư mục, tập tin như trên có một số ưu điểm là:
- Tách biệt logic xử lý và giao diện: giúp dễ đọc mã nguồn, dễ bảo trì và dễ mở rộng.
- Tái sử dụng mã: tránh lặp lại mã HTML, giảm thiểu lỗi và tăng tốc độ phát triển.
- Quản lý giao diện dễ dàng: cho phép bạn thay đổi giao diện một cách nhất quán trên toàn bộ ứng dụng.

![image](md_assets/Handlebar.png)

**Cấu hình để sử dụng express-handlebars trong mã nguồn**
Trong tập tin index.js, thêm đoạn mã sau:
```
const port = process.env.PORT || 9000
const expressHandlebars = require('express-handlebars');
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
```
Ví dụ trong ```express_handlebars```

**Tạo các tập tin template, gồm mã HTML và cú pháp của express-handlebars**

Trong thư mục views/layouts chúng ta sẽ tạo main.hbs bao gồm mã nguồn của header và footer.

Cách làm:
- Trong trình duyệt, bạn mở trang http://localhost:9000/index.html
- Dùng chế độ inspect để phân tích giao diện, để biết đoạn mã nguồn nào là của phần header, của “nội dung trang con” và của footer.
- Chép toàn bộ mã nguồn của trang public\index.html vào tập tin main.hbs
- Trong main.hbs, giữ lại mã nguồn phần header và footer, cắt đi mã nguồn phần chính giữa (“nội dung trang con”) đưa vào tập tin index.hbs (bạn tạo tập tin index.hbs trong views, nếu bạn chưa tạo)
### 1.16 Tạo giao diện các trang con
Chúng ta sẽ tạo giao diện cho các trang con theo các bước sau:
- Bước 1: Di chuyển toàn bộ các trang từ thư mục public sang thư mục views.
- Bước 2: Đổi đuôi tập tin của các trang con từ .html sang .hbs
- Bước 3: Vào mỗi tập tin xóa đi mã nguồn từ đầu đến hết phần header, và từ phần footer đến hết tập tin (giống như bạn đã làm cho tập tin index.hbs). Xem hình minh họa về cấu trúc các tập tin trong views.
- Bước 4: Vào tập tin main.hbs, sửa lại URL của các liên kết thành giá trị mới sau: ```[giá trị cũ > giá trị mới]```
VD: index.html thành /index
- Bước 5: Vào tập tin index.js, thêm đoạn mã xử lý để hiển thị các trang con.
```
app.get('/:page', (req, res) =>{
    res.render(req.params.page);
});
```
- Bước 6: Lưu lại các tập tin mã nguồn, khởi động lại server, vào trình duyệt, mở lại web app, bấm vào các mục của menu sẽ thấy giao diện đã hoạt động tốt.
#### 1.15.3 Sử dụng partial
Partial là các thành phần con, là các đoạn mã HTML có thể tái sử dụng, được nhúng vào các “view” hoặc “layout”. Việc sử dụng partial giúp bạn chia nhỏ giao diện thành các thành phần nhỏ hơn, dễ quản lý hơn.
## Chương 2: Git thực hành
### 2.1 Hệ thống quản lý phiên bản
* **Phiên bản(version):** là các bản khác nhau của tập tin, thư mục hoặc toàn bộ mã nguồn dự án (từ đây gọi chung là dự án để tiện trình bày)
* **Hệ thống quản lý phiên bản (Version Control System - VCS):** một phần mềm giúp chúng ta lưu lại từng thay đổi của mã nguồn dự án, và giúp lấy lại được các phiên bản trước đó nếu 
  cần.
  * Các chức năng chính:
    - Khôi phục lại trạng thái của dự án ở các thời điểm khác nhau trong quá khứ
    - Biết được ai đã thực hiện các thay đổi trên dự án, và đã thay đổi những gì
    - Dễ dàng khôi phục lại các nội dung mã nguồn bị xóa 
    - Dễ dàng so sánh những thay đổi của dự án theo các mốc thời gian
  * Phân loại:
    - Hệ thống quản lý phiên bản cục bộ
    - Hệ thống quản lý phiên bản tập trung
    - Hệ thống quản lý phiên bản phân tán
#### 2.1.1 Hệ thống quản lý phiên bản cục bộ
phương pháp tự lưu trữ các phiên bản của thư mục dự án ở các thời điểm khác nhau trong quá trình làm việc thành các tên khác nhau. 

![image](md_assets/CucBo.png)

* Ưu điểm:
  * Hiệu suất nhanh
  * Tự kiểm soát dữ liệu
  * Dễ quản lý
  * Làm việc offline
* Nhược điểm:
  * Không hỗ trợ làm việc nhóm
  * Không có backup tự động
  * Khó kiểm soát khi số lượng phiên bản lớn
#### 2.1.2 Hệ thống quản lý phiên bản tập trung
Gồm máy chủ chứa các phiên bản của thư mục dự án và danh sách các máy khách được phép thay đổi thư mục dự án trên máy chủ. Các máy khách sẽ lấy các phiên bản của thư mục dự án từ máy chủ về, thực hiện các thay đổi trên thư mục dự án và cập nhật lại các thay đổi về máy chủ

![image](md_assets/TapTrung.png)

* Ưu điểm:
  * Dễ quản lý tập trung
  * Hỗ trợ làm việc nhóm
  * Phân quyền dễ dàng
  * Nhật ký thay đổi rõ ràng
  * Dung lượng máy client nhẹ
* Nhược điểm:
  * Phụ thuộc lớn vào server
  * Phụ thuộc vào mạng
  * Không làm việc offline
#### 2.1.3 Hệ thống quản lý phiên bản phân tán
Các máy client không chỉ lấy thư mục mới nhất như **hệ thống quản lý phiên bản tập trung** mà nó còn chép toàn bộ cả kho chứa (repository, repo), trong đó bao gồm cả lịch sử các phiên bản

![image](md_assets/PhanTan.png)

* Ưu điểm:
  * Mỗi client đều có bản sao đầy đủ
  * Làm việc offline dễ dàng
  * Bảo mật và an toàn cao
  * Quản lý nhánh mạnh mẽ
  * Hiệu suất cao khi làm việc nhóm
* Nhược điểm:
  * Tốn dung lượng máy client
  * Cần cấu hình remote hợp lý
  * phụ thuộc vào tool khi merge
### 2.2 Tổng quan về git
#### 2.2.1 Git là gì?
Git là một hệ thống quản lý phiên bản phân tán (distributed version control system) được sử dụng rộng rãi trong phát triển phần mềm. Nó cho phép các nhóm lập trình viên theo dõi và quản lý các thay đổi trong mã nguồn của một dự án một cách hiệu quả

Một số tính năng của Git:
- Theo dõi lịch sử thay đổi: Git lưu lại từng thay đổi nhỏ nhất của mã nguồn, giúp bạn dễ dàng quay lại các phiên bản trước đó nếu cần

- Cộng tác hiệu quả: Git cho phép nhiều người cùng làm việc trên một dự án cùng lúc, đồng thời hợp nhất các thay đổi một cách dễ dàng

- Phân nhánh và hợp nhất: Git hỗ trợ tạo nhiều nhánh (branch) làm việc độc lập, giúp bạn thử nghiệm các tính năng mới mà không ảnh hưởng đến phần còn lại của dự án

- Bảo mật: Git lưu trữ các thay đổi dưới dạng các bản ghi (commit) không thể thay đổi, đảm bảo tính toàn vẹn của mã nguồn

- Phân tán: mỗi bản sao của một kho lưu trữ Git đều là một kho lưu trữ đầy đủ, cho phép bạn làm việc không cần kết nối mạng và đồng bộ hóa sau đó (khi có kết nối mạng)
#### 2.2.2 Nhúng Git vào dự án
Mặc dù Git đã được tích hợp vào các phần mềm lập trình (ví dụ Visual Studio, Eclipse, VS code). Tuy nhiên, cách học Git hiệu quả nhất vẫn là sử dụng giao diện dòng lệnh. Giao diện dòng lệnh chứa đầy đủ nhất các lệnh của Git, khi đã hiểu được bản chất các lệnh rồi thì chuyển sang sử dụng các giao diện khác rất đơn giản.

Các bước nhúng Git vào dự án:
* B1: Di chuyển vào thư mục dự án bằng lệnh cd trong CLI
* B2: Gõ lệnh git init (Nếu thành công thì sẽ hiện thông báo "initialized empty Git repository in [Path của ban]")
* B3: Quan sát sự thay đổi của thư mục dự án (Có thêm thư mục .git - Đây chính là kho chứa (kho lưu trữ) mà phần mềm Git thêm tạo ra trong thư mục dự án để sử dụng cho các tác vụ của nó)
![image](md_assets/GitInit.png)
### 2.4 Cấu hình định danh người dùng
#### 2.4.1 Định danh người dùng
Trong quá trình phát triển phần mềm, đặc biệt là khi làm việc nhóm, việc theo dõi và quản lý các thay đổi là vô cùng quan trọng.

Để đảm bảo tính minh bạch và trách nhiệm, Git yêu cầu mỗi commit (bản ghi thay đổi) đều phải gắn liền với thông tin người thực hiện. Điều này cho phép chúng ta:
- Xác định tác giả: dễ dàng biết được ai là người viết hoặc chỉnh sửa một đoạn mã cụ thể.
- Theo dõi đóng góp: nắm bắt được lịch sử đóng góp của từng thành viên trong dự án. 
- Phân công trách nhiệm: quy trách nhiệm cho từng thành viên đối với những thay đổi mà họ thực hiện.
Để thực hiện điều này, chúng ta cần tiến hành cấu hình định danh người dùng cho Git. Quá trình này sẽ thiết lập thông tin cá nhân, bao gồm tên và địa chỉ email, được sử dụng để gắn vào các commit. Nhờ đó, mỗi thay đổi trong dự án sẽ được gắn với một cá nhân cụ thể, tạo nên một lịch sử làm việc rõ ràng và dễ theo dõi.

Bạn sẽ không thể thực hiện commit nếu chưa thiết lập thông tin cá nhân trong hệ thống Git.

**Cấu hình thông tin cá nhân với lệnh git config:**

Lệnh ```git config```được sử dụng để đọc, ghi hoặc cập nhật các thiết lập cấu hình của Git. Git cho phép bạn cấu hình ở ba phạm vi khác nhau: system, global và local, mỗi phạm vi có mức độ ảnh hưởng và ưu tiên riêng.

* system (phạm vi hệ thống):
  * Phạm vi này áp dụng cho tất cả người dùng và tất cả kho lưu trữ trên hệ thống
  * Tập tin cấu hình được lưu tại C:\Program Files\Git\etc (trên Windows).
  * Cần quyền quản trị hệ thống để thực hiện cấu hình ở mức này.
  * Để cấu hình, sử dụng tham số --system với lệnh git config.
Ví dụ: git config --system user.name "NH1Tkendo"
* global (phạm vi người dùng):
  * Phạm vi này áp dụng cho tài khoản người dùng hiện tại và cho tất cả kho lưu trữ mà người dùng đó làm việc.
  * Tập tin cấu hình được lưu tại C:\Users\<tên_người_dùng>\.gitconfig (trên Windows).
  * Đây là phạm vi cấu hình được sử dụng nhiều nhất.
  * Để cấu hình, sử dụng tham số --global với lệnh git config.
Ví dụ:  git config --global user.name "NH1Tkendo"
- local (phạm vi kho lưu trữ, repo)
  * Phạm vi này áp dụng cho một kho lưu trữ cụ thể.
  * Tập tin cấu hình được lưu tại .git/config trong thư mục gốc của kho lưu trữ
  * Để cấu hình, sử dụng lệnh git config mà không có tham số --system hoặc --global. Tất nhiên, bạn phải di chuyển dấu nhắc chuột vào thư mục gốc của kho lưu trữ, để gõ lệnh.
Ví dụ: git config user.name "NH1Tkendo"

**Xem thông tin cấu hình**

Để xem thông tin cấu hình, sử dụng lệnh: ```git config --list```

Tùy thuộc vào vị trí dấu nhắc chuột bạn sẽ xem được thông tin cấu hinh ở các phạm vi khác nhau (system, global hay local).

Khi xem thông tin cấu hình trong CMD, nếu thông tin cấu hình nhiều hơn một màn hình, bạn sẽ thấy dấu nhắc (:), bấm enter để xem thêm thông tin. Khi hết thông tin sẽ có chữ (END). Để thoát màn hình, bấm dấu hai chấm (:) kèm theo chữ q.

**Độ ưu tiên của cấu hình**

Khi có cấu hình ở cả ba phạm vi, Git sẽ sử dụng cấu hình có độ ưu tiên cao nhất. 

Thứ tự ưu tiên là: local > global > system. Nghĩa là cấu hình ở local có độ ưu tiên cao nhất, sau đó đến global và cuối cùng là system. Điều này cho phép bạn ghi đè các cấu hình chung bằng các cấu hình cụ thể cho từng dự án.

**Kinh nghiệm thực tế**
- Trước khi thực hiện bất kỳ commit nào, bạn cần kiểm tra cấu hình tên và địa chỉ email của mình. Git sẽ sử dụng thông tin này để gắn với mỗi commit, giúp xác định tác giả của các thay đổi.
- Nên cấu hình danh tính ở phạm vi global để áp dụng cho tất cả dự án.
- Nếu cần sử dụng thông tin khác cho một dự án cụ thể, hãy cấu hình ở phạm vi local cho dự án đó.
**Cấu hình địa chỉ email**
Để cấu hình địa chỉ email, bạn thực hiện tương tự như cấu hình tên. Chỉ việc thay đổi tham số user.name thành user.email.

VD: ```git config --global user.email "ngobatai1711@gmail.com"```
#### 2.4.2 Xóa hoặc thay đổi định danh
**Xóa định danh người dùng**
Nếu bạn muốn xóa hoàn toàn định danh người dùng đã cấu hình (ở phạm vi global), bạn có thể sử dụng lệnh:
```
git config --global --unset user.name
git config --global --unset user.email
```
Tương tự, bạn có thể xóa cấu hình ở phạm vi local hoặc system bằng cách bỏ qua hoặc thay thế --global bằng --local hoặc --system.
**Thay đổi định danh người dùng**
Nếu bạn muốn thay đổi định danh người dùng đã cấu hình (ở phạm vi global), bạn có thể sử dụng lệnh:
```
git config --global user.name "Tên mới của bạn"
git config --global user.email "email_mới@example.com"
```

Lệnh này sẽ ghi đè lên cấu hình cũ.

Tương tự, bạn có thể thay đổi cấu hình ở mức local hoặc system bằng cách bỏ qua hoặc thay thế --global bằng --local hoặc --system.
### 2.5 Các khu vực làm việc của Git
#### 2.5.1 Ba khu vực làm việc của Git
* Thư mục làm việc (working directory): là nơi bạn chỉnh sửa tập tin trực tiếp trên máy tính. Đây là bản sao hiện tại của dự án, chứa cả các thay đổi chưa được theo dõi bởi Git
* Khu vực tổ chức tạm (staging area) gọi tắt là Khu tạm: là vùng trung gian, lưu trữ các thay đổi mà bạn đã chọn để commit, được quản lý bằng tập tin .git\index
  Dùng lệnh ```git add``` để thêm tập tin vào Khu tạm. Ví dụ: ```git add index.js```, sẽ đưa tập tin index.js vào Khu tạm.
* Kho chứa (repository) lưu trữ tất cả các tập tin và lịch sử thay đổi của một dự án. Thư mục .git trong dự án chính là Kho chứa. Dùng git commit để chuyển tập tin từ Khu tạm sang Kho chứa. Ví dụ: sau lệnh git commit, những thay đổi của tập tin index.js sẽ được lưu vào Kho chứa.

Với việc phân chia thành 3 khu vực, Git sẽ giúp bạn quản lý mã nguồn một cách hiệu quả. Quy trình làm việc cụ thể như sau: chỉnh sửa mã nguồn ở Thư mục làm việc > chuẩn bị nội dung commit ở Khu tạm > lưu trữ mã nguồn, lịch sử ở Kho chứa.
![image](md_assets/3khuGit1.jpg)
#### 2.5.2 Thư mục làm việc
**Thư mục làm việc (working directory) để làm gì?**
- Chỉnh sửa mã nguồn: là nơi bạn tạo, sửa, hoặc xóa tập tin trước khi đưa thay đổi vào .git.

- Xem trạng thái dự án: phản ánh các thay đổi so với commit cuối cùng, giúp bạn quyết định những gì cần thêm vào Khu tạm.

- Thử nghiệm: cho phép thử nghiệm các đoạn mã mà không ảnh hưởng ngay đến lịch sử phiên bản trong Kho chứa.

**Có 2 cách để có Thư mục làm việc:**
* Khởi tạo kho chứa mới: dùng lệnh git init
* Sao chép một kho chứa có sẵn từ nơi khác (ví dụ từ Github): dùng lệnh git clone 
  ```VD: git clone https://github.com/username/my-project.git```

**Lệnh ```git add```**
Lệnh git add dùng để đưa các thay đổi từ Thư mục làm việc vào Khu tạm. Lệnh này giúp bạn chọn lọc những tập tin hoặc phần thay đổi cụ thể để chuẩn bị cho lần commit tiếp theo, thay vì commit tất cả mọi thứ trong Thư mục làm việc. Nói cách khác, git add là bước "đánh dấu" những gì bạn muốn lưu vào lịch sử phiên bản.

* Cú pháp:
  * git add <tập_tin>: thêm một tập tin cụ thể.
  * git add .: thêm tất cả thay đổi.
  * git add -p: thêm từng phần thay đổi (patch) trong tập tin.

**Lệnh ```git status```**
Lệnh git status được sử dụng để hiển thị trạng thái hiện tại của Kho lưu trữ và Thư mục làm việc. 

```
$ git status
On branch test/login
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        modified:   index.js

no changes added to commit (use "git add" and/or "git commit -a")
```
Lệnh git status ở trên cho biết: có tập tin mới xuất hiện (index.js) trong dự án mà chưa được Git theo dõi (untracked). Hiện tại trong Khu tạm chưa có gì (nothing added to commit). Nếu muốn theo dõi tập tin và chuẩn bị đưa tập tin vào Kho chứa thì sử dụng lệnh git add <tên_tập_tin>.

Kết quả khi gõ lại ```git status``` 1 lần nữa sau khi dùng lệnh ```git add```
```
$ git status
On branch test/login
Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
        modified:   cau_hinh_webserver/index.js
```
Lệnh git status ở trên cho biết: có một tập tin (index.js) đã sẵn sàng để đưa vào Kho chứa (commit).
#### 2.5.3 Khu tạm
Là một khu vực trung gian giữa Thư mục làm việc (working directory) và Kho chứa (repository). Nó cho phép bạn chọn lọc và tổ chức các thay đổi bạn muốn đưa vào commit tiếp theo.

Khu tạm là tập tin index trong thư mục .git.

Lệnh ```git rm --cached <tên_tập_tin>```

Lệnh này sẽ bỏ tập tin ra khỏi khi tạm trong trường hợp add nhầm tập tin vào khu này hoặc không muốn commit tập tin này nữa
#### 2.5.4 Gitignore
Git ignore là một cơ chế trong Git, cho phép bạn chỉ định các tập tin hoặc thư mục mà Git sẽ bỏ qua (không theo dõi - untracked) khi thực hiện các lệnh như git add hoặc git status. Điều này được thực hiện thông qua tập tin .gitignore, thường được đặt ở thư mục gốc của dự án. Mục đích là loại bỏ các tập tin không cần thiết khỏi lịch sử phiên bản, như tập tin tạm, tập tin nhị phân, hoặc thư viện phụ thuộc.

**Công dụng của gitignore**
- Tránh commit rác: không thêm các tập tin không liên quan (ví dụ: node_modules, tập tin log) vào kho chứa.
- Giữ lịch sử sạch: tập trung vào mã nguồn chính.
- Tăng hiệu quả: giảm kích thước kho chứa và tránh xung đột không cần thiết.
**Cách sử dụng gitignore**
- Tạo tập tin .gitignore trong thư mục dự án.
- Trong tập tin .gitignore, ghi các mẫu (pattern) của tập tin/thư mục muốn bỏ qua.
**Ví dụ về gitignore**
[.gitignore]
```
node_modules/
dist/
.env
*.txt
*.tmp
```
Bỏ qua toàn bộ thư mục node_modules, dist; bỏ qua tập tin.env; bỏ qua các tập tin có đuôi là .env, .txt, .tmp.

Lưu ý: Tập tin .gitignore cũng cần được commit vào kho chứa, để các thành viên trong nhóm cùng dùng một bộ quy tắc của gitignore. Điều này đảm bảo mọi người sẽ làm việc với một kho chứa gọn gàng, tránh được các xung đột không cần thiết.
#### 2.5.5 Kho chứa
Kho chứa (repository) là nơi lưu trữ tất cả các tập tin và lịch sử thay đổi của một dự án. Thư mục .git trong dự án chính là Kho chứa. Dùng git commit để chuyển tập tin từ Khu tạm sang Kho chứa.

Kho chứa giống như một cơ sở dữ liệu, chứa mọi phiên bản của mã nguồn, cho phép bạn quay lại bất kỳ thời điểm nào trong quá trình phát triển.

Có 2 loại kho chứa: kho chứa cục bộ và kho chứa ở xa
* **Kho chứa cục bộ (local repository)**
- Là kho chứa nằm trên máy tính cá nhân của bạn.
- Bạn có thể tạo kho chứa cục bộ bằng lệnh git init.
- Đây là nơi bạn làm việc trực tiếp với mã nguồn và thực hiện các commit.
* **Kho chứa ở xa (remote repository)**
- Là kho chứa được lưu trữ trên một máy chủ ở xa, chẳng hạn như GitHub, GitLab hoặc Bitbucket.
- Kho chứa ở xa cho phép nhiều người cùng làm việc trên một dự án và chia sẻ các thay đổi.
- Bạn có thể sao chép kho chứa ở xa về máy tính của mình bằng lệnh git clone.
#### 2.5.6 Lệnh Git commit
git commit là lệnh trong Git, dùng để lưu các thay đổi từ Khu tạm vào Kho chứa, tạo ra một "ảnh chụp" (snapshot) mới trong lịch sử phiên bản. Mỗi commit đi kèm một thông điệp (message) mô tả thay đổi, giúp theo dõi và quản lý mã nguồn hiệu quả.

**Vai trò của lệnh git commit**
- Ghi nhận thay đổi: lưu vĩnh viễn các tập tin/thay đổi đã được thêm bằng git add.
- Tạo lịch sử: mỗi commit là một mốc thời gian, gắn với định danh người dùng (tác giả).
- Hỗ trợ cộng tác: giúp nhóm biết ai đã làm gì và khi nào.
**Cú pháp cơ bản**
- git commit -m "Thông điệp": commit với thông điệp ngắn gọn.
- git commit: mở trình soạn thảo để viết thông điệp chi tiết.
- git commit -a -m "Thông điệp": tự động thêm các tập tin đã theo dõi (tracked) và commit.
**Quy trình làm việc thực tế**
- Chỉnh sửa tập tin trong Khu vực làm việc (working directory).
- Dùng git add để đưa vào Khu tạm (staging area).
- Dùng git commit để lưu vào Kho chứa (repository).
**Cách viết thông điệp trong lệnh commit**
Thông điệp commit là phần mô tả ngắn gọn nhưng rõ ràng về thay đổi bạn vừa thực hiện. Nó được viết khi dùng git commit, giúp bạn và nhóm hiểu mục đích của commit khi xem lại lịch sử.

Cách viết theo chuẩn thường dùng
[1] Dòng đầu tiên (Subject): 
- Ngắn gọn (dưới 50 ký tự), mô tả chính xác thay đổi. 
- Dùng động từ ở dạng mệnh lệnh (imperative), như "Add", "Fix", "Update".
- Ví dụ: "Add login feature".
[2] Dòng trống (nếu cần chi tiết):
- Để cách dòng đầu một dòng trống.
[3] Phần mô tả chi tiết (body, tùy chọn):
- Giải thích "tại sao" và "cái gì" nếu cần, dài không quá 72 ký tự.
- Dùng khi thay đổi phức tạp.
[4] Cách nhập thông điệp:
- Dùng -m cho thông điệp ngắn: git commit -m "Thông điệp".
- Không dùng -m để mở trình soạn thảo (như Vim) viết chi tiết.

**Ví dụ dùng -m với thông điệp ngắn:**
```git commit -m "Initialize Node.js project with Express and Nodemon"```

**Ví dụ dùng thông điệp chi tiết:**
```
Fix: resolve issue with user login 

This commit addresses a bug where users were unable to log in due to an incorrect password validation. 
- Modified the password validation logic in `auth.py`. 
- Added unit tests to verify the fix.
```
## Chương 3: CSDL thực hành
### 3.1 Dữ liệu và CSDL
#### 3.1.1 Dữ liệu là gì
- Một chuỗi gồm một hoặc nhiều ký hiệu (sequence of one or more symbols), như chữ cái, số, ký hiệu đặc biệt (ví dụ: A, 1, $). Đây là cách dữ liệu được biểu diễn ở mức người dùng hoặc mức trừu tượng cao hơn, trước khi máy tính xử lý. Ví dụ, chuỗi "123" hoặc "Xin chào" là dữ liệu dạng ký hiệu mà con người nhập vào hệ thống. Ở mức cơ bản (mức máy tính xử lý), các ký hiệu này sẽ được mã hóa để máy tính hiểu.

- Ở mức lưu trữ thấp nhất (cấp độ phần cứng), mọi dữ liệu trong máy tính đều được biểu diễn bằng bit (binary digits) – tức là 0 và 1. Đây là ngôn ngữ cơ bản mà máy tính sử dụng để lưu trữ và xử lý. Ví dụ: chuỗi "Xin chào” sẽ được mã hóa thành một dãy bit (ví dụ: 01011000  01101001 trong mã ASCII cho chữ "X" và "i"). Tất cả văn bản, hình ảnh, âm thanh cuối cùng đều quy về nhị phân.

- Cần được thông dịch (diễn dịch, xử lý) để trở thành thông tin. Dữ liệu thô (raw data) chỉ là tập hợp ký hiệu hoặc số liệu, không có ý nghĩa cho đến khi được xử lý hoặc diễn dịch để trở thành thông tin (information) – dữ liệu có ngữ cảnh và ý nghĩa. Ví dụ, số "19" là dữ liệu; khi được diễn dịch là "tuổi của bạn", nó trở thành thông tin. Máy tính hoặc con người cần xử lý dữ liệu để hiểu và sử dụng nó.

- Biểu diễn số lượng, tính chất của các đối tượng hoặc chỉ dẫn hoạt động. Ví dụ, biểu diễn số lượng: "5" là số sản phẩm trong kho; biểu diễn tính chất: "đỏ" là màu của một chiếc xe; chỉ dẫn hoạt động: mã lệnh "1010" yêu cầu CPU thực hiện phép cộng.

- Dữ liệu được lưu trữ trên ổ đĩa (HDD, SSD) hoặc các thiết bị khác như RAM, đám mây

- Được tổ chức theo dạng cấu trúc, bán cấu trúc hoặc không cấu trúc.

#### 3.1.2 Cơ sở dữ liệu là gì
Cơ sở dữ liệu (database) là một tập hợp dữ liệu được tổ chức, lưu trữ và quản lý một cách có hệ thống trên máy tính, để bạn có thể dễ dàng truy cập, thêm, sửa, xóa hoặc tìm kiếm thông tin khi cần. Hãy nghĩ về CSDL như một "kho lưu trữ thông minh".
Ưu điểm khi sử dụng cơ sở dữ liệu:
- Giúp người dùng dễ dàng truy cập, quản lý, khai thác và cập nhật thông tin
- Giảm sự trùng lặp thông tin xuống mức thấp nhất
- Có thể truy xuất thông tin theo nhiều cách
- Cho phép nhiều người cùng sử dụng một lúc
- Tăng tính bảo mật cho dữ liệu
- Tăng tính toàn vẹn dữ liệu
- Khả năng mở rộng dễ dàng
#### 3.1.3 Làm việc với CSDL
Khi làm việc với CSDL, chúng ta quan tâm tới 3 thành phần sau:
- Dữ liệu
- Cách thức tổ chức dữ liệu
- Phần mềm quản lý CSDL

**Dữ liệu**
Dữ liệu là tập hợp các thông tin thô (raw facts) được thu thập, lưu trữ và xử lý trong cơ sở dữ liệu. Đây là thành phần cốt lõi, đại diện cho các giá trị thực tế mà hệ thống cần quản lý. Dữ liệu có thể ở dạng số, văn bản, hình ảnh, âm thanh, hoặc bất kỳ định dạng nào khác tùy thuộc vào mục đích sử dụng.

* Đặc điểm:
- Nguyên bản: chưa qua xử lý hoặc tổ chức thành thông tin có ý nghĩa.
- Đa dạng: có thể là dữ liệu có cấu trúc (structured), bán cấu trúc (semi-structured), hoặc không cấu trúc (unstructured).
- Nguồn gốc: được thu thập từ người dùng, hệ thống, cảm biến, hoặc các nguồn khác.
**Cách thức tổ chức dữ liệu**
  Có hai mô hình tổ chức dữ liệu đang được sử dụng phổ biến, gồm:
- Mô hình quan hệ (relational model): dữ liệu được tổ chức dưới dạng các bảng
- Mô hình phi quan hệ (noSQL): dữ liệu được tổ chức dưới dạng phi cấu trúc, hoặc bán cấu trúc như JSON, XML.
**Phần mềm quản lý CSDL**
Khi đã có cơ sở dữ liệu (CSDL), bao gồm dữ liệu và mô hình tổ chức dữ liệu, chúng ta cần sử dụng các công cụ (phần mềm) để chuyển CSDL vào hệ thống máy tính.

Phần mềm đảm nhận vai trò này được gọi là Phần mềm quản lý CSDL, hay còn được gọi là Hệ quản trị CSDL (Database Management System - DBMS).

Hệ quản trị CSDL (DBMS) là một phần mềm chuyên dụng, cho phép người dùng thực hiện các thao tác như tạo lập, quản lý và truy xuất dữ liệu trong CSDL. DBMS cung cấp các công cụ hỗ trợ định nghĩa cấu trúc dữ liệu, nhập liệu, thực hiện truy vấn dữ liệu, đồng thời đảm bảo tính bảo mật cho dữ liệu được lưu trữ.

Một số DBMS phổ biến:
- MySQL
- PostgreSQL
- Oracle Database
- Microsoft SQL Server
- MongoDB(NoSQL)
### 3.2 DBMS
Phần mềm quản lý CSDL (hay Hệ quản trị cơ sở dữ liệu, DataBase Management System), gọi tắt là DBMS, là một phần mềm chuyên dụng, cho phép người dùng thực hiện các thao tác như tạo lập, quản lý và truy xuất dữ liệu trong CSDL. 

DBMS cung cấp các công cụ hỗ trợ để định nghĩa cấu trúc dữ liệu, nhập liệu, thực hiện truy vấn dữ liệu, đồng thời đảm bảo tính bảo mật cho dữ liệu được lưu trữ.

Một số DBMS phổ biến gồm: MySQL, PostgreSQL, Oracle Database, Microsoft SQL Server, MongoDB (NoSQL). 
#### 3.2.1 RDBMS là gì
RDBMS là viết tắt của Relational Database Management System - Hệ quản trị CSDL quan hệ, là một DBMS, dùng để quản lý CSDL theo Mô hình quan hệ.

Một số RDBMS phổ biến:
- MySQL
- PostgreSQL
- Oracle Database
- Microsoft SQL Server
- IBM DB2

#### 3.2.2 Làm việc với RDBMS
**Các thành phần của RDBMS**
Khi cài đặt một RDBMS, bạn không chỉ cài đặt một phần mềm đơn lẻ mà là một tập hợp các thành phần và công cụ phối hợp để quản lý dữ liệu hiệu quả.

Cụ thể, khi cài đặt SQL Server, bạn đã cài đặt các thành phần sau:

- Công cụ cơ sở dữ liệu (Database engine), đây là thành phần cốt lõi của một RDBMS, chịu trách nhiệm lưu trữ, quản lý, và truy xuất dữ liệu theo mô hình quan hệ. Nó xử lý các lệnh SQL, quản lý bảng, chỉ mục, giao dịch, và tối ưu hóa truy vấn.

- Công cụ dòng lệnh (sqlcmd), cho phép bạn làm việc với Database engine bằng lệnh, thông qua Command Prompt, CMD hoặc PowerShell

- Công cụ đồ họa (SQL Server Management Studio-SSMS), là một công cụ  mạnh mẽ cho phép bạn quản lý và phát triển cơ sở dữ liệu SQL Server. SSMS cung cấp các công cụ để tạo bảng, truy vấn dữ liệu, quản lý người dùng và thực hiện nhiều tác vụ quản trị khác.

- Các công cụ quản lý khác, dịch vụ nền, thư viện và các tính năng bổ sung khác.

![image](md_assets/rdbms.jpg)
#### 3.2.3 Khóa chính và Khóa ngoại
Khóa (key) là gì?

Trong cơ sở dữ liệu quan hệ, "khóa" là một hoặc một tập hợp các thuộc tính (cột) trong một bảng (quan hệ), được sử dụng để xác định duy nhất một bản ghi (hàng) trong bảng đó hoặc để liên kết các bảng với nhau.

Khóa chính (primary key) là gì?
- Là khóa dùng để xác định duy nhất mỗi bản ghi trong một bảng.
- Mỗi bảng chỉ có một khóa chính.
- Giá trị của khóa chính không được trùng lặp và không được mang giá trị NULL.
- Ví dụ: Mã nhân viên (MANV) trong bảng Nhân viên.

Khóa ngoại (foreign key) là gì?
- Là khóa được sử dụng để liên kết hai bảng với nhau.
- Khóa ngoại của một bảng tham chiếu đến khóa chính của một bảng khác.
- Khóa ngoại giúp đảm bảo tính toàn vẹn tham chiếu giữa các bảng.
- Ví dụ: Mã chi nhánh (MSCN) trong bảng Nhân viên, tham chiếu đến Mã chi nhánh
### 3.3 Truy vấn dữ liệu
Truy vấn dữ liệu là quá trình tìm kiếm, lấy ra và xử lý thông tin từ một nguồn dữ liệu, thường là cơ sở dữ liệu.

Mục đích chính của truy vấn dữ liệu:
- Lấy thông tin cần thiết: giúp người dùng hoặc ứng dụng tìm kiếm và lấy ra thông tin cụ thể từ một lượng lớn dữ liệu được lưu trữ.
- Phân tích dữ liệu: có thể được sử dụng để lọc, sắp xếp, tính toán và tổng hợp dữ liệu, giúp người dùng hiểu rõ hơn về dữ liệu.
- Báo cáo dữ liệu: được sử dụng để tạo ra các báo cáo dữ liệu, hiển thị dữ liệu theo định dạng dễ hiểu.
- Tự động hóa tác vụ: có thể được sử dụng để tự động hóa các tác vụ quản lý dữ liệu, chẳng hạn như cập nhật dữ liệu, xóa dữ liệu hoặc tạo bản sao lưu dữ liệu.

Phép chọn (SELECT) là gì?

Trong SQL (Structured Query Language), phép chọn (SELECT) là một trong những lệnh cơ bản và quan trọng nhất, được sử dụng để truy xuất dữ liệu từ một hoặc nhiều bảng trong cơ sở dữ liệu.

Chức năng chính của phép chọn:
- Truy xuất dữ liệu: lệnh SELECT cho phép bạn lấy dữ liệu từ các cột cụ thể hoặc tất cả các cột trong một bảng.
- Lọc dữ liệu: bạn có thể sử dụng mệnh đề WHERE để lọc dữ liệu dựa trên các điều kiện cụ thể.
- Sắp xếp dữ liệu: mệnh đề ORDER BY cho phép bạn sắp xếp dữ liệu theo thứ tự tăng dần hoặc giảm dần.
- Nhóm dữ liệu: mệnh đề GROUP BY cho phép bạn nhóm các bản ghi có giá trị giống nhau trong một cột.
- Kết hợp dữ liệu: lệnh SELECT có thể được sử dụng để kết hợp dữ liệu từ nhiều bảng khác nhau bằng cách sử dụng các phép kết nối (JOIN).

## Chương 4: Dự án cá nhân
## Chương 5: Trắc nghiệm
Câu 1.3: Phát biểu nào không đúng khi nói về web, trang web và website?

A. Web là hệ thống thông tin toàn cầu

B. Web được tạo thành nhờ các trang web và sự liên kết giữa chúng

**C. Một trang web chứa nhiều website**

D. Một website chứa nhiều trang web có liên quan đến nhau

Câu 1.4: Phát biểu nào không đúng khi nói về website và ứng dụng web?

A. Không có sự phân biệt rõ ràng giữa website và ứng dụng web

B. Một website và ứng dụng web có một địa chỉ URL để truy cập

C. Website và ứng dụng web hoạt động dựa trên mô hình client-server

**D. Chỉ cần sử dụng HTML và CSS là có thể tạo ra được ứng dụng web**

2. Phát triển ứng dụng Web

Câu 2.3: Có 3 cách để tạo ra một ứng dụng web? Phát biểu nào không đúng?

A. Sử dụng CMS

B. Sử dụng framework và thư viện hỗ trợ

C. Viết thuần bằng ngôn ngữ lập trình mà không sử dụng framework, thư viện hỗ trợ

**D. Sử dụng trình duyệt web**

Câu 2.4: Những ưu điểm khi sử dụng CMS để tạo ra ứng dụng web. Phát biểu nào không đúng?

**A. Cần kiến thức lập trình chuyên sâu**

B. Tối ưu SEO

C. Dễ sử dụng, dễ quản lý, tiết kiệm thời gian

D. Chi phí phát triển ứng dụng thấp

Câu 2.5: Những ưu điểm khi sử dụng framework và thư viện để tạo ra ứng dụng web. Phát biểu nào không đúng?

A. Tăng tốc độ phát triển

B. Cải thiện chất lượng viết mã

**C. Giảm khả năng bảo mật**

D. Dễ dàng bảo trì và mở rộng

Câu 3.2: Một số phần mềm web server phổ biến. Phát biểu nào không đúng?

A. Apache

B. Nginx

**C. SSI**

D. Node.js

Câu 3.3: Các chức năng của Web server là gì? Phát biểu nào không đúng?

A. Lưu trữ các tập tin của ứng dụng web

B. Nhận request từ client

C. Xử lý request

**D. Nhận response từ máy client**

4.2 Lệnh nào được sử dụng để nhúng Git vào thư mục dự án?

**A. git init**

B. git --init

C. git initialize

D. git embed

4.3 Lệnh nào sử dụng để kiểm tra trên máy tính đã có phần mềm Git hay chưa?

A. git ver

B. git version

**C. git --version hoặc git -v**

D. git --ver

4.4 Trong Git, kho lưu trữ (repo, repository) là gì?

A. Là thư mục dự án

B. Là thư mục dự án đã được nhúng Git

C. Là thư mục cài đặt phần mềm Git

**D. Là thư mục .git (trong thư mục dự án)**

4.5 Bạn có thể sử dụng các công cụ sau để viết mã. Phát biểu nào không đúng?

A. Text editor

**B. MS Word**

C. IDE, Code Editor

D. Chatbot (Gemini), Trang web (https://codepen.io/) 

Câu 1.1 Các đặc điểm của hệ thống quản lý phiên bản cục bộ. Phát
biểu nào không đúng?

A. Có thể thực hiện thủ công

B. Không hỗ trợ trong môi trường cộng tác nhiều người

C. Có thể dùng phần mềm để quản lý phiên bản kiểu cục bộ

**D. Các phiên bản của dự án được lưu tập trung trên một máy server**

Câu 1.2 Các đặc điểm của hệ thống quản lý phiên bản tập trung.
Phát biểu nào không đúng?

A. Các phiên bản của dự án được lưu tập trung trên máy server

**B. Các máy client sẽ chứa tất cả các phiên bản của thư mục dự án
cùng với lịch sử thay đổi** 

C. Máy client không thể tải phiên bản của dự án về, khi máy server
không hoạt động

D. Hỗ trợ làm việc cộng tác nhiều người

Câu 1.3 Các đặc điểm của hệ thống quản lý phiên bản phân tán. Phát
biểu nào không đúng?

A. Các máy client sẽ chứa toàn bộ các phiên bản của dự án, cùng
lịch sử thay đổi

B. Hỗ trợ làm việc cộng tác nhiều người

C. Các phiên bản của dự án được lưu trên máy server

**D. Bạn không thể tạo và lưu phiên bản khi không có kết nối mạng
tới máy server**

Câu 5.2 Nodejs là gì? Phát biểu nào không đúng?

A. Nodejs là môi trường phát triển ứng dụng

**B. Nodejs là một ngôn ngữ lập trình**

C. Nodejs là nền tảng phát triển ứng dụng

D. Có thể sử dụng Nodejs để tạo web server

Câu 5.3 NPM là gì? Phát biểu nào không đúng?

A. NPM là viết tắt của Node Package Manager

B. NPM là công cụ để quản lý các thư viện dùng trong một ứng dụng chạy trên nền Nodejs

C. NPM được cài đặt mặc định khi cài đặt Nodejs

**D. NPM gồm 3 thành phần: website, GUI và registry**

Câu 6.4 Trong ứng dụng chạy trên nền Nodejs, tập tin package.json dùng để làm gì? Phát biểu nào không đúng?

A. Chứa thông tin mô tả về ứng dụng

B. Quản lý các phụ thuộc

C. Chỉ ra tập tin JavaScript đầu tiên được thực thi

**D. Chứa mã để tạo giao diện ứng dụng**

Câu 6.5 PNPM là gì? Phát biểu nào không đúng?

A. Giúp tiết kiệm dung lượng đĩa

B. Có thể thay thế hoặc bổ sung cho NPM

C. Là viết tắt của Performant Node Package Manager 

**D. Không thể thay thế hoặc bổ sung cho NPM**

Câu 6.6 Express trong Node.js được sử dụng để làm gì?

**A. Tạo ứng dụng web và API**

B. Quản lý cơ sở dữ liệu

C. Thiết kế giao diện người dùng

D. Kiểm tra hiệu suất ứng dụng

Câu 6.7 Nodemon trong Node.js được sử dụng để làm gì?

A. Kết nối với cơ sở dữ liệu

B. Tạo giao diện người dùng cho ứng dụng

C. Quản lý các gói phụ thuộc

**D. Tự động khởi động lại server khi mã thay đổi**

Câu 7.2 Trong môi trường phát triển ứng dụng Nodejs, phát biểu nào không đúng khi nói về gói cục bộ?

A. Gói cục bộ được cài đặt trong thư mục node_modules của dự án

B. Gói cục bộ chỉ có thể được sử dụng trong dự án mà nó được cài đặt

C. Gói cục bộ được quản lý thông qua file package.json và có thể sử dụng các phiên bản khác nhau giữa các dự án

**D. Gói cục bộ luôn được cài đặt toàn cục trên hệ thống để tất cả các dự án đều có thể truy cập**

Câu 7.3 Trong môi trường phát triển ứng dụng Nodejs, phát biểu nào không đúng khi nói về gói toàn cục?

**A. Gói toàn cục luôn được liệt kê trong tập tin package.json của dự án**

B. Gói toàn cục thường được sử dụng cho các công cụ dòng lệnh (CLI) như nodemon

C. Gói toàn cục được lưu trong thư mục toàn cục của hệ thống và có thể truy cập từ bất kỳ dự án nào

D. Gói toàn cục được cài đặt bằng lệnh npm install -g <package-name>

Câu 7.4 Trong môi trường phát triển ứng dụng Nodejs, phát biểu nào không đúng khi nói về kiểu cài đặt dependencies?

A. Các gói trong dependencies được cài đặt cục bộ trong dự án bằng lệnh npm install <package-name>

B. Các gói trong dependencies là các phụ thuộc cần thiết để ứng dụng chạy trong môi trường triển khai, sản xuất (production)

**C. Các gói trong dependencies chỉ được sử dụng trong giai đoạn phát triển và không cần thiết khi triển khai ứng dụng (production)**

D. Các gói trong dependencies được liệt kê trong tập tin package.json và tự động cài đặt khi chạy npm install

Câu 7.5 Trong môi trường phát triển ứng dụng Nodejs, phát biểu nào không đúng khi nói về kiểu cài đặt devDependencies?

A. Các gói trong devDependencies được cài đặt bằng lệnh npm install <package-name> --save-dev

**B. Các gói trong devDependencies là các phụ thuộc cốt lỗi để ứng dụng chạy trong môi trường triển khai (production)**

C. Các gói trong devDependencies chỉ cần thiết trong giai đoạn phát triển hoặc kiểm thử, không cần cho môi trường triển khai (production)

D. Các gói trong devDependencies không được cài đặt khi chạy npm install --production

Câu 8.2: Lập trình đồng bộ trong JavaScript là gì? Phát biểu nào sau đây không đúng?

**A. Lập trình đồng bộ không chặn luồng, cho phép các lệnh tiếp theo chạy ngay cả khi tác vụ chưa hoàn tất.**

B. Các lệnh được thực thi tuần tự, theo thứ tự từ trên xuống dưới.

C. Mỗi lệnh phải hoàn thành trước khi lệnh tiếp theo được thực thi.

D. Phù hợp với các tác vụ đơn giản như tính toán cơ bản không cần chờ đợi.

Câu 8.3: Hàm ẩn danh (anonymous function) trong JavaScript là gì? Phát biểu nào sau đây không đúng?

A. Hàm ẩn danh có thể truy cập biến trong phạm vi bao quanh nhờ closure.

B. Hàm ẩn danh là hàm không có tên khi được định nghĩa.

C. Hàm ẩn danh thường được gán vào biến hoặc truyền làm tham số cho hàm khác.

**D. Hàm ẩn danh được "nâng lên" (hoisted) giống như hàm khai báo (function declaration).**

Câu 9.2: Hàm mũi tên (arrow function) là gì? Phát biểu nào sau đây không đúng về hàm mũi tên?

A. Hàm mũi tên có cú pháp ngắn gọn, giúp viết mã dễ đọc hơn.

**B. Hàm mũi tên có this (ngữ cảnh) riêng, không kế thừa từ phạm vi bên ngoài.**

C. Hàm mũi tên không thể được dùng làm hàm tạo (constructor).

D. Hàm mũi tên không có biến arguments để truy cập danh sách tham số.

Câu 9.3: Lập trình bất đồng bộ là gì? Phát biểu nào sau đây không đúng về lập trình bất đồng bộ?

A. Lập trình bất đồng bộ cho phép chương trình thực hiện nhiều tác vụ cùng lúc mà không cần chờ đợi tác vụ trước đó hoàn thành.

B. Lập trình bất đồng bộ đặc biệt hữu ích khi xử lý các tác vụ tốn thời gian như yêu cầu mạng, đọc/ghi tập tin hoặc tương tác với cơ sở dữ liệu.

**C. Callback là một kỹ thuật bất đồng bộ, nó sẽ làm cho code dễ đọc và dễ bảo trì hơn khi code có nhiều callback lồng nhau.**

D. Async/await cho phép viết mã bất đồng bộ trông giống như mã đồng bộ, giúp mã trở nên dễ đọc và dễ hiểu hơn

Câu 9.2: Hàm mũi tên (arrow function) là gì? Phát biểu nào sau đây không đúng về hàm mũi tên?

A. Hàm mũi tên có cú pháp ngắn gọn, giúp viết mã dễ đọc hơn.

**B. Hàm mũi tên có this (ngữ cảnh) riêng, không kế thừa từ phạm vi bên ngoài.**

C. Hàm mũi tên không thể được dùng làm hàm tạo (constructor).

D. Hàm mũi tên không có biến arguments để truy cập danh sách tham số.

Câu 9.3: Lập trình bất đồng bộ là gì? Phát biểu nào sau đây không đúng về lập trình bất đồng bộ?

A. Lập trình bất đồng bộ cho phép chương trình thực hiện nhiều tác vụ cùng lúc mà không cần chờ đợi tác vụ trước đó hoàn thành.

B. Lập trình bất đồng bộ đặc biệt hữu ích khi xử lý các tác vụ tốn thời gian như yêu cầu mạng, đọc/ghi tập tin hoặc tương tác với cơ sở dữ liệu.

**C. Callback là một kỹ thuật bất đồng bộ, nó sẽ làm cho code dễ đọc và dễ bảo trì hơn khi code có nhiều callback lồng nhau.**

D. Async/await cho phép viết mã bất đồng bộ trông giống như mã đồng bộ, giúp mã trở nên dễ đọc và dễ hiểu hơn.

Câu 10.2 Hàm callback trong JavaScript là gì? Phát biểu nào sau đây không đúng?

A. Hàm callback là một hàm được truyền vào một hàm khác như một tham số.

B. Hàm callback thường được sử dụng để xử lý các tác vụ bất đồng bộ.

C. Hàm callback có thể là hàm ẩn danh, hàm mũi tên hoặc hàm đã được định nghĩa trước.

**D. Hàm callback được thực thi ngay lập tức sau khi hàm "cha" bắt đầu thực hiện.**

Câu 10.3 Callback hell trong JavaScript là gì? Phát biểu nào sau đây không đúng?

A. Callback hell xảy ra khi có quá nhiều hàm callback lồng nhau, khiến mã nguồn khó đọc và bảo trì.

B. Callback hell thường xuất hiện khi xử lý các tác vụ bất đồng bộ phức tạp.

**C. Callback hell là một cách hiệu quả để quản lý các tác vụ bất đồng bộ trong JavaScript.**

D. Callback hell có thể được giải quyết bằng Promise hoặc async/await.

Câu 3.2 Phạm vi cấu hình định danh trong Git là gì? Phát biểu nào sau đây không đúng?

A. Phạm vi system áp dụng cho tất cả người dùng và kho lưu trữ trên hệ thống.

B. Phạm vi global áp dụng cho tài khoản người dùng hiện tại và tất cả kho lưu trữ mà người dùng đó làm việc.

**C. Phạm vi local áp dụng cho một kho lưu trữ cụ thể và có độ ưu tiên thấp nhất.**

D. Phạm vi local áp dụng cho một kho lưu trữ cụ thể và có độ ưu tiên cao nhất.

Câu 4.2 Ba khu vực làm việc chính của Git là gì? Phát biểu nào sau đây không đúng?

A. Thư mục làm việc (working directory) là nơi bạn chỉnh sửa tập tin trực tiếp.

**B. Khu tạm (staging area) là nơi lưu trữ lịch sử phiên bản của dự án.**

C. Kho chứa (repository) là nơi lưu trữ dữ liệu chính thức của dự án.

D. Lệnh git add được sử dụng để chuyển các thay đổi từ Thư mục làm việc sang Khu
tạm.

Câu 4.3 Thư mục làm việc (working directory) trong Git là gì? Phát biểu nào sau đây không đúng?

A. Là thư mục thực tế trên máy tính, nơi bạn làm việc trực tiếp với các tập tin của dự án.

B. Là nơi bạn tạo, sửa, hoặc xóa tập tin trước khi đưa thay đổi vào .git.

**C. Là nơi lưu trữ lịch sử phiên bản và dữ liệu chính thức của dự án.**

D. Phản ánh các thay đổi so với commit cuối cùng, giúp bạn quyết định những gì cần thêm vào Khu tạm (staging area).

Câu hỏi 5.2 Khu tạm (staging area) trong Git là gì? Phát biểu nào sau đây không đúng?

A. Khu tạm là một khu vực trung gian giữa Thư mục làm việc (working directory) và Kho chứa (repository).

**B. Khu tạm là một thư mục vật lý trong Thư mục làm việc.**

C. Khu tạm cho phép bạn chọn lọc và tổ chức các thay đổi bạn muốn đưa vào commit tiếp theo.

D. Lệnh git rm --cached <tên_tập_tin> được sử dụng để gỡ bỏ tên tập tin ra khỏi Khu tạm.

Câu hỏi 5.3 gitignore là gì? Phát biểu nào sau đây không đúng?

**A. gitignore giúp thêm các tập tin không liên quan (ví dụ: node_modules, tập tin log) vào kho chứa.**

B. gitignore là một cơ chế trong Git, cho phép bạn chỉ định các tập tin hoặc thư mục mà Git sẽ bỏ qua khi thực hiện các lệnh như git add hoặc git status.

C. gitignore được thực hiện thông qua tập tin có tên là .gitignore, thường đặt ở thư mục gốc của dự án.

D. Mục đích của gitignore là loại bỏ các tập tin không cần thiết khỏi lịch sử phiên bản, như tập tin tạm, tập tin nhị phân, hoặc thư viện phụ thuộc.

Câu hỏi 5.4 Kho chứa (repository) trong Git là gì? Phát biểu nào sau đây không đúng?

A. Kho chứa là nơi lưu trữ tất cả các tập tin và lịch sử thay đổi của một dự án.

B. Thư mục .git trong dự án chính là Kho chứa.

**C. Lệnh git commit được sử dụng để chuyển tập tin từ Thư mục làm việc (working directory) sang Kho chứa.**

D. Kho chứa cục bộ (local repository) là kho chứa được lưu trữ trên một máy chủ ở xa.

Câu 5.5 Commit trong Git là gì? Phát biểu nào sau đây không đúng?

A. Commit là lệnh trong Git dùng để lưu các thay đổi từ Khu tạm vào Kho chứa.

B. Commit tạo ra một "ảnh chụp" (snapshot) mới trong lịch sử phiên bản.

**C. Commit dùng để chuyển tập tin từ Kho chứa sang Khu tạm.**

D. Mỗi commit đi kèm một thông điệp (message) mô tả thay đổi.

Câu 11.2 Free HTML template là gì? Phát biểu nào sau đây không đúng?

A. Free HTML template là các mẫu giao diện web được thiết kế sẵn, bao gồm HTML, CSS, và đôi khi JavaScript, được cung cấp miễn phí.

B. Free HTML template thường có giao diện đẹp, cấu trúc cơ bản (header, footer, sidebar), và phù hợp cho nhiều loại dự án như blog, portfolio, hoặc trang doanh nghiệp nhỏ.

**C. Sử dụng Free HTML template tốn nhiều thời gian, phù hợp cho các dự án lớn.**

D. Free HTML template cho phép bạn tùy chỉnh CSS, thay đổi nội dung (văn bản, hình ảnh), tích hợp back-end (như Node.js, PHP).

Câu 11.3 Static files (tập tin tĩnh) trong Express là gì? Phát biểu nào sau đây không đúng?

A. Static files là các tập tin không thay đổi nội dung hoặc không cần xử lý logic phía server.

B. Static files được gửi trực tiếp cho client thông qua middleware express.static.

C. Mục đích của static files là tối ưu hóa hiệu suất, tổ chức dự án và bảo mật.

**D. Không nên đặt các static files trong thư mục public**

Câu hỏi 12.1 Ứng dụng cục bộ là gì? Phát biểu nào sau đây không đúng?

A. Ứng dụng cục bộ chạy trực tiếp trên thiết bị của người dùng mà không cần kết nối liên tục với máy chủ ở xa.

**B. Ứng dụng cục bộ luôn yêu cầu kết nối internet ổn định để hoạt động hiệu quả.**

C. Ứng dụng cục bộ có thể truy cập trực tiếp vào các tài nguyên của thiết bị như hệ thống tập tin và phần cứng.

D. Dữ liệu của ứng dụng cục bộ thường được lưu trữ trên thiết bị của người dùng, giúp tăng cường bảo mật và quyền riêng tư.

Câu hỏi 12.2 Ứng dụng kiểu client-server là gì? Phát biểu nào sau đây không đúng?

A. Client tập trung chủ yếu vào việc hiển thị giao diện người dùng, trong khi server tập trung xử lý logic và dữ liệu.

B. Giao tiếp giữa client và server thường được thực hiện qua mạng, sử dụng các giao thức như HTTP, WebSocket hoặc TCP/IP.

**C. Client và server luôn phải chạy trên các thiết bị riêng biệt, không bao giờ có thể cùng chạy trên một máy tính.**

D. Server có nhiệm vụ nhận yêu cầu từ client, xử lý chúng, và gửi phản hồi lại cho client.

Câu hỏi 13.2 URL (Uniform Resource Locator) là gì? Phát biểu nào sau đây không đúng?

A. URL là một địa chỉ duy nhất xác định vị trí của một tài nguyên trên Internet.

B. URL bao gồm các thành phần như giao thức, tên miền, đường dẫn, truy vấn và phân mảnh.

C. Phần "truy vấn" (query) trong URL được sử dụng để truyền dữ liệu đến máy chủ thông qua các tham số.

**D. Giao thức "FTP" là giao thức phổ biến nhất được sử dụng trong URL để truy cập các trang web.**

Câu hỏi 14.3 Mô hình lập trình hướng sự kiện trong Node.js là gì? Phát biểu nào sau đây không đúng?

**A. Event Emitter liên tục kiểm tra hàng đợi sự kiện và thực thi các hàm callback khi có sự kiện xảy ra.**

B. Event là các hành động hoặc sự thay đổi trạng thái xảy ra trong ứng dụng.

C. Event Loop liên tục kiểm tra hàng đợi sự kiện và thực thi các hàm callback khi có sự kiện xảy ra.

D. Event Handler là các hàm được gọi khi một sự kiện xảy ra.

Câu hỏi 15.2 Mô hình lập trình hướng sự kiện của Express. Phát biểu nào sau đây không đúng?

A. Mỗi request từ client (như GET, POST, PUT, DELETE) được xem là một sự kiện (Event).

B. Các module http, fs, stream là các Bộ quản lý sự kiện (Event Emitter) của Express.

**C. Express sử dụng Vòng lặp sự kiện (Event Loop) của trình duyệt để lắng nghe và xử lý các sự kiện theo kiểu bất đồng bộ (asynchronous), không chặn luồng (non-blocking).**

D. Các route handler và middleware đóng vai trò như các Hàm xử lý sự kiện (Event Handler), được gọi khi sự kiện tương ứng xảy ra.

Câu hỏi 15.3 Route handler trong Express là gì? Phát biểu nào sau đây không đúng?

A. Route handler chỉ được gọi khi request khớp với route và HTTP method đã định nghĩa.

B. Route handler thường chứa logic nghiệp vụ như truy vấn cơ sở dữ liệu hoặc xử lý dữ liệu.

C. Route handler có thể chuyển tiếp request sang middleware hoặc handler tiếp theo bằng hàm next().

**D. Chỉ có duy nhất một Route handler được gắn vào một route.**

15.4. Middleware trong Express là gì? Phát biểu nào sau đây không đúng?

A. Middleware là các hàm được thực thi trong quá trình xử lý một HTTP request, trước hoặc sau Route handler.

B. Xử lý request (như xác thực, ghi log).

C. Sửa đổi đối tượng req hoặc res.

**D. Middleware nhận 2 tham số: req, res.**

Câu hỏi 16.1 Trang web động là gì. Phát biểu nào sau đây KHÔNG ĐÚNG?

A. Nội dung hiển thị có thể khác nhau tùy thuộc vào người dùng truy cập. 

**B. Nội dung trang web luôn cố định và không thay đổi theo thời gian.**

C. Giao diện có khả năng cập nhật một phần mà không cần tải lại toàn bộ trang. 

D. Trang web có thể tương tác với người dùng theo thời gian thực.

Câu hỏi 16.2 Ưu điểm của SSR (Server-Side Rendering) là gì? Phát biểu nào dưới đây KHÔNG đúng?

A. Tối ưu hóa SEO vì các công cụ tìm kiếm có thể thu thập và lập chỉ mục nội dung dễ dàng hơn nhờ nội dung đầy đủ trong mã HTML.

B. Tăng tốc độ tải trang ban đầu, giúp người dùng thấy nội dung nhanh hơn, đặc biệt trên thiết bị di động hoặc mạng chậm.

C. Hỗ trợ tốt cho thiết bị cấu hình yếu bằng cách giảm tải việc thực thi JavaScript trên thiết bị.

D. Loại bỏ hoàn toàn sự phụ thuộc vào JavaScript để hiển thị nội dung trang web.

Câu hỏi 16.3 Nhược điểm của CSR (Client-Side Rendering) là gì? Phát biểu nào dưới đây KHÔNG đúng?

**A. CSR luôn tiêu tốn nhiều tài nguyên server hơn so với SSR để hiển thị nội dung trang web.**

B. SEO không tốt vì các công cụ tìm kiếm có thể gặp khó khăn trong việc thu thập và lập chỉ mục nội dung được tạo bởi JavaScript.

C. Tốc độ tải trang ban đầu chậm do người dùng phải chờ trình duyệt tải và thực thi tập tin JavaScript trước khi thấy nội dung.

D. Yêu cầu thiết bị người dùng phải mạnh để xử lý tốt các tác vụ JavaScript.

Câu hỏi 17.1 Express-handlebars là một _________được tích hợp vào framework Express để tạo ra “HTML động” từ phía server.

A. client-side template engine

B. server-side template machine

C. server-site template engine

**D. server-side template engine**

Câu 1.1 Trong lĩnh vực Công nghệ Thông tin, dữ liệu là gì? Phát biểu nào sau đây không đúng?

**A. Dữ liệu thô (raw data) đã có ngữ cảnh và ý nghĩa, không cần phải thông dịch (xử lý) để trở thành thông tin.**

B. Dữ liệu là một chuỗi gồm một hoặc nhiều ký hiệu, như chữ cái, số, ký hiệu đặc biệt.

C. Ở mức lưu trữ thấp nhất (cấp độ phần cứng), mọi dữ liệu trong máy tính đều được biểu diễn bằng bit (binary digits) – tức là 0 và 1.

D. Dữ liệu được lưu trữ trên ổ đĩa (HDD, SSD) hoặc các thiết bị khác như RAM, đám mây.

Câu 1.2 Cơ sở dữ liệu (database) là gì? Phát biểu nào sau đây không đúng?

A. Cơ sở dữ liệu là một tập hợp dữ liệu được tổ chức, lưu trữ và quản lý một cách có hệ thống trên máy tính.

**B. Cơ sở dữ liệu làm tăng sự trùng lặp thông tin lên mức cao nhất.**

C. Cơ sở dữ liệu giúp người dùng dễ dàng truy cập, quản lý, khai thác và cập nhật thông tin.

D. Cơ sở dữ liệu cho phép nhiều người cùng sử dụng một lúc.

Câu 1.3 DBMS là gì? Phát biểu nào sau đây không đúng?

A. DBMS là phần mềm cho phép người dùng tạo, quản lý và truy xuất dữ liệu trong CSDL.

B. DBMS cung cấp các công cụ để định nghĩa cấu trúc dữ liệu, nhập dữ liệu, truy vấn dữ liệu và bảo mật dữ liệu.

C. MySQL, PostgreSQL, Oracle Database, Microsoft SQL Server, MongoDB là các ví dụ về DBMS.

**D. DBMS chỉ hỗ trợ các mô hình dữ liệu quan hệ, không hỗ trợ mô hình phi quan hệ.**

Câu 1.4 Theo “Tháp xử lý thông tin”, quá trình chuyển đổi dữ liệu được thực hiện theo thứ tự nào?

A. Data > Knowledge > Information > Wisdom

B. Information > Data > Knowledge > Wisdom

C. Data > Information  > Wisdom > Knowledge

**D. Data > Information > Knowledge > Wisdom**

Câu 2.2 RDBMS là gì? Phát biểu nào sau đây không đúng?

A. RDBMS là viết tắt của Relational Database Management System - Hệ quản trị CSDL quan hệ.

B. RDBMS là một DBMS dùng để quản lý CSDL theo Mô hình quan hệ.

C. MySQL, PostgreSQL, Oracle Database, Microsoft SQL Server và IBM DB2 là các ví dụ về RDBMS.

**D. RDBMS chỉ hỗ trợ các loại dữ liệu phi cấu trúc, không hỗ trợ dữ liệu có cấu trúc.**

Câu 2.3 SQL Server là gì? Phát biểu nào sau đây không đúng?

A. SQL Server là một hệ quản trị cơ sở dữ liệu quan hệ (RDBMS) do Microsoft phát triển.

**B. SQL Server không có các công cụ phân tích dữ liệu, không thể tích hợp các công cụ phân tích dữ liệu.**

C. SQL Server tuân thủ mô hình quan hệ, tổ chức dữ liệu thành các bảng với các hàng và cột.

D. SQL Server có nhiều phiên bản khác nhau, từ phi

Câu 3.2 Hệ quản trị cơ sở dữ liệu quan hệ (RDBMS) bao gồm những thành phần nào? Phát biểu nào sau đây không đúng?

**A. Công cụ đồ họa (SQL Server Management Studio - SSMS) dùng để vẽ các hình khối cơ bản.**

B. Công cụ cơ sở dữ liệu (Database engine) là thành phần cốt lõi, chịu trách nhiệm lưu trữ và quản lý dữ liệu.

C. Công cụ dòng lệnh (sqlcmd) cho phép làm việc với Database engine thông qua Command Prompt hoặc PowerShell.

D. RDBMS còn bao gồm các công cụ quản lý khác, dịch vụ nền, thư viện và các tính năng bổ sung.

Câu 3.3 Một số mục quan trọng của cửa sổ Connect to Server là gì? Phát biểu nào sau đây không đúng?

A. Server type cho phép chọn loại máy chủ SQL Server muốn kết nối

B. Server name là mục nhập tên hoặc địa chỉ IP của máy chủ SQL Server.

**C. Authentication cho phép chọn phương thức xác thực. Kiểu xác thực SQL Server Authentication sử dụng thông tin đăng nhập của Windows.**

D. Có 2 kiểu xác thực là Windows Authentication và SQL Server Authentication.

Câu 4.1 Khi tạo bảng trong cơ sở dữ liệu, một số ràng buộc thường được sử dụng. Phát biểu nào sau đây không đúng?

A. NOT NULL đảm bảo cột không được phép có giá trị NULL.

**B. FOREIGN KEY chỉ định cột là khóa chính của bảng khác.**

C. PRIMARY KEY chỉ định cột là khóa chính, giá trị phải duy nhất và không được NULL.

D. UNIQUE đảm bảo giá trị của cột là duy nhất.

Câu 4.2 Khi tạo bảng trong cơ sở dữ liệu, một số kiểu dữ liệu thường được sử dụng. Phát biểu nào sau đây không đúng?

**A. CHAR(n) dùng để lưu trữ chuỗi ký tự có độ dài thay đổi.**

B. INT dùng để lưu trữ số nguyên.

C. VARCHAR(n) dùng để lưu trữ chuỗi ký tự có độ dài tối đa là n.

D. DATE dùng để lưu trữ ngày tháng năm.

Câu 5.1 Khóa chính (primary key) là gì? Phát biểu nào sau đây không đúng?

A. Khóa chính dùng để xác định duy nhất mỗi bản ghi trong một bảng.

**B. Giá trị của khóa chính có thể trùng lặp.**

C. Mỗi bảng chỉ có một khóa chính.

D. Giá trị của khóa chính không được mang giá trị NULL.

Câu 5.2 Khóa ngoại (foreign key) là gì? Phát biểu nào sau đây không đúng?

A. Khóa ngoại được sử dụng để liên kết hai bảng với nhau.

B. Khóa ngoại của một bảng tham chiếu đến khóa chính của một bảng khác.

C. Khóa ngoại giúp đảm bảo tính toàn vẹn tham chiếu giữa các bảng.

**D. Khóa ngoại dùng để xác định duy nhất mỗi bản ghi trong một bảng.**

Câu hỏi 6.2 Phép chọn (SELECT) trong SQL được sử dụng để làm gì? Phát biểu nào sau đây không đúng?

A. Lệnh SELECT cho phép lấy dữ liệu từ các cột cụ thể hoặc tất cả các cột trong một bảng.

B. Mệnh đề WHERE được sử dụng để lọc dữ liệu dựa trên các điều kiện cụ thể.

**C. Mệnh đề ORDER BY được sử dụng để nhóm các bản ghi có giá trị giống nhau trong một cột.**

D. Mệnh đề GROUP BY cho phép nhóm các bản ghi có giá trị giống nhau trong một cột.
## Chương 6: Kiến thức thêm
### 6.1 Cách để biết ngôn ngữ mà phía server sử dụng của 1 website
### 6.2 Phân tích quá trình xử lý của web server (Quan trọng)
![image](md_assets/webserver.png)

[1] nhận request

[2] phân tích request, gửi tới ứng dụng web để xử lý

[3] đọc dữ liệu từ cơ sở dữ liệu

[4] đổ dữ liệu vào trang HTML (các template HTML)

[5] gửi trang HTML (đã bao gồm dữ liệu) (response) về trình duyệt người dùng

[6] trình duyệt người dùng hiển thị nội dung response

[7] trình duyệt gửi riêng một request khác để lấy các nội dung tĩnh của ứng dụng web (HTML, CSS, JavaScript, hình ảnh, và các tài nguyên khác)
### 4.3 Chu trình học tập Kolb
### 4.4 Code một dự án trong 1 tiếng ?
Code 1 dự án trong 1 tiếng, nghe thật điên rồ đúng không ? Nhưng nhiều người đang lãng phí cả tuần bởi vì họ làm mọi thứ trở nên quá phức tạp. 

Họ dành nhiều thời gian để
* Thiết lập các công cụ
* Viết các đoạn mã hoàn hảo
* Sửa các tiểu tiết **không quan trọng**

Nhưng nếu bạn tập trung vào nhưng thứ thật sự quan trọng thì bạn có thể hoàn thành công việc nhanh hơn bạn nghĩ
Dưới đây là cách để bạn thực hiện điều đó:
* **Bỏ qua giai đoạn setup**
  Nhiều người dành hơn 30 phút để: cài đặt các framework, triển khai database...

  Nhưng bạn thật sự không cần những điều đó vào lúc bắt đầu. Thay vì cài đặt thủ công tất cả mọi thứ thì bạn nên dùng các mẫu có sẵn (templates), các đoạn mã có sẵn ...

  Những thứ này giúp bạn tiết kiệm thời gian và nhảy thẳng vào những việc quan trọng
  * Bạn cần một trang web ? Dùng mẫu có sẵn với phong cách và thiết kế đơn giản
  * Bạn đang xây dựng một API ? Dùng một framework xử lý khâu routing và authentication cho bạn
  * Bạn cần một cơ sở dữ lieuj ? Cứ dùng một file JSON hoặc sang hơn là Firebase thay vì thiết lập MySQL từ con số 0
* **"Chôm" cấu trúc có sẵn**
  Thay vì tự mình nghĩ ra mọi thứ thì cứ lấy đại cái cấu trúc ở đâu đó về đi, cứ search Google là "Best folder structure for [dự án của bạn]" và chọn một cái mà bạn ưng ý

  Điều này làm mã của bạn dễ đọc, định hướng hơn
* **Code trâu trước, Fix sau**
  Nhiều người hay mắc lỗi là muốn làm mọi thứ "sống động", có khả năng tái sử dụng và linh hoạt nhất có thể

  Thay vì thế thì bạn hãy code thẳng luôn:
  * Bạn cần dữ liệu (data) ? Viết thẳng trong code luôn thay vì setup một cái database hẳn hoi
  * Bạn cần một cái nút ? Cứ làm cho nó hoạt động được là tốt rồi, không cần phải có hiệu ứng hay màu sắc lòe loẹt gì hết
  * Bạn cần xác thực người dùng ? Dùng đoạn mã đơn giản để kiểm tra trước khi đưa OAuth và hay gì đó

  Một khi bạn đã hoàn thành được dự án thì hãy quay lại và cải tiển sau

  **Chìa khóa ở đây là làm cho nó hoạt động trước rồi cải tiến nó sau**
* **Dùng AI, nhưng đừng hoàn toàn tin nó**
  AI có thể code nhanh nhưng đôi khi chúng có thể sai

  Thay vào đó thì hãy dùng AI một cách thông minh:
  * Để AI xử lý các đoạn code lặp lại
  * Dùng AI cho ác đoạn mã có logic đơn giản, nhưng luôn kiểm tra chúng trước khi dùng
  * **KHÔNG** để AI viết các đoạn mã phức tạp, chúng sẽ phạm lỗi khiến dự án của bạn bị "nát"
  * **KHÔNG** để AI viết quá nhiều chức năng cùng lúc, chúng có thể xóa các chức năng trước đó bạn đã làm
* **Tạo ra con vịt, cải tiến thành thiên nga**
  Nhiều người không thể hoàn thành dự án của họ vì họ muốn nó phải hoàn hảo trước khi ra mắt

  Một dự án đơn giản, hoàn thiện luôn tốt hơn dự án không bao giờ hoàn thành được
  * Nếu UI của bạn xấu, không ai quan tâm đâu, để sau rồi hẳn sửa
  * Nếu code của bạn không hoàn hảo, sửa nó sau khi hoàn thành dự án
  * Nếu dự án của bạn thiếu tính năng, cập nhật sau

  Các ứng dụng như FaceBook, Instagram... đều bắt đầu theo cách này
  
**Tóm lại, cách tốt nhất để xây dựng dự án là lược bỏ những bước không cần thiết, tập trung vào những gì quan trọng và cải tiến sau**
### 4.5 Cú pháp của URL
URL (Uniform Resource Locator) là địa chỉ duy nhất, dùng để định vị tài nguyên trên web, như trang HTML, API, hoặc tập tin tài nguyên tĩnh (ví dụ hình ảnh, âm thanh)

Cú pháp của một URL: ```protocol://domain:port/path?query#fragment```

Giải thích các thành phần của một URL:
- protocol (giao thức): xác định phương thức giao tiếp mà trình duyệt sử dụng để giao tiếp với server. Các giao thức phổ biến bao gồm http (Hypertext Transfer Protocol) và https (Hypertext Transfer Protocol Secure).
- domain (tên miền): tên của máy server. Ví dụ: google.com, wikipedia.org, localhost.
- port (cổng) (tùy chọn): số cổng mà server sử dụng để lắng nghe yêu cầu (request). Cổng mặc định cho http là 80 và cho https là 443.
- path (đường dẫn): đường dẫn đến một vị trí (thư mục, tập tin, API) trên server. Ví dụ: /images/logo.png, /articles/how-to-use-url, /users.
- query (truy vấn) (tùy chọn): chuỗi các tham số được sử dụng để truyền dữ liệu đến server. Ví dụ: ?name=shoes&size=40.
- fragment (phân mảnh) (tùy chọn): một phần cụ thể của tài nguyên, thường là một phần của trang HTML. Ví dụ: #section-2.
