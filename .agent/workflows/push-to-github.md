---
description: Hướng dẫn đẩy thay đổi từ local lên GitHub Pages
---

# Hướng dẫn đẩy thay đổi lên GitHub

Sau khi bạn đã sửa file `data.js` (hoặc bất kỳ file nào) trên máy tính, làm theo các bước sau để cập nhật lên trang web https://giangcoi2812-arch.github.io/Rosa_villa/

---

## Bước 1: Mở Terminal/PowerShell

Mở **PowerShell** hoặc **Terminal** và di chuyển vào thư mục dự án:

```powershell
cd "d:\cào dữ liệu\rosa-villa"
```

---

## Bước 2: Kiểm tra các file đã thay đổi

Chạy lệnh sau để xem những file nào đã được sửa:

```powershell
git status
```

Bạn sẽ thấy danh sách các file đã thay đổi hiển thị màu đỏ dưới mục "Changes not staged for commit".

---

## Bước 3: Thêm file vào staging (đóng gói)

**Cách 1:** Thêm một file cụ thể:
```powershell
git add js/data.js
```

**Cách 2:** Thêm tất cả các file đã thay đổi:
```powershell
git add .
```

---

## Bước 4: Commit (xác nhận thay đổi)

Tạo một commit với message mô tả ngắn gọn những gì bạn đã sửa:

```powershell
git commit -m "Mô tả ngắn về thay đổi"
```

**Ví dụ:**
```powershell
git commit -m "Cap nhat mo ta san Pickleball"
```

> **Lưu ý:** Nên dùng tiếng Anh không dấu hoặc tiếng Việt không dấu để tránh lỗi encoding.

---

## Bước 5: Push lên GitHub (đẩy lên server)

```powershell
git push origin main
```

Nếu được yêu cầu đăng nhập, nhập thông tin tài khoản GitHub của bạn.

---

## Bước 6: Chờ GitHub Pages cập nhật

- Sau khi push thành công, đợi khoảng **1-2 phút** để GitHub Pages tự động build và deploy.
- Truy cập lại trang web để kiểm tra: https://giangcoi2812-arch.github.io/Rosa_villa/
- Nếu chưa thấy thay đổi, thử **Ctrl + F5** để xóa cache và refresh.

---

## Tóm tắt nhanh (Copy & Paste)

```powershell
cd "d:\cào dữ liệu\rosa-villa"
git status
git add .
git commit -m "Cap nhat noi dung"
git push origin main
```

---

## Xử lý lỗi thường gặp

### Lỗi: "Please tell me who you are"
Chạy 2 lệnh sau để cấu hình thông tin:
```powershell
git config --global user.email "email_cua_ban@gmail.com"
git config --global user.name "Ten cua ban"
```

### Lỗi: "Authentication failed"
- Kiểm tra lại username/password GitHub
- Hoặc tạo Personal Access Token tại: https://github.com/settings/tokens

### Lỗi: "Updates were rejected"
Có người khác đã push trước bạn, cần pull về trước:
```powershell
git pull origin main
git push origin main
```
