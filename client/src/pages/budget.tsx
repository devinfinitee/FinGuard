import { useEffect, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BudgetProgressBar } from "@/components/budget-progress-bar";
import { ShoppingBag, Car, Smartphone, ShoppingCart, Zap, Film, Heart, MoreHorizontal, Shield } from "lucide-react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { animateCounter } from "@/lib/gsap-utils";
import { useFadeIn, useStaggerChildren } from "@/hooks/useGSAP";
import { mockBudgets } from "@/data/mockData";

const categoryIcons: Record<string, any> = {
  "Food & Dining": ShoppingBag,
  "Transport": Car,
  "Subscriptions": Smartphone,
  "Shopping": ShoppingCart,
  "Bills": Zap,
  "Entertainment": Film,
  "Healthcare": Heart,
  "Other": MoreHorizontal,
};

export default function BudgetPage() {
  // Using mock data - will be replaced with API calls when backend is ready
  const budgets = mockBudgets;
  const budgetsLoading = false;

  const totalBudget = budgets.reduce((sum, b) => sum + parseFloat(b.amount), 0);
  const totalSpent = budgets.reduce((sum, b) => sum + parseFloat(b.spent), 0);
  const remaining = totalBudget - totalSpent;
  const percentage = (totalSpent / totalBudget) * 100;

  const chartData = [
    { name: "Spent", value: totalSpent, color: "hsl(270, 60%, 50%)" },
    { name: "Remaining", value: remaining, color: "hsl(240, 5%, 90%)" },
  ];

  const headerRef = useFadeIn(0.1);
  const chartRef = useFadeIn(0.3);
  const budgetListRef = useStaggerChildren(0.5);
  const totalSpentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (totalSpentRef.current) {
      animateCounter(totalSpentRef.current, totalSpent, 1.5, '₦', '');
    }
  }, []);

  return (
    <div className="space-y-6 pb-8">
      <div ref={headerRef} className="text-center">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-purple-100 dark:bg-purple-900/30 rounded-full mb-4">
          <svg className="w-10 h-10 text-purple-600 dark:text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
          </svg>
        </div>
        <h1 className="text-4xl font-bold text-foreground mb-2">Set Monthly Budget</h1>
        <p className="text-muted-foreground text-lg">Track smart. Spend wise. Live free.</p>
      </div>

      {/* Overall Budget Progress */}
      <Card ref={chartRef} className="max-w-2xl mx-auto shadow-lg hover:shadow-xl transition-shadow">
        <CardContent className="pt-8 pb-8">
            <div className="relative">
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={chartData}
                      cx="50%"
                      cy="50%"
                      innerRadius={100}
                      outerRadius={140}
                      paddingAngle={0}
                      dataKey="value"
                      animationBegin={0}
                      animationDuration={1000}
                    >
                      {chartData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
                
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                  <div ref={totalSpentRef} className="text-3xl font-bold text-foreground mb-1" data-testid="text-budget-chart">
                    ₦{totalSpent.toLocaleString("en-NG", { minimumFractionDigits: 0 })}
                  </div>
                  <div className="text-lg text-muted-foreground">
                    / ₦{totalBudget.toLocaleString("en-NG", { minimumFractionDigits: 0 })}
                  </div>
                  <div className="text-sm text-muted-foreground mt-2">Remaining this month</div>
                </div>
              </div>
            </div>
          </CardContent>
      </Card>

      {/* Category Budgets */}
      <div className="max-w-2xl mx-auto">
        <div ref={budgetListRef} className="space-y-4">
          {budgets.map((budget) => {
              const Icon = categoryIcons[budget.category] || MoreHorizontal;
              const spent = parseFloat(budget.spent);
              const amount = parseFloat(budget.amount);
              
              return (
                <Card key={budget.id} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <h3 className="font-semibold text-foreground">{budget.category}</h3>
                          <span className="text-sm font-medium text-muted-foreground">
                            ₦{spent.toLocaleString("en-NG", { minimumFractionDigits: 0 })}
                          </span>
                        </div>
                        <BudgetProgressBar
                          spent={spent}
                          total={amount}
                          category={budget.category}
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
        </div>

        {/* Save Button */}
        {budgets.length > 0 && (
          <div className="mt-8 text-center">
            <Button className="bg-purple-600 hover:bg-purple-700 text-white h-12 px-12 text-lg shadow-lg hover:shadow-xl transition-all" data-testid="button-save-budget">
              Save Budget
            </Button>
          </div>
        )}
      </div>

      {/* Security Footer */}
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
          <Shield className="w-4 h-4" />
          <span>Your data is encrypted and kept private</span>
        </div>
        <div className="flex items-center justify-center gap-6 mt-4 text-xs text-muted-foreground">
          <span>Version 1.0</span>
          <span>•</span>
          <a href="/privacy" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
            Privacy Policy
          </a>
          <span>•</span>
          <a href="/terms" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
            Terms of Service
          </a>
        </div>
      </div>
    </div>
  );
}
