# SecondDeal 🛒 - Marketplace for Buying & Selling Used Items

**SecondDeal** is a marketplace web application where users can buy and sell used items easily. The platform allows users to post listings, browse available products, and communicate securely with sellers. This project leverages the MERN stack (MongoDB, Express, React, Node.js) along with Next.js for server-side rendering (SSR) and static site generation (SSG).

- Live Link [Next.js](https://second-deal-market.vercel.app)

## Project Overview

This application provides a seamless and secure experience for users looking to buy and sell used items. The platform includes user authentication, item listings, user dashboards, and various other features like wishlist management and a communication system.

## Roles

- **User (Single Role)**: A unified role where users can both buy and sell items.
- **Admin (Optional)**: Can manage users and listings. This feature is not yet implemented but planned for future versions.

## Key Features

### User Authentication

- Custom login system using email/phone number and password.
- JWT (JSON Web Token) for secure authentication.
- Password hashing using bcrypt for security.

### User Dashboard

- **Post an Item for Sale**: Users can list used items with descriptions, images, pricing, and categories.
- **Manage Listings**: Users can update and remove item listings.
- **Track Sales & Purchases**: Users can view their purchase and sales history.
- **Profile Management**: Users can edit their personal details.
- **Wishlist Feature**: Users can save items for later.

### Listings and Search

- Users can list items with details like price, condition, images, and category.
- **Search & Filter**: A powerful filtering system based on category, price, condition, and location.
- **Mark as Sold**: Sellers can update item status after a sale.

### Communication & Transactions (Optional)

- **Messaging System**: Users can chat with sellers before making a purchase (planned for future).
- **Order Management**: Users can track their sold/purchased items.

### Admin Features (Optional)

- **User Management**: Admin can ban/unban users (planned for future).
- **Listing Management**: Admin can delete inappropriate listings (planned for future).

## Tech Stack

- **Frontend**:
  - Next.js (for SSR/SSG)
  - TypeScript (for type safety)
- **Backend**:

  - Express.js (REST API)
  - MongoDB (for data storage)
  - JWT (authentication)
  - bcrypt (password hashing)

- **Deployment**:
  - Frontend: Vercel, Netlify
  - Backend: Vercel, Railway

## Frontend Routes

- **/home**: Overview of available items.
- **/login**: User login page.
- **/products**: Browse all listings.
- **/dashboard**: User Dashboard.
  - **/dashboard/purchase-history**: View order history.
  - **/dashboard/listing**: Create, update, delete listings.
  - **/dashboard/sales-history**: View sales inquiries.
  - **/dashboard/profile**: Edit personal details.
- **/messages**: Direct communication between buyers and sellers (optional).

## Admin Routes (Optional)

- **/dashboard/admin**: Admin panel.
  - **/dashboard/admin/user-management**: Ban/unban users.
  - **/dashboard/admin/listings**: Delete or review listings.

## Backend API Endpoints (CRUD Operations)

### Authentication

- **POST /auth/register**: Register a new user.
- **POST /auth/login**: User login.
- **POST /auth/logout**: Logout user.

### Listings

- **GET /listings**: Retrieve all available listings.
- **GET /listings/:id**: Retrieve a specific listing.
- **POST /listings**: Create a new listing.
- **PUT /listings/:id**: Update a listing.
- **DELETE /listings/:id**: Remove a listing.

### User Management

- **GET /users/:id**: Retrieve user details.
- **PUT /users/:id**: Update user profile.
- **DELETE /users/:id**: Delete user account.

### Transactions & Purchases

- **GET /purchases/:userId**: Fetch purchase history.
- **GET /sales/:userId**: Fetch sales history.
- **POST /transactions**: Create a new transaction.
- **PUT /transactions/:id**: Update transaction status.

### Admin (Optional)

- **PUT /users/:id/ban**: Ban/unban a user.
- **DELETE /listings/:id**: Delete a listing.

### Messages (Optional)

- **POST /messages**: Send a message.
- **GET /messages/:userId**: Retrieve user messages.

## UI/UX Design Considerations

- **Responsive Design**: Mobile-friendly interface.
- **Modern UI/UX**: Simple navigation, clear CTAs, and intuitive interface.
- **User-friendly Forms**: Easy to post listings, search, and communicate.

## Future Features (Optional)

- **Messaging System**: Chat feature between buyers and sellers.
- **Admin Dashboard**: Admin features to manage users and listings.
- **Email Notifications**: Notifications for buyers and sellers when there is an inquiry or response.
