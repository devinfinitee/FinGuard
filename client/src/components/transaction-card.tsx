import { ShoppingBag, Car, Tv, CreditCard, Receipt, Music, Heart, MoreHorizontal } from "lucide-react";
import type { Transaction } from "@shared/schema";

const categoryIcons = {
  "Food & Dining": ShoppingBag,
  "Transport": Car,
  "Subscriptions": Tv,
  "Shopping": ShoppingBag,
  "Bills": Receipt,
  "Entertainment": Music,
  "Healthcare": Heart,
  "Other": MoreHorizontal,
};

const categoryColors = {
  "Food & Dining": "bg-[hsl(32,95%,58%)]",
  "Transport": "bg-[hsl(217,91%,60%)]",
  "Subscriptions": "bg-[hsl(271,81%,56%)]",
  "Shopping": "bg-[hsl(340,82%,52%)]",
  "Bills": "bg-[hsl(162,63%,50%)]",
  "Entertainment": "bg-[hsl(280,70%,60%)]",
  "Healthcare": "bg-[hsl(0,80%,60%)]",
  "Other": "bg-muted-foreground",
};

interface TransactionCardProps {
  transaction: Transaction;
  showDate?: boolean;
}

export function TransactionCard({ transaction, showDate = false }: TransactionCardProps) {
  const Icon = categoryIcons[transaction.category as keyof typeof categoryIcons] || MoreHorizontal;
  const colorClass = categoryColors[transaction.category as keyof typeof categoryColors] || "bg-muted-foreground";
  
  const isExpense = transaction.type === "expense";
  const amountColor = isExpense ? "text-destructive" : "text-[hsl(142,76%,36%)]";
  
  const formattedDate = new Date(transaction.date).toLocaleDateString("en-NG", {
    day: "numeric",
    month: "short",
  });

  return (
    <div className="flex items-center gap-3 py-3" data-testid={`transaction-${transaction.id}`}>
      <div className={`flex items-center justify-center w-10 h-10 rounded-full ${colorClass} flex-shrink-0`}>
        <Icon className="w-5 h-5 text-white" />
      </div>
      
      <div className="flex-1 min-w-0">
        <p className="font-semibold text-foreground truncate" data-testid={`text-merchant-${transaction.id}`}>
          {transaction.merchant}
        </p>
        <p className="text-sm text-muted-foreground">
          {transaction.category}
          {showDate && ` • ${formattedDate}`}
        </p>
      </div>
      
      <div className={`font-semibold ${amountColor} flex-shrink-0`} data-testid={`text-amount-${transaction.id}`}>
        {isExpense ? "-" : "+"}₦{parseFloat(transaction.amount).toLocaleString("en-NG", { minimumFractionDigits: 0, maximumFractionDigits: 0 })}
      </div>
    </div>
  );
}
