import swaggerJsdoc from "swagger-jsdoc";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const swaggerDefinition = {
  openapi: "3.0.3",
  info: {
    title: "CRUD User API",
    version: "1.0.0",
    description:
      "API quản lý người dùng cho project CRUD User. Hiện tại các route không sử dụng xác thực JWT/API Key.",
  },
  servers: [
    {
      url: "http://localhost:3001",
      description: "Local development server",
    },
  ],
  tags: [
    {
      name: "Users",
      description: "Các thao tác CRUD với người dùng",
    },
  ],
  components: {
    schemas: {
      User: {
        type: "object",
        properties: {
          _id: {
            type: "string",
            example: "64f1c0c2d0d0a9e0c0f0f0f0",
          },
          name: {
            type: "string",
            example: "Nguyễn Văn A",
          },
          email: {
            type: "string",
            format: "email",
            example: "nguyenvana@example.com",
          },
          age: {
            type: "integer",
            example: 25,
          },
          createdAt: {
            type: "string",
            format: "date-time",
          },
          updatedAt: {
            type: "string",
            format: "date-time",
          },
        },
      },
      UserCreateInput: {
        type: "object",
        required: ["name", "email"],
        properties: {
          name: {
            type: "string",
            example: "Nguyễn Văn A",
          },
          email: {
            type: "string",
            format: "email",
            example: "nguyenvana@example.com",
          },
          age: {
            type: "integer",
            example: 25,
          },
        },
      },
      UserUpdateInput: {
        type: "object",
        properties: {
          name: {
            type: "string",
            example: "Nguyễn Văn B",
          },
          email: {
            type: "string",
            format: "email",
            example: "nguyenvanb@example.com",
          },
          age: {
            type: "integer",
            example: 30,
          },
        },
      },
      SuccessResponse: {
        type: "object",
        properties: {
          message: {
            type: "string",
            example: "Thành công",
          },
          data: {
            $ref: "#/components/schemas/User",
          },
        },
      },
      ErrorResponse: {
        type: "object",
        properties: {
          message: {
            type: "string",
            example: "Không tìm thấy",
          },
          error: {
            type: "string",
            example: "Internal Server Error",
          },
        },
      },
    },
  },
};

const options = {
  definition: swaggerDefinition,
  apis: [`${__dirname}/routes/*.js`],
};

export const swaggerSpec = swaggerJsdoc(options);
