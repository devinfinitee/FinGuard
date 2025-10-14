// Frontend-only schema types (no database dependencies)

// Types
export type User = {
  id: string;
  username: string;
  email: string;
  fullName: string;
  avatar?: string;
  currency: string;
  darkMode: number;
};

export type Transaction = {
  id: string;
  userId: string;
  merchant: string;
  category: string;
  amount: string;
  date: Date | string;
  type: 'expense' | 'income';
};

export type Budget = {
  id: string;
  userId: string;
  category: string;
  amount: string;
  month: string;
  spent: string;
};

export type BankAccount = {
  id: string;
  userId: string;
  bankName: string;
  accountNumber?: string;
  balance: string;
  isLinked: number;
};

export type Insight = {
  id: string;
  userId: string;
  message: string;
  type: 'warning' | 'info' | 'success';
  createdAt: Date | string;
};

// Additional types for frontend
export const CATEGORIES = [
  "Food & Dining",
  "Transport",
  "Subscriptions",
  "Shopping",
  "Bills",
  "Entertainment",
  "Healthcare",
  "Other",
] as const;

export type Category = typeof CATEGORIES[number];

export const NIGERIAN_BANKS = [
  { id: "access", name: "Access Bank", icon: "access", color: "#FF6B00" },
  { id: "first", name: "First Bank", icon: "first", color: "#0033A0" },
  { id: "gtbank", name: "GTBank", icon: "gtbank", color: "#FF6600" },
  { id: "uba", name: "UBA", icon: "uba", color: "#D32F2F" },
  { id: "zenith", name: "Zenith Bank", icon: "zenith", color: "#E31E24" },
  { id: "opay", name: "OPay Wallet", icon: "opay", color: "#00C853" },
  { id: "mtn", name: "MTN MoMo", icon: "mtn", color: "#FFCC00" },
] as const;

export type NigerianBank = typeof NIGERIAN_BANKS[number];
