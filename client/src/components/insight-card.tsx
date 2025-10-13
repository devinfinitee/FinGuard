import { Lightbulb, AlertTriangle, CheckCircle, Info } from "lucide-react";
import { Card } from "@/components/ui/card";

interface InsightCardProps {
  message: string;
  type?: "warning" | "info" | "success";
}

export function InsightCard({ message, type = "info" }: InsightCardProps) {
  const icons = {
    warning: AlertTriangle,
    info: Lightbulb,
    success: CheckCircle,
  };
  
  const Icon = icons[type];
  
  const bgColors = {
    warning: "bg-[hsl(38,92%,95%)] border-l-[hsl(38,92%,50%)]",
    info: "bg-[hsl(270,60%,95%)] border-l-primary",
    success: "bg-[hsl(142,76%,95%)] border-l-[hsl(142,76%,36%)]",
  };

  const iconColors = {
    warning: "text-[hsl(38,92%,50%)]",
    info: "text-primary",
    success: "text-[hsl(142,76%,36%)]",
  };

  return (
    <Card className={`${bgColors[type]} border-l-4 p-4`} data-testid="insight-card">
      <div className="flex items-start gap-3">
        <Icon className={`w-5 h-5 ${iconColors[type]} flex-shrink-0 mt-0.5`} />
        <p className="text-sm font-medium text-foreground leading-relaxed" data-testid="text-insight-message">
          {message}
        </p>
      </div>
    </Card>
  );
}
