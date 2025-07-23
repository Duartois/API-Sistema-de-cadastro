# 🔐 Cadastro API – RESTful API with Node.js, Express & MongoDB

A secure and modular backend REST API for managing registrations and entities such as users, products, or services. Built with **Node.js**, **Express**, and **MongoDB**, featuring full CRUD operations, encrypted credentials, and JWT-based authentication.

---

## 🧠 Features

- ✅ RESTful architecture (CRUD)
- ✅ Token-based authentication (JWT)
- ✅ Password encryption with **bcrypt**
- ✅ Public and private routes
- ✅ MongoDB integration with Mongoose
- ✅ Scalable structure for new entities (users, services, products)

---

## 📦 Tech Stack

- **Node.js** – JavaScript runtime
- **Express.js** – Web framework
- **MongoDB** – NoSQL database
- **Mongoose** – ODM for MongoDB
- **JWT (jsonwebtoken)** – Authentication
- **Bcrypt** – Secure password hashing
- **dotenv** – Environment configuration

---

## 📁 Project Structure

```/src
├── controllers/ # Request handlers
├── models/ # Mongoose schemas
├── routes/ # API routes (public/private)
├── middlewares/ # Auth middleware (JWT validation)
├── config/ # DB config and connection
├── utils/ # Reusable logic/utilities
├── server.js # App entry point
└── .env.example # Environment variable template
```

---

## 🔐 Authentication Flow (JWT)

- On login, a JWT token is generated and returned
- Token is stored on the frontend (localStorage/cookie)
- Middleware checks token validity before granting access to private routes

Example Middleware:
```js
const verifyToken = (req, res, next) => {
  const token = req.headers['authorization'];
  if (!token) return res.status(403).send('Token required');
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decoded.id;
    next();
  } catch (err) {
    return res.status(401).send('Invalid token');
  }
};
```

🚀 Getting Started
```bash
git clone https://github.com/Duartois/API-Sistema-de-cadastro.git
cd API-Sistema-de-cadastro
npm install
cp .env.copy .env
npm run dev
.env example:
env
PORT=5000
MONGO_URI=mongodb://localhost:27017/sistema
JWT_SECRET=your_secret_key
```

📬 Contact

GitHub: github.com/Duartois
LinkedIn: linkedin.com/in/matheusduartegoncalves
Email: your.email@example.com

