# Prompt tạo giao diện Frontend cho CRUD User API

Bạn là một UI/UX designer và frontend developer chuyên nghiệp. Hãy tạo giao diện web cho dự án API CRUD User theo đúng dữ liệu và route backend sau:

## 1. Thông tin project

- Project: CRUD User Management
- Backend API: Node.js + Express + MongoDB
- Base URL: http://localhost:3001
- API resource: /api/users
- Không cần authentication
- Có sẵn Swagger docs tại: http://localhost:3001/swagger

## 2. API cần hỗ trợ

### 1. Get all users

- Method: GET
- Endpoint: /api/users
- Response: array user

### 2. Create user

- Method: POST
- Endpoint: /api/users
- Payload:

```json
{
  "name": "Nguyễn Văn A",
  "email": "nguyenvana@example.com",
  "age": 25
}
```

- Response:

```json
{
  "message": "Thành công",
  "data": {
    "_id": "...",
    "name": "Nguyễn Văn A",
    "email": "nguyenvana@example.com",
    "age": 25,
    "createdAt": "...",
    "updatedAt": "..."
  }
}
```

### 3. Get user by id

- Method: GET
- Endpoint: /api/users/:id
- Response: object user

### 4. Update user

- Method: PUT
- Endpoint: /api/users/:id
- Payload:

```json
{
  "name": "Nguyễn Văn B",
  "email": "nguyenvanb@example.com",
  "age": 30
}
```

- Response: object user đã update

### 5. Delete user

- Method: DELETE
- Endpoint: /api/users/:id
- Response:

```json
{
  "message": "Đã xóa"
}
```

## 3. Data model

```json
{
  "_id": "string",
  "name": "string",
  "email": "string",
  "age": 25,
  "createdAt": "date",
  "updatedAt": "date"
}
```

## 4. Yêu cầu giao diện

Hãy thiết kế giao diện frontend cho hệ thống quản lý người dùng với các chức năng sau:

1. Trang danh sách người dùng

- Hiển thị dạng table hoặc card list
- Có cột: Tên, Email, Tuổi, Hành động
- Nút Add User để mở modal/form tạo mới
- Nút Edit để sửa thông tin user
- Nút Delete để xóa user
- Có nút View Detail nếu muốn xem chi tiết user

2. Form tạo và cập nhật user

- Input: name, email, age
- Validate:
  - name không được để trống
  - email phải hợp lệ
  - age phải là số và hợp lệ
- Sau khi submit thành công, làm refresh lại list

3. Modal xác nhận xóa

- Hiển thị tên user cần xóa
- Confirm / Cancel

4. Trang chi tiết user

- Hiển thị thông tin đầy đủ của user
- Có nút quay lại, chỉnh sửa, xóa

5. UX/UI yêu cầu

- Giao diện hiện đại, sạch, dễ sử dụng
- Màu sắc: trắng + xanh lá / xanh dương hoặc pastel
- Dùng spacing rõ ràng, border radius mềm mại
- Dùng shadow nhẹ cho card/modal
- Typography rõ ràng, dễ đọc
- Responsive cho mobile và desktop
- Hiển thị trạng thái loading và empty state
- Thêm toast/snackbar khi tạo, cập nhật, xóa thành công

## 5. Frontend stack gợi ý

- React + Vite hoặc Next.js
- CSS: Tailwind CSS hoặc CSS Modules
- Có thể dùng React Hook Form hoặc form state đơn giản
- Dùng fetch/axios để gọi API
- Cấu trúc file nên rõ ràng như:
  - src/api/userApi.js
  - src/components/UserTable.jsx
  - src/components/UserForm.jsx
  - src/components/UserModal.jsx
  - src/pages/UserPage.jsx

## 6. Output cần tạo

Hãy trả về:

1. Một bản mô tả giao diện đẹp và chi tiết
2. Cấu trúc component theo từng phần
3. Mẫu code React cho UI chính
4. Mẫu code gọi API với fetch/axios
5. Mẫu logic CRUD hoàn chỉnh
6. Có thể dùng ngay để build frontend dự án này

## 7. Yêu cầu bắt buộc

- Chỉ sử dụng dữ liệu thực từ API backend đã cho
- Không sinh UI sai với payload/response thực tế
- Phải dựa đúng endpoint và format JSON backend
- Tạo giao diện dễ hiểu, hiện đại và sẵn sàng dùng cho dự án thực tế

Tạo toàn bộ giao diện thiết kế frontend theo phong cách clean, dễ triển khai và phù hợp với CRUD user API.
