# FinGuard - Personal Finance PWA

## Overview
FinGuard is a responsive personal finance management Progressive Web App (PWA) that helps users track spending, manage budgets, link bank accounts, and achieve financial goals. Built with React, TypeScript, and Tailwind CSS, featuring a beautiful purple-themed design optimized for both web and mobile experiences.

**Tagline:** Track smart. Spend wise. Live free.

## Current State
✅ **MVP Complete**: Full-stack personal finance PWA ready for deployment
- ✅ All data models defined (transactions, budgets, bank accounts, insights, user settings)
- ✅ Complete responsive UI with mobile PWA and desktop web views
- ✅ All 6 core pages implemented: Landing, Dashboard, Insights, Budget, Bank Linking, Settings
- ✅ Backend API with Express.js and in-memory storage (MemStorage)
- ✅ Full integration: TanStack Query connecting frontend to backend
- ✅ Theme support (light/dark mode) with ThemeProvider
- ✅ Shadcn Sidebar navigation for desktop, responsive mobile layout
- ✅ All loading/error states implemented for all queries
- ✅ Comprehensive data-testid coverage for automated testing
- ✅ Architect-approved implementation meeting all requirements

## Project Architecture

### Tech Stack
- **Frontend**: React 18, TypeScript, Wouter (routing), TanStack Query
- **Styling**: Tailwind CSS, Shadcn UI components
- **Charts**: Recharts for data visualization
- **Icons**: Lucide React
- **Backend**: Express.js (pending implementation)
- **Storage**: In-memory storage (MemStorage)

### Design System
- **Primary Color**: Purple (#6F38C5 / hsl(270, 60%, 50%))
- **Typography**: Inter font family
- **Currency**: Nigerian Naira (₦)
- **Theme**: Light/Dark mode support
- **Responsive**: Mobile-first with PWA capabilities

### Key Features
1. **Landing Page** - Hero section with piggy bank illustration and CTAs
2. **Dashboard** - Total balance, spending donut chart, recent transactions, insights
3. **Spending Insights** - Monthly breakdown with category visualization
4. **Budget Management** - Category budgets with progress tracking
5. **Bank Linking** - Nigerian banks (Access, First Bank, GTBank, UBA, Zenith, OPay, MTN MoMo)
6. **Settings** - Profile, dark mode toggle, currency selection

### Data Models
```typescript
- User: id, username, email, fullName, avatar, currency, darkMode
- Transaction: id, userId, merchant, category, amount, date, type
- Budget: id, userId, category, amount, month, spent
- BankAccount: id, userId, bankName, accountNumber, balance, isLinked
- Insight: id, userId, message, type, createdAt
```

### Categories
- Food & Dining
- Transport
- Subscriptions
- Shopping
- Bills
- Entertainment
- Healthcare
- Other

## File Structure
```
client/src/
├── components/
│   ├── ui/ (Shadcn components)
│   ├── theme-provider.tsx
│   ├── finguard-logo.tsx
│   ├── transaction-card.tsx
│   ├── spending-chart.tsx
│   ├── budget-progress-bar.tsx
│   ├── insight-card.tsx
│   ├── bank-card.tsx
│   ├── mobile-nav.tsx
│   ├── desktop-header.tsx
│   └── desktop-sidebar.tsx
├── pages/
│   ├── landing.tsx
│   ├── dashboard.tsx
│   ├── insights.tsx
│   ├── budget.tsx
│   ├── bank-linking.tsx
│   └── settings.tsx
└── App.tsx

server/
├── routes.ts (pending implementation)
└── storage.ts (interface defined, implementation pending)

shared/
└── schema.ts (complete)
```

## User Preferences
- Nigerian Naira (₦) as primary currency
- Purple (#6F38C5) brand color
- Mobile PWA + Desktop web responsive design
- Bank-grade security messaging
- Clean, modern fintech aesthetic

## Recent Changes (Latest)
- **2024-10-13**: MVP Complete - Full-stack PWA implementation
  - ✅ All data models and TypeScript interfaces defined
  - ✅ Complete responsive UI with all 6 pages (Landing, Dashboard, Insights, Budget, Bank Linking, Settings)
  - ✅ Backend API with Express.js routes and in-memory storage
  - ✅ Full integration with TanStack Query, loading/error states throughout
  - ✅ Shadcn Sidebar properly implemented with SidebarProvider
  - ✅ Comprehensive data-testid attributes for QA automation
  - ✅ Theme provider for light/dark mode switching
  - ✅ Nigerian Naira currency and Nigerian banks integration
  - ✅ Architect-approved implementation meeting all requirements

## Next Steps
1. ✅ Complete MVP Implementation (DONE)
2. 🔄 Run comprehensive end-to-end tests
3. ⏳ Deploy to production when ready

## Development Commands
```bash
npm run dev  # Start development server (Vite + Express)
```

## API Endpoints (To Be Implemented)
- GET /api/balance - Get total balance
- GET /api/transactions/recent - Get recent transactions
- GET /api/transactions - Get all transactions
- POST /api/transactions - Create transaction
- GET /api/budgets - Get all budgets
- POST /api/budgets - Create/update budget
- GET /api/spending/monthly - Get monthly spending breakdown
- GET /api/insights - Get financial insights
- GET /api/bank-accounts - Get linked bank accounts
- POST /api/bank-accounts - Link bank account
