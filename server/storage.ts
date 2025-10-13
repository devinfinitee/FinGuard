import { 
  type User, 
  type InsertUser, 
  type Transaction, 
  type InsertTransaction,
  type Budget,
  type InsertBudget,
  type BankAccount,
  type InsertBankAccount,
  type Insight,
  type InsertInsight
} from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  // User methods
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Transaction methods
  getTransactions(userId: string): Promise<Transaction[]>;
  getRecentTransactions(userId: string, limit?: number): Promise<Transaction[]>;
  createTransaction(transaction: InsertTransaction): Promise<Transaction>;
  
  // Budget methods
  getBudgets(userId: string, month?: string): Promise<Budget[]>;
  createBudget(budget: InsertBudget): Promise<Budget>;
  updateBudgetSpent(budgetId: string, spent: string): Promise<Budget | undefined>;
  
  // Bank Account methods
  getBankAccounts(userId: string): Promise<BankAccount[]>;
  createBankAccount(account: InsertBankAccount): Promise<BankAccount>;
  updateBankAccountLink(accountId: string, isLinked: boolean): Promise<BankAccount | undefined>;
  
  // Insight methods
  getInsights(userId: string): Promise<Insight[]>;
  createInsight(insight: InsertInsight): Promise<Insight>;
  
  // Balance methods
  getTotalBalance(userId: string): Promise<number>;
  
  // Spending methods
  getMonthlySpending(userId: string, month?: string): Promise<{ name: string; value: number; color: string }[]>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private transactions: Map<string, Transaction>;
  private budgets: Map<string, Budget>;
  private bankAccounts: Map<string, BankAccount>;
  private insights: Map<string, Insight>;

  constructor() {
    this.users = new Map();
    this.transactions = new Map();
    this.budgets = new Map();
    this.bankAccounts = new Map();
    this.insights = new Map();
    
    // Initialize with demo data
    this.initializeDemoData();
  }

  private initializeDemoData() {
    // Demo user
    const demoUser: User = {
      id: "demo-user-1",
      username: "sarah_j",
      password: "hashed_password",
      email: "sarah@email.com",
      fullName: "Sarah Johnson",
      avatar: "",
      currency: "NGN",
      darkMode: 0,
    };
    this.users.set(demoUser.id, demoUser);

    // Demo transactions
    const demoTransactions: Transaction[] = [
      {
        id: randomUUID(),
        userId: "demo-user-1",
        merchant: "Jumia Food",
        category: "Food & Dining",
        amount: "65000",
        date: new Date(),
        type: "expense",
      },
      {
        id: randomUUID(),
        userId: "demo-user-1",
        merchant: "Uber Ride",
        category: "Transport",
        amount: "13000",
        date: new Date(Date.now() - 86400000 * 3),
        type: "expense",
      },
      {
        id: randomUUID(),
        userId: "demo-user-1",
        merchant: "MTN Airtime",
        category: "Bills",
        amount: "13000",
        date: new Date(Date.now() - 86400000),
        type: "expense",
      },
      {
        id: randomUUID(),
        userId: "demo-user-1",
        merchant: "Netflix",
        category: "Subscriptions",
        amount: "5500",
        date: new Date(Date.now() - 86400000 * 2),
        type: "expense",
      },
      {
        id: randomUUID(),
        userId: "demo-user-1",
        merchant: "Shoprite",
        category: "Shopping",
        amount: "35000",
        date: new Date(Date.now() - 86400000 * 4),
        type: "expense",
      },
    ];
    
    demoTransactions.forEach(t => this.transactions.set(t.id, t));

    // Demo budgets
    const currentMonth = new Date().toISOString().slice(0, 7);
    const demoBudgets: Budget[] = [
      {
        id: randomUUID(),
        userId: "demo-user-1",
        category: "Food & Dining",
        amount: "90000",
        month: currentMonth,
        spent: "65000",
      },
      {
        id: randomUUID(),
        userId: "demo-user-1",
        category: "Transport",
        amount: "90000",
        month: currentMonth,
        spent: "32000",
      },
      {
        id: randomUUID(),
        userId: "demo-user-1",
        category: "Subscriptions",
        amount: "22000",
        month: currentMonth,
        spent: "5500",
      },
    ];
    
    demoBudgets.forEach(b => this.budgets.set(b.id, b));

    // Demo insights
    const demoInsights: Insight[] = [
      {
        id: randomUUID(),
        userId: "demo-user-1",
        message: "Heads up/Nudge! You spent ₦12,000 on bank charges this month. Consider switching to a bank with lower fees.",
        type: "warning",
        createdAt: new Date(),
      },
    ];
    
    demoInsights.forEach(i => this.insights.set(i.id, i));
  }

  // User methods
  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  // Transaction methods
  async getTransactions(userId: string): Promise<Transaction[]> {
    return Array.from(this.transactions.values())
      .filter(t => t.userId === userId)
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }

  async getRecentTransactions(userId: string, limit: number = 5): Promise<Transaction[]> {
    const transactions = await this.getTransactions(userId);
    return transactions.slice(0, limit);
  }

  async createTransaction(insertTransaction: InsertTransaction): Promise<Transaction> {
    const id = randomUUID();
    const transaction: Transaction = {
      ...insertTransaction,
      id,
      date: new Date(),
    };
    this.transactions.set(id, transaction);
    return transaction;
  }

  // Budget methods
  async getBudgets(userId: string, month?: string): Promise<Budget[]> {
    const currentMonth = month || new Date().toISOString().slice(0, 7);
    return Array.from(this.budgets.values())
      .filter(b => b.userId === userId && b.month === currentMonth);
  }

  async createBudget(insertBudget: InsertBudget): Promise<Budget> {
    const id = randomUUID();
    const budget: Budget = {
      ...insertBudget,
      id,
      spent: "0",
    };
    this.budgets.set(id, budget);
    return budget;
  }

  async updateBudgetSpent(budgetId: string, spent: string): Promise<Budget | undefined> {
    const budget = this.budgets.get(budgetId);
    if (budget) {
      budget.spent = spent;
      this.budgets.set(budgetId, budget);
    }
    return budget;
  }

  // Bank Account methods
  async getBankAccounts(userId: string): Promise<BankAccount[]> {
    return Array.from(this.bankAccounts.values())
      .filter(a => a.userId === userId);
  }

  async createBankAccount(insertAccount: InsertBankAccount): Promise<BankAccount> {
    const id = randomUUID();
    const account: BankAccount = {
      ...insertAccount,
      id,
      balance: "0",
      isLinked: 0,
    };
    this.bankAccounts.set(id, account);
    return account;
  }

  async updateBankAccountLink(accountId: string, isLinked: boolean): Promise<BankAccount | undefined> {
    const account = this.bankAccounts.get(accountId);
    if (account) {
      account.isLinked = isLinked ? 1 : 0;
      this.bankAccounts.set(accountId, account);
    }
    return account;
  }

  // Insight methods
  async getInsights(userId: string): Promise<Insight[]> {
    return Array.from(this.insights.values())
      .filter(i => i.userId === userId)
      .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  }

  async createInsight(insertInsight: InsertInsight): Promise<Insight> {
    const id = randomUUID();
    const insight: Insight = {
      ...insertInsight,
      id,
      createdAt: new Date(),
    };
    this.insights.set(id, insight);
    return insight;
  }

  // Balance methods
  async getTotalBalance(userId: string): Promise<number> {
    const accounts = await this.getBankAccounts(userId);
    const total = accounts.reduce((sum, account) => sum + parseFloat(account.balance), 0);
    
    // If no accounts, return demo balance
    return total > 0 ? total : 385000;
  }

  // Spending methods
  async getMonthlySpending(userId: string, month?: string): Promise<{ name: string; value: number; color: string }[]> {
    const currentMonth = month || new Date().toISOString().slice(0, 7);
    const transactions = await this.getTransactions(userId);
    
    const monthTransactions = transactions.filter(t => {
      const txMonth = new Date(t.date).toISOString().slice(0, 7);
      return txMonth === currentMonth && t.type === "expense";
    });

    const categoryTotals = monthTransactions.reduce((acc, t) => {
      if (!acc[t.category]) {
        acc[t.category] = 0;
      }
      acc[t.category] += parseFloat(t.amount);
      return acc;
    }, {} as Record<string, number>);

    const colors: Record<string, string> = {
      "Food & Dining": "hsl(32, 95%, 58%)",
      "Transport": "hsl(217, 91%, 60%)",
      "Subscriptions": "hsl(271, 81%, 56%)",
      "Shopping": "hsl(340, 82%, 52%)",
      "Bills": "hsl(162, 63%, 50%)",
      "Entertainment": "hsl(280, 70%, 60%)",
      "Healthcare": "hsl(0, 80%, 60%)",
      "Other": "hsl(240, 5%, 65%)",
    };

    return Object.entries(categoryTotals).map(([name, value]) => ({
      name,
      value,
      color: colors[name] || colors.Other,
    }));
  }
}

export const storage = new MemStorage();
