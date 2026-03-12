# Next.js Secure Dashboard

A modern **Admin Dashboard + Product Management system** built with **Next.js App Router** and **Tailwind CSS**.

This project demonstrates how to build a **full-stack application using Next.js** with authentication, protected routes, and API routes.

---

## Features

* Authentication (Login / Logout)
* Protected Dashboard using Middleware
* Product Management System
* Add Product functionality
* Dynamic Product Pages
* API Routes (Backend inside Next.js)
* Modern UI using Tailwind CSS
* Clean folder structure

---

## Tech Stack

* Next.js (App Router)
* React
* Tailwind CSS
* Middleware Authentication
* API Routes

---

## Project Structure

```
app
 ├ components
 │   ├ Navbar.js
 │   ├ ProductCard.js
 │   └ DashboardCard.js
 │
 ├ api
 │   └ products
 │        └ route.js
 │
 ├ dashboard
 │   ├ page.js
 │   └ add-product
 │        └ page.js
 │
 ├ product
 │   └ [id]
 │        └ page.js
 │
 ├ products
 │   └ page.js
 │
 ├ login
 │   └ page.js
 │
 ├ layout.js
 └ page.js
```

---

## Installation

Clone the repository

```
git clone https://github.com/yourusername/nextjs-dashboard.git
```

Move into the project folder

```
cd nextjs-dashboard
```

Install dependencies

```
npm install
```

Start development server

```
npm run dev
```

Open browser

```
http://localhost:3000
```

---

## Login Credentials

```
Email: admin@gmail.com
Password: 1234
```

---

## API Endpoints

Get all products

```
GET /api/products
```

Add new product

```
POST /api/products
```

---

## Pages

Home

```
/
```

Products

```
/products
```

Dashboard

```
/dashboard
```

Add Product

```
/dashboard/add-product
```

Login

```
/login
```

---

## Authentication Flow

1. User logs in from `/login`
2. Cookie token is created
3. Middleware protects `/dashboard`
4. Unauthorized users are redirected to `/login`

---

## Future Improvements

* Database integration (MongoDB)
* Edit / Delete product
* Image upload
* Admin sidebar dashboard
* Charts & analytics
* Role based authentication

---

## Author

Built by **Shubham Verma**

---

## License

This project is open-source and free to use.
