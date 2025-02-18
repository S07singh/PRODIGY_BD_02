# 👥 User Management API (MySQL + Sequelize)

[![Node.js](https://img.shields.io/badge/Node.js-v14%2B-green)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express.js-4.x-blue)](https://expressjs.com/)
[![MySQL](https://img.shields.io/badge/MySQL-v8.0%2B-orange)](https://www.mysql.com/)
[![Sequelize](https://img.shields.io/badge/Sequelize-ORM-yellow)](https://sequelize.org/)

A **RESTful API** for **user management** built with **Node.js, Express, and MySQL**, using **Sequelize ORM** for database integration. This API provides **CRUD operations**, error handling, and secure configurations.

---

## 📸 Project Screenshots  

### 🏗️ API Running Successfully and this the database 
![API Running](https://github.com/user-attachments/assets/fbbacaa7-d188-44ab-9c32-4a670c74234e)  

### 📩 Creating a User  
![Create User](https://github.com/user-attachments/assets/bd99f2dd-cbbb-4e5d-84f9-62f2b19e519e)  

### 📩 Creating a User   
![Get Users](https://github.com/user-attachments/assets/1e5e2d23-db51-4f0a-abab-6b7eafe7aacb)  

### 📖 Fetching All Users 
![Get Single User](https://github.com/user-attachments/assets/4208a423-ec55-4998-ab1f-7755136ed651)  

### 🔍 Fetching a Single User 
![Update User](https://github.com/user-attachments/assets/d145cf74-7a5c-4ae7-9ae2-7d6a2f5976e7)  

### ✏️ Updating a User   
![Delete User](https://github.com/user-attachments/assets/dcbfb5b5-d07c-44d2-83df-f718d2ca4a3f)  

### ❌ Deleting a User 
![Error Handling](https://github.com/user-attachments/assets/1275165f-4eaa-4fcf-af70-67f7be03478a)  

---

## ⭐ Features

- ✅ **CRUD operations** for user management
- ✅ **MySQL integration** with **Sequelize ORM**
- ✅ **UUID-based** user identification
- ✅ **Data validation** and **error handling**
- ✅ **Environment-based configuration** using `.env`
- ✅ **Database migrations** for structured schema creation

## 📌 Prerequisites

- ⚙️ **Node.js** (v14 or higher)
- 🛢️ **MySQL** (v8.0 or higher)
- 📦 **npm** (Node Package Manager)

## 🔧 Installation

### ⬇️ Clone the Repository
```bash
git clone <your-repo-url>
cd your-existing-folder
```

### 📦 Install Dependencies
```bash
npm install
```

### 🛠️ Set Up Environment Variables
Create a `.env` file in the root directory and add:
```env
NODE_ENV=development
PORT=3000

# Database Configuration
DB_HOST=localhost
DB_USER=root        # your MySQL username
DB_PASSWORD=        # your MySQL password
DB_NAME=user_management
```

### 🚀 Run Database Migrations
```bash
npx sequelize-cli db:migrate
```

### 🚀 Start the Server
```bash
# 🛠️ Development mode with auto-restart (nodemon)
npm run dev

# 🚀 Production mode
npm start
```
The server will start on **port 3000**.

## 🔌 API Endpoints

| Method  | Endpoint          | Description          |
|---------|------------------|----------------------|
| POST    | `/api/users`      | Create a new user   |
| GET     | `/api/users`      | Get all users       |
| GET     | `/api/users/:id`  | Get a single user   |
| PATCH   | `/api/users/:id`  | Update user details |
| DELETE  | `/api/users/:id`  | Delete a user       |

## ⚠️ Error Handling

This API includes structured error handling:
- ❌ **400 Bad Request** → Invalid input data
- 🔍 **404 Not Found** → User not found
- 🛑 **500 Internal Server Error** → Server issues

Example **error response format**:
```json
{
    "error": "Error message here"
}
```

## 📂 Project Structure

```
your-existing-folder/
├── config/
│   └── database.js            # MySQL connection file
├── models/
│   └── User.js                # Sequelize user model
├── controllers/
│   └── userController.js      # User CRUD logic
├── routes/
│   └── userRoutes.js          # API routes
├── middleware/
│   └── errorHandler.js        # Centralized error handling
├── migrations/
│   └── 20240216000000-create-users.js  # Sequelize migration file
├── .env                       # Environment variables
├── .gitignore                 # Git ignored files
├── package.json               # Project metadata & dependencies
└── server.js                  # Main entry point
```

## 📦 Dependencies

- **⚡ express** → Web framework for routing
- **🛢️ mysql2** → MySQL driver for database connection
- **🛠️ sequelize** → ORM for database interactions
- **🔄 dotenv** → Environment variable management
- **🆔 uuid** → For generating unique user IDs
- **🔄 nodemon** (dev dependency) → Auto-reload in development

## 🛠️ Scripts

```bash
npm start    # 🚀 Start the server
npm run dev  # 🛠️ Start in development mode with nodemon
```

## 🧪 Testing with Postman

- 📥 Import the provided **Postman collection**
- 🔬 Test each API endpoint:
  - ✍️ **Create a new user**
  - 📖 **Get all users**
  - 🔍 **Retrieve a specific user**
  - ✏️ **Update user details**
  - ❌ **Delete a user**

## 🤝 Contributing

1. 🍴 Fork the repository
2. 🌱 Create your feature branch (`git checkout -b feature-branch`)
3. 💾 Commit your changes (`git commit -m "Added new feature"`)
4. 📤 Push to the branch (`git push origin feature-branch`)
5. 🔀 Open a Pull Request
