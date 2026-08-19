# CRUD User API Documentation

## 1. Thông tin chung

- Base URL: `http://localhost:3001`
- Resource: `/api/users`
- Format dữ liệu: JSON
- Không cần xác thực (JWT / API key)
- Swagger UI: `http://localhost:3001/swagger`

## 2. Model dữ liệu

### User

```json
{
  "_id": "64f1c0c2d0d0a9e0c0f0f0f0",
  "name": "Nguyễn Văn A",
  "email": "nguyenvana@example.com",
  "age": 25,
  "createdAt": "2026-08-13T10:00:00.000Z",
  "updatedAt": "2026-08-13T10:00:00.000Z"
}
```

### Payload tạo mới / cập nhật

```json
{
  "name": "Nguyễn Văn A",
  "email": "nguyenvana@example.com",
  "age": 25
}
```

> Lưu ý:
>
> - `name` là bắt buộc
> - `email` là bắt buộc và phải là định dạng email
> - `age` có thể thiếu, mặc định là 18 nếu không gửi

---

## 3. Danh sách route

### 1) Tạo người dùng

- Method: `POST`
- URL: `/api/users`

#### Payload

```json
{
  "name": "Nguyễn Văn A",
  "email": "nguyenvana@example.com",
  "age": 25
}
```

#### Response thành công

- Status: `201 Created`

```json
{
  "message": "Thành công",
  "data": {
    "_id": "64f1c0c2d0d0a9e0c0f0f0f0",
    "name": "Nguyễn Văn A",
    "email": "nguyenvana@example.com",
    "age": 25,
    "createdAt": "2026-08-13T10:00:00.000Z",
    "updatedAt": "2026-08-13T10:00:00.000Z"
  }
}
```

#### Response lỗi

- Status: `500 Internal Server Error`

```json
{
  "error": "MongoServerError: E11000 duplicate key error collection"
}
```

#### Example fetch

```js
fetch("http://localhost:3001/api/users", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    name: "Nguyễn Văn A",
    email: "nguyenvana@example.com",
    age: 25,
  }),
})
  .then((res) => res.json())
  .then((data) => console.log(data));
```

---

### 2) Lấy tất cả người dùng

- Method: `GET`
- URL: `/api/users`

#### Response thành công

- Status: `200 OK`

```json
[
  {
    "_id": "64f1c0c2d0d0a9e0c0f0f0f0",
    "name": "Nguyễn Văn A",
    "email": "nguyenvana@example.com",
    "age": 25,
    "createdAt": "2026-08-13T10:00:00.000Z",
    "updatedAt": "2026-08-13T10:00:00.000Z"
  },
  {
    "_id": "64f1c0c3d0d0a9e0c0f0f0f1",
    "name": "Nguyễn Văn B",
    "email": "nguyenvanb@example.com",
    "age": 30,
    "createdAt": "2026-08-13T10:10:00.000Z",
    "updatedAt": "2026-08-13T10:10:00.000Z"
  }
]
```

#### Example fetch

```js
fetch("http://localhost:3001/api/users")
  .then((res) => res.json())
  .then((data) => console.log(data));
```

---

### 3) Lấy thông tin người dùng theo ID

- Method: `GET`
- URL: `/api/users/:id`

#### Ví dụ

```txt
/api/users/64f1c0c2d0d0a9e0c0f0f0f0
```

#### Response thành công

- Status: `200 OK`

```json
{
  "_id": "64f1c0c2d0d0a9e0c0f0f0f0",
  "name": "Nguyễn Văn A",
  "email": "nguyenvana@example.com",
  "age": 25,
  "createdAt": "2026-08-13T10:00:00.000Z",
  "updatedAt": "2026-08-13T10:00:00.000Z"
}
```

#### Response không tìm thấy

- Status: `404 Not Found`

```json
{
  "message": "Không tìm thấy"
}
```

#### Example fetch

```js
fetch("http://localhost:3001/api/users/64f1c0c2d0d0a9e0c0f0f0f0")
  .then((res) => res.json())
  .then((data) => console.log(data));
```

---

### 4) Cập nhật người dùng

- Method: `PUT`
- URL: `/api/users/:id`

#### Payload

```json
{
  "name": "Nguyễn Văn B",
  "email": "nguyenvanb@example.com",
  "age": 30
}
```

#### Response thành công

- Status: `200 OK`

```json
{
  "_id": "64f1c0c2d0d0a9e0c0f0f0f0",
  "name": "Nguyễn Văn B",
  "email": "nguyenvanb@example.com",
  "age": 30,
  "createdAt": "2026-08-13T10:00:00.000Z",
  "updatedAt": "2026-08-13T10:20:00.000Z"
}
```

#### Example fetch

```js
fetch("http://localhost:3001/api/users/64f1c0c2d0d0a9e0c0f0f0f0", {
  method: "PUT",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    name: "Nguyễn Văn B",
    email: "nguyenvanb@example.com",
    age: 30,
  }),
})
  .then((res) => res.json())
  .then((data) => console.log(data));
```

---

### 5) Xóa người dùng

- Method: `DELETE`
- URL: `/api/users/:id`

#### Ví dụ

```txt
/api/users/64f1c0c2d0d0a9e0c0f0f0f0
```

#### Response thành công

- Status: `200 OK`

```json
{
  "message": "Đã xóa"
}
```

#### Example fetch

```js
fetch("http://localhost:3001/api/users/64f1c0c2d0d0a9e0c0f0f0f0", {
  method: "DELETE",
})
  .then((res) => res.json())
  .then((data) => console.log(data));
```

---

## 4. Bảng tóm tắt nhanh

| Method | URL              | Mô tả              | Payload                | Response                |
| ------ | ---------------- | ------------------ | ---------------------- | ----------------------- |
| GET    | `/api/users`     | Lấy danh sách user | Không cần              | `Array<User>`           |
| POST   | `/api/users`     | Tạo user mới       | `{ name, email, age }` | `{ message, data }`     |
| GET    | `/api/users/:id` | Lấy user theo ID   | Không cần              | `User`                  |
| PUT    | `/api/users/:id` | Cập nhật user      | `{ name, email, age }` | `User`                  |
| DELETE | `/api/users/:id` | Xóa user           | Không cần              | `{ message: "Đã xóa" }` |

---

## 5. Ghi chú cho frontend

- Base URL nên lưu trong file config như:

```js
export const API_BASE_URL = "http://localhost:3001";
```

- Khi gọi `POST` hoặc `PUT`, luôn gửi `Content-Type: application/json`.
- Nên xử lý trường hợp lỗi `404`, `500` và `duplicate email`.
- Nếu cần import Swagger cho tài liệu trực tiếp, truy cập `/swagger`.
