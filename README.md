# Rosa Villa Tam Dao - Landing Page

Website giới thiệu "Rosa Villa Tam Dao Golf & Resort" với phong cách hiện đại, sang trọng và tập trung vào trải nghiệm người dùng.

## 🚀 Hướng Dẫn Chạy (Quick Start)

Dự án sử dụng **HTML/CSS/JS thuần** nên không cần cài đặt phức tạp.

### Cách 1: Mở trực tiếp (Cơ bản)
1. Truy cập thư mục `rosa-villa`.
2. Click đúp vào file `index.html`.
3. Trình duyệt sẽ mở trang web.

### Cách 2: Dùng Live Server (Khuyên dùng)
Để tránh lỗi hình ảnh hoặc bảo mật (CORS) khi chạy cục bộ:
1. Mở VS Code tại thư mục `rosa-villa`.
2. Cài đặt Extension **Live Server**.
3. Chuột phải vào `index.html` -> Chọn **Open with Live Server**.

---

## 📂 Cấu Trúc Thư Mục

```
/rosa-villa
  ├── /assets
  │   ├── /images      # Chứa ảnh (hero.jpg, room-demo.jpg, ...)
  │   └── /videos      # Chứa video (nếu có)
  ├── /css
  │   └── style.css    # Toàn bộ Style của trang
  ├── /js
  │   ├── main.js      # Logic xử lý (Menu, Lightbox...)
  │   └── data.js      # ⚙️ CẤU HÌNH DỮ LIỆU (Sửa cái này để thay nội dung)
  └── index.html       # File chính
```

---

## 🛠 Hướng Dẫn Thay Đổi Nội Dung

Bạn **KHÔNG CẦN** biết code để thay đổi số điện thoại, giá tiền hay menu món ăn. Chỉ cần sửa file `js/data.js`.

### 1. Thay đổi thông tin liên hệ (Hotline/Zalo)
Mở `js/data.js`, tìm phần `info`:
```javascript
info: {
    name: "Rosa Villa...",
    phone: "0904337336", // Sửa số này
    zaloLink: "https://zalo.me/0904337336", // Sửa link này
    ...
}
```

### 2. Thay đổi ảnh thật
1. Copy ảnh của bạn vào thư mục `assets/images`.
2. Mở `js/data.js`, tìm phần `images` hoặc `hero`.
3. Sửa đường dẫn:
```javascript
// Ví dụ thay ảnh nền Hero
hero: {
    bgImage: "assets/images/ANH_CUA_BAN.jpg", 
    ...
}
```

### 3. Cập nhật Menu món ăn
Mở `js/data.js`, tìm phần `food`. Bạn có thể thêm, xóa hoặc sửa món ăn tùy ý.

---

## 🎨 Công Nghệ Sử Dụng
- **HTML5 / CSS3**: Giao diện Responsive, chuẩn SEO.
- **JavaScript (ES6)**: Xử lý logic động.
- **Google Fonts**: Playfair Display & Inter.
- **FontAwesome**: Icon chuyên nghiệp.
