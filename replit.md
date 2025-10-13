# FinGuard - Personal Finance PWA

## Overview
FinGuard is a responsive personal finance management Progressive Web App (PWA) that helps users track spending, manage budgets, link bank accounts, and achieve financial goals. Built with React, TypeScript, and Tailwind CSS, featuring a beautiful purple-themed design optimized for both web and mobile experiences.

**Tagline:** Track smart. Spend wise. Live free.

## Current State
✅ **Phase 1 Complete**: Full schema and frontend implementation
- All data models defined (transactions, budgets, bank accounts, insights)
- Complete responsive UI with mobile PWA and desktop web views
- All core pages implemented: Landing, Dashboard, Insights, Budget, Bank Linking, Settings
- Reusable components: Transaction cards, spending charts, budget progress bars, insight cards
- Theme support (light/dark mode)
- Mobile bottom navigation and desktop sidebar

🔄 **Phase 2 In Progress**: Backend API implementation
⏳ **Phase 3 Pending**: Integration and testing

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
- **2024-10-13**: Phase 1 complete - All schemas and frontend components built
  - Defined complete data models for transactions, budgets, bank accounts, insights
  - Created all reusable UI components (cards, charts, navigation)
  - Built all 6 main pages with pixel-perfect responsive design
  - Implemented theme provider for dark/light mode
  - Added mobile bottom nav and desktop sidebar navigation
  - Configured PWA manifest and meta tags

## Next Steps
1. ✅ Complete Task 1: Schema & Frontend (DONE)
2. 🔄 Task 2: Implement backend API endpoints and storage
3. ⏳ Task 3: Connect frontend to backend, add loading/error states, test

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
