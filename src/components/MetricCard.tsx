import { TrendingUp, TrendingDown } from "lucide-react";
import { BankingCard, BankingCardContent } from "@/components/ui/banking-card";
import { cn } from "@/lib/utils";

interface MetricCardProps {
  title: string;
  value: string;
  change: string;
  trend: "up" | "down";
  icon: React.ComponentType<{ className?: string }>;
  className?: string;
}

export const MetricCard = ({ title, value, change, trend, icon: Icon, className }: MetricCardProps) => {
  return (
    <BankingCard variant="elevated" className={cn("hover:scale-105 transition-all duration-200", className)}>
      <BankingCardContent className="p-6">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <p className="text-sm font-medium text-muted-foreground">{title}</p>
            <p className="text-2xl font-bold text-foreground mt-2">{value}</p>
            <div className={cn(
              "flex items-center text-sm mt-2",
              trend === 'up' ? 'text-success' : 'text-destructive'
            )}>
              {trend === 'up' ? (
                <TrendingUp className="h-3 w-3 mr-1" />
              ) : (
                <TrendingDown className="h-3 w-3 mr-1" />
              )}
              {change}
            </div>
          </div>
          <div className="bg-gradient-primary p-3 rounded-full flex-shrink-0">
            <Icon className="h-6 w-6 text-white" />
          </div>
        </div>
      </BankingCardContent>
    </BankingCard>
  );
};