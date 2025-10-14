import { useEffect, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TransactionCard } from "@/components/transaction-card";
import { InsightCard } from "@/components/insight-card";
import { SpendingChart } from "@/components/spending-chart";
import { Bell, Mic, Zap } from "lucide-react";
import { animateCounter } from "@/lib/gsap-utils";
import { useFadeIn, useStaggerChildren } from "@/hooks/useGSAP";
import { mockTransactions, mockInsights, mockSpendingData, mockBalance } from "@/data/mockData";

export default function Dashboard() {
  // Using mock data - will be replaced with API calls when backend is ready
  const balance = mockBalance;
  const transactions = mockTransactions.slice(0, 5);
  const insights = mockInsights;
  const spendingData = mockSpendingData;
  
  const balanceLoading = false;
  const transactionsLoading = false;
  const insightsLoading = false;
  const spendingLoading = false;
  
  const totalSpent = spendingData.reduce((sum, item) => sum + item.value, 0);
  
  const balanceRef = useRef<HTMLParagraphElement>(null);
  const headerRef = useFadeIn(0.1);
  const cardsRef = useStaggerChildren(0.3);

  useEffect(() => {
    if (balanceRef.current) {
      animateCounter(balanceRef.current, balance.total, 1.5, '₦', '');
    }
  }, []);

  return (
    <div className="space-y-6">
      {/* Header with Actions */}
      <div ref={headerRef} className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground" data-testid="text-welcome">
            Welcome back, Sarah
          </h1>
          <p className="text-muted-foreground">Track smart. Spend wise. Live free.</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon" className="rounded-full">
            <Mic className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full">
            <Bell className="w-5 h-5" />
          </Button>
          <Button className="bg-purple-600 hover:bg-purple-700 text-white">
            <Zap className="w-4 h-4 mr-2" />
            Quick Actions
          </Button>
        </div>
      </div>

      <div ref={cardsRef} className="grid lg:grid-cols-3 gap-6">
        {/* Balance Card */}
        <Card className="bg-gradient-to-br from-purple-500 to-purple-600 text-white border-0 shadow-lg hover:shadow-xl transition-shadow">
          <CardContent className="pt-6">
            <p className="text-purple-100 mb-2">Total Balance</p>
            <p ref={balanceRef} className="text-4xl font-bold" data-testid="text-balance">
              ₦{balance.total.toLocaleString("en-NG", { minimumFractionDigits: 0 })}
            </p>
            <p className="text-purple-100 text-sm mt-2">As of today</p>
          </CardContent>
        </Card>

        {/* Key Insight Card */}
        {insights && insights.length > 0 && (
          <Card className="lg:col-span-2 bg-gradient-to-r from-purple-600 to-purple-700 text-white border-0 shadow-lg">
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Zap className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-lg mb-1">
                    {insights[0].message.split('.')[0]}
                  </p>
                  <p className="text-purple-100 text-sm">
                    {insights[0].message.split('.').slice(1).join('.')}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </div>

      {/* Spending Summary & Recent Transactions Grid */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Spending Summary */}
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle className="text-lg">Spending Summary</CardTitle>
            <p className="text-sm text-muted-foreground">(This Month)</p>
          </CardHeader>
          <CardContent className="relative">
            <SpendingChart data={spendingData} total={totalSpent} />
          </CardContent>
        </Card>

        {/* Recent Transactions */}
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle className="text-lg">Recent Transactions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="divide-y divide-border">
              {transactions.map((transaction) => (
                <TransactionCard key={transaction.id} transaction={transaction} showDate />
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Trends */}
      <Card className="hover:shadow-lg transition-shadow">
        <CardHeader>
          <CardTitle className="text-lg">Recent Trends</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {transactions.slice(0, 2).map((transaction) => (
                <div key={transaction.id} className="flex items-center justify-between p-4 bg-gradient-to-r from-purple-50 to-transparent dark:from-purple-900/20 rounded-lg hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center">
                      <span className="text-purple-600 dark:text-purple-400 font-semibold">
                        {transaction.merchant.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{transaction.merchant}</p>
                      <p className="text-sm text-muted-foreground">
                        {new Date(transaction.date).toLocaleDateString("en-NG")}
                      </p>
                    </div>
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
