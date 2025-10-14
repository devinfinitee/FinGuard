import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SpendingChart } from "@/components/spending-chart";
import { BudgetProgressBar } from "@/components/budget-progress-bar";
import { mockBudgets, mockSpendingData } from "@/data/mockData";

export default function Insights() {
  // Using mock data - will be replaced with API calls when backend is ready
  const spendingData = mockSpendingData;
  const budgets = mockBudgets;
  
  const totalSpent = spendingData.reduce((sum, item) => sum + item.value, 0);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Spending Insights</h1>
        <p className="text-muted-foreground">Track your spending patterns</p>
      </div>

      {/* Monthly Spending Chart */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Monthly Spending Breakdown</CardTitle>
          <p className="text-sm text-muted-foreground">Current Month</p>
        </CardHeader>
        <CardContent className="relative">
          <SpendingChart data={spendingData} total={totalSpent} />
        </CardContent>
      </Card>

      {/* Category Breakdown with Progress Bars */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Category Breakdown</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {budgets.map((budget) => (
            <BudgetProgressBar key={budget.id} budget={budget} />
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
