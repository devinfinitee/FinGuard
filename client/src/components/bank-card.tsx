import { Lock, CheckCircle, Building2 } from "lucide-react";
import { Card } from "@/components/ui/card";

interface BankCardProps {
  name: string;
  icon: string;
  color?: string;
  isLinked?: boolean;
  onLink?: () => void;
}

const bankIcons: Record<string, string> = {
  access: "A",
  first: "F",
  gtbank: "GT",
  uba: "U",
  zenith: "Z",
  opay: "O",
  mtn: "M",
};

export function BankCard({ name, icon, color = "#6F38C5", isLinked = false, onLink }: BankCardProps) {
  const bankInitial = bankIcons[icon] || icon.charAt(0).toUpperCase();
  
  return (
    <Card 
      className={`p-4 cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
        isLinked ? "border-2 border-purple-600 bg-purple-50 dark:bg-purple-900/20" : "border border-gray-200 dark:border-gray-700"
      }`}
      onClick={onLink}
      data-testid={`bank-${name.toLowerCase().replace(/\s+/g, "-")}`}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div 
            className="w-12 h-12 rounded-lg flex items-center justify-center font-bold text-white text-lg shadow-md"
            style={{ backgroundColor: color }}
          >
            {bankInitial}
          </div>
          <div>
            <span className="font-semibold text-foreground block">{name}</span>
            {isLinked && <span className="text-xs text-purple-600 dark:text-purple-400">Connected</span>}
          </div>
        </div>
        
        {isLinked ? (
          <CheckCircle className="w-6 h-6 text-purple-600 dark:text-purple-400" />
        ) : (
          <Lock className="w-5 h-5 text-muted-foreground" />
        )}
      </div>
    </Card>
  );
}
