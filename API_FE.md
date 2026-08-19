# API Documentation cho Frontend

## 1) Base URL

```txt
http://localhost:3001
```

Swagger UI:

```txt
http://localhost:3001/swagger
```

## 2) Thông tin chung

- Format request: `application/json`
- Không cần authentication/token
- Tất cả endpoint đều thuộc namespace:

```txt
/api/users
```

## 3) Model User

```json
{
  "_id": "64d9a0d7d5d2e9c9d89b1234",
  "name": "Nguyễn Văn A",
  "email": "a@example.com",
  "age": 22,
  "createdAt": "2026-08-13T10:00:00.000Z",
  "updatedAt": "2026-08-13T10:00:00.000Z",
  "__v": 0
}
```

### Bảng field

| Field     | Type   | Required | Mô tả                    |
| --------- | ------ | -------: | ------------------------ |
| name      | string |      yes | Tên người dùng           |
| email     | string |      yes | Email, unique            |
| age       | number |       no | Tuổi, default 18         |
| \_id      | string |     auto | Mongo ObjectId           |
| createdAt | string |     auto | Thời gian tạo            |
| updatedAt | string |     auto | Thời gian cập nhật       |
| \_\_v     | number |     auto | Version key của Mongoose |

## 4) Routes chi tiết

### 4.1 Tạo người dùng

#### Endpoint

```http
POST /api/users
```

#### Payload

```json
{
  "name": "Nguyễn Văn A",
  "email": "a@example.com",
  "age": 22
}
```

#### Response thành công

Status: `201 Created`

```json
{
  "message": "Thành công",
  "data": {
    "_id": "64d9a0d7d5d2e9c9d89b1234",
    "name": "Nguyễn Văn A",
    "email": "a@example.com",
    "age": 22,
    "createdAt": "2026-08-13T10:00:00.000Z",
    "updatedAt": "2026-08-13T10:00:00.000Z",
    "__v": 0
  }
}
```

#### Response lỗi

Status: `500 Internal Server Error`

```json
{
  "error": "Message lỗi từ server"
}
```

---

### 4.2 Lấy danh sách người dùng

#### Endpoint

```http
GET /api/users
```

#### Payload

Không có body.

#### Response thành công

Status: `200 OK`

```json
[
  {
    "_id": "64d9a0d7d5d2e9c9d89b1234",
    "name": "Nguyễn Văn A",
    "email": "a@example.com",
    "age": 22,
    "createdAt": "2026-08-13T10:00:00.000Z",
    "updatedAt": "2026-08-13T10:00:00.000Z",
    "__v": 0
  },
  {
    "_id": "64d9a0d7d5d2e9c9d89b5678",
    "name": "Trần Thị B",
    "email": "b@example.com",
    "age": 25,
    "createdAt": "2026-08-13T11:00:00.000Z",
    "updatedAt": "2026-08-13T11:00:00.000Z",
    "__v": 0
  }
]
```

---

### 4.3 Lấy thông tin người dùng theo ID

#### Endpoint

```http
GET /api/users/:id
```

Ví dụ:

```http
GET /api/users/64d9a0d7d5d2e9c9d89b1234
```

#### Payload

Không có body.

#### Response thành công

Status: `200 OK`

```json
{
  "_id": "64d9a0d7d5d2e9c9d89b1234",
  "name": "Nguyễn Văn A",
  "email": "a@example.com",
  "age": 22,
  "createdAt": "2026-08-13T10:00:00.000Z",
  "updatedAt": "2026-08-13T10:00:00.000Z",
  "__v": 0
}
```

#### Response không tìm thấy

Status: `404 Not Found`

```json
{
  "message": "Không tìm thấy"
}
```

---

### 4.4 Cập nhật người dùng

#### Endpoint

```http
PUT /api/users/:id
```

Ví dụ:

```http
PUT /api/users/64d9a0d7d5d2e9c9d89b1234
```

#### Payload

```json
{
  "name": "Nguyễn Văn A mới",
  "email": "new_email@example.com",
  "age": 23
}
```

> Dữ liệu có thể cập nhật partial hoặc full, tùy vào payload bạn gửi.

#### Response thành công

Status: `200 OK`

```json
{
  "_id": "64d9a0d7d5d2e9c9d89b1234",
  "name": "Nguyễn Văn A mới",
  "email": "new_email@example.com",
  "age": 23,
  "createdAt": "2026-08-13T10:00:00.000Z",
  "updatedAt": "2026-08-13T12:00:00.000Z",
  "__v": 0
}
```

#### Response lỗi

Có thể trả về lỗi server nếu ID không hợp lệ hoặc cập nhật thất bại:

```json
{
  "error": "Message lỗi từ server"
}
```

---

### 4.5 Xóa người dùng

#### Endpoint

```http
DELETE /api/users/:id
```

Ví dụ:

```http
DELETE /api/users/64d9a0d7d5d2e9c9d89b1234
```

#### Payload

Không có body.

#### Response thành công

Status: `200 OK`

```json
{
  "message": "Đã xóa"
}
```

---

## 5) Ví dụ gọi API bằng fetch

### Tạo user

```javascript
fetch("http://localhost:3001/api/users", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    name: "Nguyễn Văn A",
    email: "a@example.com",
    age: 22,
  }),
})
  .then((res) => res.json())
  .then((data) => console.log(data));
```

### Lấy tất cả user

```javascript
fetch("http://localhost:3001/api/users")
  .then((res) => res.json())
  .then((data) => console.log(data));
```

### Cập nhật user

```javascript
fetch("http://localhost:3001/api/users/64d9a0d7d5d2e9c9d89b1234", {
  method: "PUT",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    name: "Nguyễn Văn A mới",
    age: 23,
  }),
})
  .then((res) => res.json())
  .then((data) => console.log(data));
```

### Xóa user

```javascript
fetch("http://localhost:3001/api/users/64d9a0d7d5d2e9c9d89b1234", {
  method: "DELETE",
})
  .then((res) => res.json())
  .then((data) => console.log(data));
```

## 6) Ghi chú cho FE

- Tránh gửi `email` trùng với user đã tồn tại.
- Nếu cần validation ở frontend, nên kiểm tra:
  - `name` không được rỗng
  - `email` đúng định dạng
  - `age` là số nguyên hợp lệ
- Khi dùng route `GET /api/users/:id`, đảm bảo `id` là ObjectId hợp lệ của MongoDB.

## 7) Tài liệu tham khảo

- Swagger UI: `http://localhost:3001/swagger`
- File route gốc: `src/routes/userRoutes.js`
- File controller: `src/controllers/userController.js`
