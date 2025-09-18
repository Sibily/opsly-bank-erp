import { BankingButton } from "@/components/ui/banking-button";
import { cn } from "@/lib/utils";

interface QuickActionCardProps {
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  variant?: "banking" | "outline" | "default";
  onClick?: () => void;
  className?: string;
}

export const QuickActionCard = ({ 
  title, 
  icon: Icon, 
  variant = "outline", 
  onClick, 
  className 
}: QuickActionCardProps) => {
  return (
    <BankingButton
      variant={variant}
      className={cn("h-20 flex-col space-y-2 text-center", className)}
      onClick={onClick}
    >
      <Icon className="h-6 w-6" />
      <span className="text-sm font-medium">{title}</span>
    </BankingButton>
  );
};