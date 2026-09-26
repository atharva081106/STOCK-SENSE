<div align="center">
  <a href="https://stocksenseodoo.vercel.app/">
    <img src="https://raw.githubusercontent.com/atharva081106/STOCK-SENSE/main/public/logo.jpg" alt="StockSense Logo" width="80" height="80">
  </a>

  <h1 align="center">StockSense</h1>

  <p align="center">
    <strong>Modern, Centralized, & Real-Time Inventory Management System</strong>
    <br />
    <br />
    <a href="https://stocksenseodoo.vercel.app/"><strong>View Live Demo »</strong></a>
    <br />
    <br />
  </p>
</div>

<p align="center">
  <a href="https://stocksenseodoo.vercel.app/"><img src="https://img.shields.io/badge/Live-Demo-brightgreen.svg?style=for-the-badge" alt="Live Demo" /></a>
  <a href="https://nextjs.org/"><img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="Next.js" /></a>
  <a href="https://www.prisma.io/"><img src="https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white" alt="Prisma" /></a>
  <a href="https://vercel.com/"><img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" alt="Vercel" /></a>
</p>

---

## 🌟 Overview

**StockSense** is an enterprise-grade Inventory Management System engineered to eliminate the chaos of manual registers and scattered Excel sheets. 

With a meticulously crafted user interface, real-time product tracking, and dynamic operational workflows, StockSense gives inventory managers complete visibility into their stockrooms with absolute ease.

<div align="center">
  <a href="https://stocksenseodoo.vercel.app/">
    <img src="https://raw.githubusercontent.com/atharva081106/STOCK-SENSE/main/public/dashboard-preview.png" alt="StockSense Dashboard" width="100%">
  </a>
</div>

## ✨ Key Features

- ⚡ **Real-Time Dashboard**: Get an instant snapshot of your entire operation, total stock volume, and pending alerts.
- 📦 **Smart Product Ledger**: A beautifully organized, high-performance table mapping thousands of SKUs effortlessly.
- 🔄 **Dynamic Operations Workflow**: Dedicated modules for **Receipts**, **Deliveries**, and **Adjustments**.
- 🚦 **Intelligent Filtering**: One-click status toggles (Draft, Waiting, Ready, Done) to prevent any missed orders.
- 📖 **Immutable Move History**: An automated audit trail logging exactly who moved what and when for total accountability.
- 💎 **Premium UI**: Crafted with responsive glassmorphism components and fluid micro-animations.

## 🛠️ Technology Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Database**: PostgreSQL (via Neon / Supabase)
- **ORM**: [Prisma](https://www.prisma.io/)
- **Authentication**: [NextAuth.js](https://next-auth.js.org/)
- **Styling**: Vanilla CSS (CSS Modules & Global Variables)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Deployment**: [Vercel](https://vercel.com/)

---

## 🚀 Getting Started

Follow these instructions to set up StockSense on your local machine.

### 1. Clone the repository
```bash
git clone https://github.com/atharva081106/STOCK-SENSE.git
cd STOCK-SENSE
```

### 2. Install dependencies
```bash
npm install
```

### 3. Set up environment variables
Create a `.env` file in the root directory and configure your PostgreSQL database and NextAuth secret:
```env
DATABASE_URL="postgres://user:password@host:port/database"
NEXTAUTH_SECRET="your_super_secret_string"
NEXTAUTH_URL="http://localhost:3000"
```

### 4. Initialize the Database
Run the Prisma migrations to set up the database schema:
```bash
npx prisma generate
npx prisma db push
```

### 5. Run the Application
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the application in your browser.

---

## 🔑 Demo Access
Want to try it out immediately? Use the **"Login with Demo Account"** button on the login page, or manually use:
- **Email**: `admin@stocksense.com`
- **Password**: `password123`

*(Note: Logging in with the demo account will automatically seed the database with rich dummy data if it is empty!)*

---

<div align="center">
  Built with ❤️ by the StockSense Team
</div>
