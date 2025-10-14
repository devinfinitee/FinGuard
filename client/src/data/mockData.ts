// Mock data for frontend-only mode
// This will be replaced with real API calls when backend is connected

import type { Transaction, Budget, Insight } from "@/types/schema";

export const mockTransactions: Transaction[] = [
  {
    id: "1",
    userId: "user1",
    merchant: "Shoprite",
    category: "Food & Dining",
    amount: "15000",
    date: new Date().toISOString(),
    type: "expense",
  },
  {
    id: "2",
    userId: "user1",
    merchant: "Uber",
    category: "Transport",
    amount: "3500",
    date: new Date(Date.now() - 86400000).toISOString(),
    type: "expense",
  },
  {
    id: "3",
    userId: "user1",
    merchant: "Netflix",
    category: "Subscriptions",
    amount: "5000",
    date: new Date(Date.now() - 172800000).toISOString(),
    type: "expense",
  },
  {
    id: "4",
    userId: "user1",
    merchant: "Jumia",
    category: "Shopping",
    amount: "25000",
    date: new Date(Date.now() - 259200000).toISOString(),
    type: "expense",
  },
  {
    id: "5",
    userId: "user1",
    merchant: "Salary",
    category: "Other",
    amount: "250000",
    date: new Date(Date.now() - 345600000).toISOString(),
    type: "income",
  },
];

export const mockBudgets: Budget[] = [
  {
    id: "1",
    userId: "user1",
    category: "Food & Dining",
    amount: "80000",
    month: "2025-01",
    spent: "65000",
  },
  {
    id: "2",
    userId: "user1",
    category: "Transport",
    amount: "40000",
    month: "2025-01",
    spent: "32000",
  },
  {
    id: "3",
    userId: "user1",
    category: "Subscriptions",
    amount: "15000",
    month: "2025-01",
    spent: "12000",
  },
  {
    id: "4",
    userId: "user1",
    category: "Shopping",
    amount: "50000",
    month: "2025-01",
    spent: "38000",
  },
  {
    id: "5",
    userId: "user1",
    category: "Bills",
    amount: "60000",
    month: "2025-01",
    spent: "55000",
  },
  {
    id: "6",
    userId: "user1",
    category: "Entertainment",
    amount: "30000",
    month: "2025-01",
    spent: "18000",
  },
];

export const mockInsights: Insight[] = [
  {
    id: "1",
    userId: "user1",
    message: "You're doing great! You've saved 15% more than last month.",
    type: "success",
    createdAt: new Date().toISOString(),
  },
  {
    id: "2",
    userId: "user1",
    message: "Warning: Your Food & Dining spending is 81% of your budget.",
    type: "warning",
    createdAt: new Date().toISOString(),
  },
];

export const mockSpendingData = [
  { name: "Food & Dining", value: 65000, color: "hsl(32, 95%, 58%)" },
  { name: "Transport", value: 32000, color: "hsl(217, 91%, 60%)" },
  { name: "Shopping", value: 38000, color: "hsl(340, 82%, 52%)" },
  { name: "Bills", value: 55000, color: "hsl(162, 63%, 50%)" },
  { name: "Entertainment", value: 18000, color: "hsl(280, 70%, 60%)" },
  { name: "Subscriptions", value: 12000, color: "hsl(271, 81%, 56%)" },
];

export const mockBalance = {
  total: 385000,
};
