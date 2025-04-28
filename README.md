
# 📦 Inventory and Order Management System

## ✨ Features

### ➡️ Product Management
- **Add Products**: Register new products with initial stock quantity.
- **Edit Products**: Update existing product information.
- **Remove Products**: Delete products from the system.

### ➡️ Order Management
- **Add Orders**: Create new orders by selecting available products.
- **Edit Orders**: Update order details when needed.
- **Remove Orders**: Cancel and delete orders.

### ➡️ Order Listings
- **Pending Orders**: View and manage all pending deliveries.
- **Completed Orders**: View a separate list of completed orders.

### ➡️ Dynamic Stock Control
- When creating an order, the corresponding product stock is **automatically reduced**.
- If a product's stock reaches **zero**, it becomes **unavailable** for new orders.

### ➡️ Smart Validations
- Mandatory field validations for creating and editing products and orders.
- Automatic stock verification before accepting a new order.

### ➡️ Dashboard Overview
- **Total Products** count.
- **Total Orders** count.
- Number of **Pending Orders**.
- Number of **Completed Orders**.
- **Latest Orders** placed.
- **Low Stock Warning** for critical inventory levels.

## 🚀 Technologies Used

- **ReactJS**
- **Context API + useReducer** for global state management
- **Tailwind CSS** for beautiful and responsive styling
- **LocalStorage** for data persistence

---

## 📦 How to Run the Project

```bash
# Clone the repository
git clone https://github.com/your-username/your-repository.git

# Access the project folder
cd your-repository

# Install dependencies
npm install

# Run the development server
npm run dev
```

---

## 🛠️ Future Improvements

- Integration with a real database (e.g., Supabase, Firebase, etc.)
- Authentication system for multiple users
- Search and filter functionality for products and orders
- Advanced dashboard with graphs and detailed statistics

---

## 👨‍💻 Author

Made by **AntonioJr**

[![https://github.com/AntonioJr91]]