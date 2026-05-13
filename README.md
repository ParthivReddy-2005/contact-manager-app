# 📇 Contact Manager API

A secure and scalable RESTful API built using **Node.js**, **Express.js**, and **MongoDB** for managing personal contacts with JWT Authentication.

---

# 📌 Table of Contents

- [Project Overview](#-project-overview)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Installation](#-installation)
- [Environment Variables](#-environment-variables)
- [Running the Project](#-running-the-project)
- [API Endpoints](#-api-endpoints)
- [Authentication](#-authentication)
- [Sample Request Bodies](#-sample-request-bodies)
- [Testing](#-testing)
- [Learning Outcomes](#-learning-outcomes)
- [Future Enhancements](#-future-enhancements)
- [Contributing](#-contributing)
- [License](#-license)
- [Author](#-author)

---

# 📖 Project Overview

The Contact Manager API is a backend application that allows authenticated users to manage their personal contacts securely. The project follows the MVC architecture and includes authentication, middleware handling, CRUD operations, and MongoDB database integration.

---

# ✨ Features

- User Registration & Login
- JWT Authentication & Authorization
- Protected Routes
- Create, Read, Update, Delete Contacts
- MongoDB Database Integration
- Middleware-Based Error Handling
- Token Validation Middleware
- RESTful API Design
- Secure Password Storage

---

# 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| Node.js | Backend Runtime |
| Express.js | Web Framework |
| MongoDB | Database |
| Mongoose | ODM for MongoDB |
| JWT | Authentication |
| bcrypt | Password Hashing |
| dotenv | Environment Variables |
| Nodemon | Development Server |

---

# 📂 Project Structure

```bash
contact-manager-api/
│
├── config/
│   └── dbConnection.js
│
├── controllers/
│   ├── contactControllers.js
│   └── userController.js
│
├── middleware/
│   ├── errorHandler.js
│   └── validateTokenHandler.js
│
├── models/
│   ├── contactModel.js
│   └── userModel.js
│
├── routes/
│   ├── contactRoutes.js
│   └── userRoutes.js
│
├── constants.js
├── server.js
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

---

# ⚙️ Installation

## 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/contact-manager-api.git
```

## 2️⃣ Navigate to Project Directory

```bash
cd contact-manager-api
```

## 3️⃣ Install Dependencies

```bash
npm install
```

---

# 🔑 Environment Variables

Create a `.env` file in the root directory and add the following:

```env
PORT=5000
CONNECTION_STRING=your_mongodb_connection_string
ACCESS_TOKEN_SECRET=your_secret_key
```

---

# ▶️ Running the Project

## Development Mode

```bash
npm run dev
```

## Production Mode

```bash
npm start
```

---

# 📡 API Endpoints

## 👤 User Routes

| Method | Endpoint | Description |
|--------|-----------|-------------|
| POST | `/api/users/register` | Register a New User |
| POST | `/api/users/login` | Login User |
| GET | `/api/users/current` | Get Current Logged-in User |

---

## 📇 Contact Routes

| Method | Endpoint | Description |
|--------|-----------|-------------|
| GET | `/api/contacts` | Get All Contacts |
| POST | `/api/contacts` | Create New Contact |
| GET | `/api/contacts/:id` | Get Contact by ID |
| PUT | `/api/contacts/:id` | Update Contact |
| DELETE | `/api/contacts/:id` | Delete Contact |

---

# 🔐 Authentication

Protected routes require a JWT token in the request header.

## Authorization Header

```http
Authorization: Bearer your_jwt_token
```

---

# 📦 Sample Request Bodies

## Register User

```json
{
  "username": "John Doe",
  "email": "john@example.com",
  "password": "123456"
}
```

## Login User

```json
{
  "email": "john@example.com",
  "password": "123456"
}
```

## Create Contact

```json
{
  "name": "David",
  "email": "david@example.com",
  "phone": "9876543210"
}
```

---

# 🧪 Testing

You can test the API endpoints using:

- Postman
- Thunder Client
- Insomnia

---

# 🎯 Learning Outcomes

This project helps in understanding:

- REST API Development
- JWT Authentication
- Express Middleware
- MongoDB & Mongoose
- MVC Architecture
- Route Protection
- Error Handling
- Secure Password Hashing

---

# 🚀 Future Enhancements

- Role-Based Authentication
- Pagination & Search
- Contact Image Upload
- Email Verification
- Password Reset Functionality
- API Documentation using Swagger

---

# 🤝 Contributing

Contributions are welcome!

## Steps to Contribute

1. Fork the repository
2. Create a new branch

```bash
git checkout -b feature-name
```

3. Commit changes

```bash
git commit -m "Added new feature"
```

4. Push changes

```bash
git push origin feature-name
```

5. Open a Pull Request

---

# 📄 License

This project is licensed under the MIT License.

---

# 👨‍💻 Author

### Parthiv Reddy

GitHub: https://github.com/ParthivReddy-2005

LinkedIn: https://www.linkedin.com/in/pelluru-parthiv-reddy-3b472a274/

Email: parthivreddy.pelluru2005@gmail.com
