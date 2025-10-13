import { sql } from "drizzle-orm";
import { pgTable, text, varchar, integer, timestamp, decimal } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// Users table
export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
  email: text("email").notNull().unique(),
  fullName: text("full_name").notNull(),
  avatar: text("avatar"),
  currency: text("currency").notNull().default("NGN"),
  darkMode: integer("dark_mode").notNull().default(0),
});

// Transactions table
export const transactions = pgTable("transactions", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  userId: varchar("user_id").notNull(),
  merchant: text("merchant").notNull(),
  category: text("category").notNull(),
  amount: decimal("amount", { precision: 12, scale: 2 }).notNull(),
  date: timestamp("date").notNull().default(sql`now()`),
  type: text("type").notNull(), // 'expense' or 'income'
});

// Budgets table
export const budgets = pgTable("budgets", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  userId: varchar("user_id").notNull(),
  category: text("category").notNull(),
  amount: decimal("amount", { precision: 12, scale: 2 }).notNull(),
  month: text("month").notNull(), // Format: YYYY-MM
  spent: decimal("spent", { precision: 12, scale: 2 }).notNull().default("0"),
});

// Bank Accounts table
export const bankAccounts = pgTable("bank_accounts", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  userId: varchar("user_id").notNull(),
  bankName: text("bank_name").notNull(),
  accountNumber: text("account_number"),
  balance: decimal("balance", { precision: 12, scale: 2 }).notNull().default("0"),
  isLinked: integer("is_linked").notNull().default(0),
});

// Insights table
export const insights = pgTable("insights", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  userId: varchar("user_id").notNull(),
  message: text("message").notNull(),
  type: text("type").notNull(), // 'warning', 'info', 'success'
  createdAt: timestamp("created_at").notNull().default(sql`now()`),
});

// Insert schemas
export const insertUserSchema = createInsertSchema(users).omit({
  id: true,
});

export const insertTransactionSchema = createInsertSchema(transactions).omit({
  id: true,
  date: true,
});

export const insertBudgetSchema = createInsertSchema(budgets).omit({
  id: true,
  spent: true,
});

export const insertBankAccountSchema = createInsertSchema(bankAccounts).omit({
  id: true,
  balance: true,
  isLinked: true,
});

export const insertInsightSchema = createInsertSchema(insights).omit({
  id: true,
  createdAt: true,
});

// Types
export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

export type InsertTransaction = z.infer<typeof insertTransactionSchema>;
export type Transaction = typeof transactions.$inferSelect;

export type InsertBudget = z.infer<typeof insertBudgetSchema>;
export type Budget = typeof budgets.$inferSelect;

export type InsertBankAccount = z.infer<typeof insertBankAccountSchema>;
export type BankAccount = typeof bankAccounts.$inferSelect;

export type InsertInsight = z.infer<typeof insertInsightSchema>;
export type Insight = typeof insights.$inferSelect;

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
  { id: "access", name: "Access Bank", icon: "🏦" },
  { id: "first", name: "First Bank", icon: "🏦" },
  { id: "gtbank", name: "GTBank", icon: "🏦" },
  { id: "uba", name: "UBA", icon: "🏦" },
  { id: "zenith", name: "Zenith Bank", icon: "🏦" },
  { id: "opay", name: "OPay Wallet", icon: "💳" },
  { id: "mtn", name: "MTN MoMo", icon: "📱" },
] as const;
