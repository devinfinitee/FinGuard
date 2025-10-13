import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts";

interface SpendingData {
  name: string;
  value: number;
  color: string;
}

interface SpendingChartProps {
  data: SpendingData[];
  total: number;
}

export function SpendingChart({ data, total }: SpendingChartProps) {
  const COLORS = {
    "Food & Dining": "hsl(32, 95%, 58%)",
    "Transport": "hsl(217, 91%, 60%)",
    "Subscriptions": "hsl(271, 81%, 56%)",
    "Shopping": "hsl(340, 82%, 52%)",
    "Bills": "hsl(162, 63%, 50%)",
    "Entertainment": "hsl(280, 70%, 60%)",
    "Healthcare": "hsl(0, 80%, 60%)",
    "Other": "hsl(240, 5%, 65%)",
  };

  return (
    <div className="w-full" data-testid="spending-chart">
      <ResponsiveContainer width="100%" height={280}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={80}
            outerRadius={110}
            paddingAngle={2}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell 
                key={`cell-${index}`} 
                fill={COLORS[entry.name as keyof typeof COLORS] || COLORS.Other} 
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none">
        <div className="text-2xl font-bold text-foreground" data-testid="text-total-spent">
          ₦{total.toLocaleString("en-NG", { minimumFractionDigits: 0 })}
        </div>
        <div className="text-sm text-muted-foreground">Total Spent</div>
      </div>
    </div>
  );
}
