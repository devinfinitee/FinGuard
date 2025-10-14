# FinGuard - Personal Finance PWA (Frontend)

> Track smart. Spend wise. Live free.

A beautiful, responsive personal finance management Progressive Web App (PWA) built with React, TypeScript, and Tailwind CSS.

## 🎨 Features

- **Dashboard** - View total balance, spending charts, and recent transactions
- **Spending Insights** - Monthly breakdown with category visualization
- **Budget Management** - Track budgets by category with progress bars
- **Bank Linking** - Connect Nigerian banks (Access, First Bank, GTBank, UBA, Zenith, OPay, MTN MoMo)
- **Settings** - Profile management, dark mode toggle, currency selection
- **PWA Support** - Install as a mobile app
- **Responsive Design** - Works on desktop, tablet, and mobile

## 🚀 Quick Start

### Prerequisites

- Node.js 20+ installed
- npm or pnpm package manager

### Option 1: Automated Setup (Windows)

```bash
# Double-click or run:
setup-windows.bat
```

### Option 2: Manual Setup

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

The app will open at **http://localhost:5173**

## 📦 Tech Stack

- **Framework:** React 18 with TypeScript
- **Styling:** Tailwind CSS + Shadcn UI components
- **State Management:** TanStack Query
- **Routing:** Wouter
- **Charts:** Recharts
- **Icons:** Lucide React
- **Forms:** React Hook Form + Zod validation
- **Build Tool:** Vite
- **Theme:** Light/Dark mode with next-themes

## 📁 Project Structure

```
FinGuard/
├── client/
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/          # Page components
│   │   ├── lib/            # Utilities
│   │   └── App.tsx         # Main app component
│   └── .env                # Environment variables
├── shared/                 # Shared types and schemas
├── public/                 # Static assets
├── scripts/
│   └── ensure-install.cts  # Auto-install script
└── package.json
```

## 🛠️ Available Scripts

- `npm run dev` - Start development server (auto-installs deps if needed)
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run check` - Type check with TypeScript

## 🎨 Design System

- **Primary Color:** Purple (#6F38C5)
- **Typography:** Inter font family
- **Currency:** Nigerian Naira (₦)
- **Theme:** Light/Dark mode support
- **Components:** Shadcn UI (Radix UI primitives)

## 📱 PWA Features

The app can be installed on mobile devices and works offline with:
- Service Worker for caching
- Manifest file for installation
- Responsive mobile-first design

## 🌐 Environment Variables

Create `client/.env` file:

```env
VITE_WEBSRV_API_KEY=your_key
```

Use `VITE_*` prefix for browser-accessible variables.

## 🔧 Development

### Hot Module Replacement (HMR)

Vite provides instant HMR for fast development. Changes to React components will update instantly without full page reload.

### Type Safety

Full TypeScript support with strict type checking. Run `npm run check` to verify types.

### Component Library

Uses Shadcn UI components built on Radix UI primitives:
- Fully accessible (ARIA compliant)
- Customizable with Tailwind CSS
- Dark mode support built-in

## 📊 Data Models

The app uses the following data structures (defined in `shared/schema.ts`):

- **User** - Profile, settings, currency preferences
- **Transaction** - Merchant, category, amount, date, type
- **Budget** - Category budgets with spending tracking
- **BankAccount** - Linked bank accounts with balances
- **Insight** - Financial insights and recommendations

## 🎯 Categories

- Food & Dining
- Transport
- Subscriptions
- Shopping
- Bills
- Entertainment
- Healthcare
- Other

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

Output will be in `dist/public/` directory.

### Deploy to Static Hosting

The app is a static frontend and can be deployed to:
- Vercel
- Netlify
- GitHub Pages
- Cloudflare Pages
- Any static hosting service

### Deploy to Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

## 🔐 Security Notes

This is a **frontend-only** application. For production use:

1. **Add Backend API** - Connect to a secure backend for data persistence
2. **Authentication** - Implement user authentication (OAuth, JWT, etc.)
3. **Data Encryption** - Encrypt sensitive financial data
4. **HTTPS** - Always use HTTPS in production
5. **API Keys** - Never expose API keys in frontend code

## 🐛 Troubleshooting

### Port Already in Use

If port 5173 is busy, Vite will automatically use the next available port.

### Dependencies Installation Fails

```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### TypeScript Errors

```bash
# Run type check
npm run check
```

## 📚 Documentation

- [Vite Documentation](https://vitejs.dev/)
- [React Documentation](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Shadcn UI](https://ui.shadcn.com/)
- [TanStack Query](https://tanstack.com/query)

## 🤝 Contributing

This is a personal project template. Feel free to fork and customize for your needs.

## 📄 License

MIT License - feel free to use this project for personal or commercial purposes.

## 🎉 Getting Started Checklist

- [ ] Run `setup-windows.bat` or `npm install`
- [ ] Start dev server with `npm run dev`
- [ ] Open http://localhost:5173
- [ ] Explore the dashboard and features
- [ ] Customize colors and branding
- [ ] Add your own backend API
- [ ] Deploy to production

---

**Built with ❤️ using React, TypeScript, and Tailwind CSS**
