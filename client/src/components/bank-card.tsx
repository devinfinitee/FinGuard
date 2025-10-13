import { Lock, CheckCircle } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface BankCardProps {
  name: string;
  icon: string;
  isLinked?: boolean;
  onLink?: () => void;
}

export function BankCard({ name, icon, isLinked = false, onLink }: BankCardProps) {
  return (
    <Card 
      className={`p-4 hover-elevate cursor-pointer transition-all ${isLinked ? "border-primary" : ""}`}
      onClick={onLink}
      data-testid={`bank-${name.toLowerCase().replace(/\s+/g, "-")}`}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="text-2xl">{icon}</div>
          <span className="font-medium text-foreground">{name}</span>
        </div>
        
        {isLinked ? (
          <CheckCircle className="w-5 h-5 text-primary" />
        ) : (
          <Lock className="w-5 h-5 text-muted-foreground" />
        )}
      </div>
    </Card>
  );
}
