import { useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TransactionCard } from "@/components/transaction-card";
import { InsightCard } from "@/components/insight-card";
import { SpendingChart } from "@/components/spending-chart";
import type { Transaction, Insight } from "@shared/schema";

export default function Dashboard() {
  const { data: balance, isLoading: balanceLoading, error: balanceError } = useQuery<{ total: number }>({
    queryKey: ["/api/balance"],
  });

  const { data: transactions, isLoading: transactionsLoading, error: transactionsError } = useQuery<Transaction[]>({
    queryKey: ["/api/transactions/recent"],
  });

  const { data: insights, isLoading: insightsLoading, error: insightsError } = useQuery<Insight[]>({
    queryKey: ["/api/insights"],
  });

  const { data: spendingData, isLoading: spendingLoading, error: spendingError } = useQuery<{ name: string; value: number; color: string }[]>({
    queryKey: ["/api/spending/monthly"],
  });

  const totalSpent = spendingData?.reduce((sum, item) => sum + item.value, 0) || 0;

  return (
    <div className="space-y-6">
      {/* Welcome Header */}
      <div>
        <h1 className="text-2xl font-bold text-foreground" data-testid="text-welcome">
          Welcome back, Sarah
        </h1>
        <p className="text-muted-foreground">Track smart. Spend wise. Live free.</p>
      </div>

      {/* Balance Card */}
      <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
        <CardContent className="pt-6">
          <p className="text-sm text-muted-foreground mb-1">Total Balance</p>
          {balanceLoading ? (
            <div className="h-12 bg-muted/50 rounded-md animate-pulse my-1" />
          ) : balanceError ? (
            <p className="text-destructive">Failed to load balance</p>
          ) : (
            <p className="text-4xl font-bold text-foreground" data-testid="text-balance">
              ₦{balance?.total.toLocaleString("en-NG", { minimumFractionDigits: 0 }) || "385,000"}
            </p>
          )}
          <p className="text-xs text-muted-foreground mt-2">As of today</p>
        </CardContent>
      </Card>

      {/* Key Insight */}
      {insightsLoading ? (
        <div className="h-20 bg-muted/50 rounded-md animate-pulse" />
      ) : insightsError ? (
        <Card className="bg-destructive/10 border-destructive/20 p-4">
          <p className="text-sm text-destructive">Failed to load insights</p>
        </Card>
      ) : insights && insights.length > 0 ? (
        <InsightCard 
          message={insights[0].message}
          type={insights[0].type as "warning" | "info" | "success"}
        />
      ) : null}

      {/* Spending Summary & Recent Transactions Grid */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Spending Summary */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Spending Summary</CardTitle>
            <p className="text-sm text-muted-foreground">(This Month)</p>
          </CardHeader>
          <CardContent className="relative">
            {spendingLoading ? (
              <div className="h-64 flex items-center justify-center">
                <div className="w-48 h-48 bg-muted/50 rounded-full animate-pulse" />
              </div>
            ) : spendingError ? (
              <div className="h-64 flex items-center justify-center">
                <p className="text-destructive">Failed to load spending data</p>
              </div>
            ) : spendingData && spendingData.length > 0 ? (
              <SpendingChart data={spendingData} total={totalSpent} />
            ) : (
              <div className="h-64 flex items-center justify-center">
                <p className="text-muted-foreground">No spending data yet</p>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Recent Transactions */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Recent Transactions</CardTitle>
          </CardHeader>
          <CardContent>
            {transactionsLoading ? (
              <div className="space-y-3">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="h-16 bg-muted/50 rounded-md animate-pulse" />
                ))}
              </div>
            ) : transactionsError ? (
              <div className="h-40 flex items-center justify-center">
                <p className="text-destructive">Failed to load transactions</p>
              </div>
            ) : transactions && transactions.length > 0 ? (
              <div className="divide-y divide-border">
                {transactions.map((transaction) => (
                  <TransactionCard key={transaction.id} transaction={transaction} showDate />
                ))}
              </div>
            ) : (
              <div className="h-40 flex items-center justify-center">
                <p className="text-muted-foreground">No transactions yet</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Recent Trends - Can be expanded later */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Recent Trends</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {transactions && transactions.slice(0, 2).map((transaction) => (
              <div key={transaction.id} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                <div>
                  <p className="font-medium text-foreground">{transaction.merchant}</p>
                  <p className="text-sm text-muted-foreground">
                    {new Date(transaction.date).toLocaleDateString("en-NG")}
                  </p>
                </div>
                <p className="font-semibold text-destructive">
                  ₦{parseFloat(transaction.amount).toLocaleString("en-NG", { minimumFractionDigits: 0 })}
                </p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
