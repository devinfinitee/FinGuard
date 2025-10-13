import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertTransactionSchema, insertBudgetSchema, insertBankAccountSchema, insertInsightSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // Demo user ID for MVP
  const DEMO_USER_ID = "demo-user-1";

  // Balance endpoint
  app.get("/api/balance", async (req, res) => {
    try {
      const total = await storage.getTotalBalance(DEMO_USER_ID);
      res.json({ total });
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch balance" });
    }
  });

  // Transaction endpoints
  app.get("/api/transactions", async (req, res) => {
    try {
      const transactions = await storage.getTransactions(DEMO_USER_ID);
      res.json(transactions);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch transactions" });
    }
  });

  app.get("/api/transactions/recent", async (req, res) => {
    try {
      const limit = req.query.limit ? parseInt(req.query.limit as string) : 5;
      const transactions = await storage.getRecentTransactions(DEMO_USER_ID, limit);
      res.json(transactions);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch recent transactions" });
    }
  });

  app.post("/api/transactions", async (req, res) => {
    try {
      const validatedData = insertTransactionSchema.parse({
        ...req.body,
        userId: DEMO_USER_ID,
      });
      const transaction = await storage.createTransaction(validatedData);
      res.status(201).json(transaction);
    } catch (error) {
      res.status(400).json({ error: "Invalid transaction data" });
    }
  });

  // Budget endpoints
  app.get("/api/budgets", async (req, res) => {
    try {
      const month = req.query.month as string | undefined;
      const budgets = await storage.getBudgets(DEMO_USER_ID, month);
      res.json(budgets);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch budgets" });
    }
  });

  app.post("/api/budgets", async (req, res) => {
    try {
      const validatedData = insertBudgetSchema.parse({
        ...req.body,
        userId: DEMO_USER_ID,
      });
      const budget = await storage.createBudget(validatedData);
      res.status(201).json(budget);
    } catch (error) {
      res.status(400).json({ error: "Invalid budget data" });
    }
  });

  app.patch("/api/budgets/:id/spent", async (req, res) => {
    try {
      const { id } = req.params;
      const { spent } = req.body;
      const budget = await storage.updateBudgetSpent(id, spent);
      if (!budget) {
        return res.status(404).json({ error: "Budget not found" });
      }
      res.json(budget);
    } catch (error) {
      res.status(400).json({ error: "Failed to update budget" });
    }
  });

  // Bank account endpoints
  app.get("/api/bank-accounts", async (req, res) => {
    try {
      const accounts = await storage.getBankAccounts(DEMO_USER_ID);
      res.json(accounts);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch bank accounts" });
    }
  });

  app.post("/api/bank-accounts", async (req, res) => {
    try {
      const validatedData = insertBankAccountSchema.parse({
        ...req.body,
        userId: DEMO_USER_ID,
      });
      const account = await storage.createBankAccount(validatedData);
      res.status(201).json(account);
    } catch (error) {
      res.status(400).json({ error: "Invalid bank account data" });
    }
  });

  app.patch("/api/bank-accounts/:id/link", async (req, res) => {
    try {
      const { id } = req.params;
      const { isLinked } = req.body;
      const account = await storage.updateBankAccountLink(id, isLinked);
      if (!account) {
        return res.status(404).json({ error: "Bank account not found" });
      }
      res.json(account);
    } catch (error) {
      res.status(400).json({ error: "Failed to update bank account" });
    }
  });

  // Insight endpoints
  app.get("/api/insights", async (req, res) => {
    try {
      const insights = await storage.getInsights(DEMO_USER_ID);
      res.json(insights);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch insights" });
    }
  });

  app.post("/api/insights", async (req, res) => {
    try {
      const validatedData = insertInsightSchema.parse({
        ...req.body,
        userId: DEMO_USER_ID,
      });
      const insight = await storage.createInsight(validatedData);
      res.status(201).json(insight);
    } catch (error) {
      res.status(400).json({ error: "Invalid insight data" });
    }
  });

  // Spending endpoints
  app.get("/api/spending/monthly", async (req, res) => {
    try {
      const month = req.query.month as string | undefined;
      const spending = await storage.getMonthlySpending(DEMO_USER_ID, month);
      res.json(spending);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch monthly spending" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
